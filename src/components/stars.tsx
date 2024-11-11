"use client";

import React, { useEffect } from "react";

const createStars = (): void => {
  const starsContainer = document.getElementById("stars");
  if (!starsContainer) return;

  const fragment = document.createDocumentFragment();
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.opacity = `${Math.random() * 0.5}`;
    fragment.appendChild(star);
  }

  starsContainer.appendChild(fragment);
};

const Stars: React.FC = () => {
  useEffect(() => {
    createStars();
  }, []);

  return (
    <div
      id="stars"
      className="absolute top-0 left-0 w-full h-full"
      style={{ zIndex: -1 }} // Asegura que las estrellas queden detrás
    ></div>
  );
};

export default Stars;
