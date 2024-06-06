'use client'
import React, { useState, useEffect } from "react";

export default function FocusTimer() {
  const initialMinutes = 45;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval as NodeJS.Timeout);
            setIsRunning(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      if (interval !== null) {
        clearInterval(interval);
      }
    }
    return () => clearInterval(interval as NodeJS.Timeout);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  }

  const stopTimer = () => {
    setIsRunning(false);
  }

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(initialMinutes);
    setSeconds(0);
  }

  return (
    <div>
        <div className="absolute mb-8 inset-x-0 top-0">Focus Time</div>
      <div className="text-2xl mb-8 md:text-[5rem] font-extrabold text-white">
        {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
      </div>
      <div className="flex justify-evenly absolute mb-8 inset-x-0 bottom-0">
        {!isRunning ? 
            <button className="border border-green-600 bg-green-600 p-1 rounded-lg" onClick={startTimer}>
                Start
            </button>
            :
            <button className="border border-red-600 bg-red-600 p-1 rounded-lg" onClick={stopTimer}>
                Stop
            </button>
        }
        <button className="border border-blue-600 bg-blue-600 p-1 rounded-lg" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

