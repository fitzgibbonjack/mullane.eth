import React from "react";
import Typewriter from "typewriter-effect";
import "./Splash.scss";

export default function Splash() {
  const text = [
    "I build responsive websites with a focus on accessiblity.",
    "Focused on crafting intuitive and engaging web products.",
  ];

  return (
    <section className="splash">
      <div className="container">
        <h1 className="splash__title">
          Hello, world. I’m <span className="emphasis">Jack Fitzgibbon</span>, a
          Front End Developer based in{" "}
          <span className="emphasis">Northamptonshire, UK</span>
        </h1>
        <Typewriter
          options={{
            strings: text,
            autoStart: true,
            loop: true,
            delay: 90,
            deleteSpeed: 35,
            pauseFor: 3000,
          }}
        />
        <a
          className="scroll-indicator hide-for-desktop"
          aria-hidden="true"
          aria-label="scroll down"
          href="#main"
        >
          <span className="scroll__arrow">↓</span>
          scroll
        </a>
      </div>
    </section>
  );
}
