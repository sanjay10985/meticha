"use client";

import React, { useRef } from "react";
import TechIcon from "./components/tech-icon";
import PhysicsItem from "./components/physics-item";

import CountdownTimer from "./components/countdown-timer";
import Kotlin from "./assets/kotlin";
import Android from "./assets/android";
import Artifact from "./assets/artifact";
import Compose from "./assets/compose";
import Meticha from "./assets/meticha";

const COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",

  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
];
const SIZES = [50, 60, 70, 80, 90];
const TECH_ICONS = [
  { name: "React", color: "#61DAFB" },
  { name: "Node", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Java", color: "#007396" },
  { name: "Rust", color: "#000000" },
  { name: "Docker", color: "#2496ED" },
];

export default function PhysicsPlayground() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  return (
    <div>
      {/* // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 relative overflow-hidden"> */}
      <div className="absolute inset-0 flex top-40 justify-center pointer-events-none">
        <h1 className="text-6xl font-bold text-gray-800 text-center">
          Ready to Build?
          <br />
          Join the Waitlist!
        </h1>
      </div>
      <div
        ref={containerRef}
        className="w-full h-screen bg-white bg-opacity-80 rounded-lg shadow-lg relative overflow-hidden"
        aria-label="Physics playground area"
      >
        <CountdownTimer
          key="timer"
          index={COLORS.length}
          itemsRef={itemsRef}
          containerRef={containerRef}
        />
        <Artifact itemsRef={itemsRef} containerRef={containerRef} />
        <Meticha
          className="size-60 object-contain"
          itemsRef={itemsRef}
          containerRef={containerRef}
        />
        <Compose
          className="size-32 "
          itemsRef={itemsRef}
          containerRef={containerRef}
        />
        <Kotlin
          className="size-32 "
          itemsRef={itemsRef}
          containerRef={containerRef}
        />
        <Android
          className="size-32"
          itemsRef={itemsRef}
          containerRef={containerRef}
        />

        {COLORS.map((color, index) => (
          <PhysicsItem
            key={`circle-${index}`}
            index={index}
            itemsRef={itemsRef}
            containerRef={containerRef}
            color={color}
            size={SIZES[index % SIZES.length]}
          />
        ))}
        {/* 
        {TECH_ICONS.map((icon, index) => (
          <TechIcon
            key={`icon-${icon.name}`}
            index={COLORS.length + 1 + index}
            itemsRef={itemsRef}
            containerRef={containerRef}
            name={icon.name}
            color={icon.color}
            size={60}
          />
        ))} */}
      </div>
      {/* <p className="mt-4 text-center text-gray-600 z-10">
        Drag the circles, icons, and timer to interact with them. They will
        collide with each other and the container walls.
      </p> */}
    </div>
  );
}
