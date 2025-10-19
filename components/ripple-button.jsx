"use client";

import React, { useState } from "react";

export function RippleButton({
  children,
  className = "",
  rippleColor = "255, 173, 216",
  duration = "0.6s",
  ...props
}) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, ripple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center rounded-lg bg-black px-8 py-2 font-medium text-white overflow-hidden transition-colors hover:bg-gray-800 ${className}`}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/50 pointer-events-none animate-rippling"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
