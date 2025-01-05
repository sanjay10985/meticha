import SVGPathCommander from "svg-path-commander";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { elementsConfig } from "./constants";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 101);
}

// Function to convert SVG path "d" to vertices
export function parsePathToVertices(path, sampleLength = 15) {
  // Convert path to absolute commands
  const commander = new SVGPathCommander(path);

  const points = [];
  let lastPoint = null;

  // Get total length of the path
  const totalLength = commander.getTotalLength();
  let length = 0;

  // Sample points along the path
  while (length < totalLength) {
    const point = commander.getPointAtLength(length);

    // Only add point if it's different from the last one
    if (!lastPoint || point.x !== lastPoint.x || point.y !== lastPoint.y) {
      points.push({ x: point.x, y: point.y });
      lastPoint = point;
    }

    length += sampleLength;
  }

  // Ensure we get the last point
  const finalPoint = commander.getPointAtLength(totalLength);
  if (
    lastPoint &&
    (finalPoint.x !== lastPoint.x || finalPoint.y !== lastPoint.y)
  ) {
    points.push({ x: finalPoint.x, y: finalPoint.y });
  }

  return points;
}

export function calculatePosition(value, containerSize, elementSize) {
  if (typeof value === "string" && value.endsWith("%")) {
    const percentage = parseFloat(value) / 100;
    return containerSize * percentage;
  }
  return typeof value === "number"
    ? value
    : elementSize - containerSize + elementSize / 2;
}

export const generateRandomElement = () => {
  const randomElement =
    elementsConfig[Math.floor(Math.random() * elementsConfig.length)];

  if (randomElement.type === "image") {
    return (
      <img
        src={randomElement.src}
        alt="Shape"
        width={randomElement.width}
        height={randomElement.height}
      />
    );
  }
  if (randomElement.type === "component") {
    return <randomElement.component />;
  }

  return <div style={randomElement.style}></div>;
};
