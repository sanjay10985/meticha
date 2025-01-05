import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const christmasDate = new Date(new Date().getFullYear(), 11, 25); // December 25th

    const updateTimer = () => {
      const now = new Date();
      const difference = christmasDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className=" flex ">
      <div className="flex gap-2">
        <AnimatePresence mode="popLayout">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-24 h-32 bg-[#3729E0] rounded-lg flex flex-col items-center justify-center shadow-lg"
            >
              <motion.span
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.1,
                }}
                className="text-4xl font-bold text-white"
              >
                {value.toString().padStart(2, "0")}
              </motion.span>
              <span className="text-sm text-white/80 capitalize">{unit}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-4xl font-bold text-white mb-4 text-center"
      >
        Christmas Sale Ends In
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-2xl text-white/80 text-center"
      >
        Don't miss out on our amazing deals!
      </motion.p> */}
    </div>
  );
};

export default CountdownTimer;
