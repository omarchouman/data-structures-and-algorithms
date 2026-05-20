"use client";
import { useState, useEffect, useRef } from "react";

export function useAnimationPlayer<T>(steps: T[]) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speedMs, setSpeedMs] = useState(400);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setIndex(0);
    setPlaying(false);
  }, [steps]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!playing) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        if (prev >= steps.length - 1) {
          setPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, speedMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, speedMs, steps.length]);

  const play = () => {
    if (index < steps.length - 1) setPlaying(true);
  };
  const pause = () => setPlaying(false);
  const reset = () => {
    setPlaying(false);
    setIndex(0);
  };

  return {
    currentStep: steps[index] ?? steps[0],
    index,
    total: steps.length,
    playing,
    play,
    pause,
    reset,
    speedMs,
    setSpeedMs,
  };
}
