import { useState } from "react";

export const usePokemon = (data) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const selectPokemon = (index) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    currentPokemon: data[currentIndex],
    next,
    prev,
    selectPokemon,
    isFirst: currentIndex === 0,
    isLast: currentIndex === data.length - 1,
  };
};