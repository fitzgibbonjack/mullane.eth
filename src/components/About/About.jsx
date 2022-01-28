import React from "react";
import "./About.scss";
import "../Button/Button.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title">&#128075; - I'm Jack Fitzgibbon</h2>
        <p className="about__para">
          Curious by nature, and business minded. I'm a self taught, 21 year old
          creative developer with a passion for creating things that live on the
          internet.
        </p>
        <p className="about__para">
          Leveraging the latest and superlative web technologies to create an
          engaging and refined web experience, I can take an idea from design
          and ideation, to deployment.
        </p>
        <p className="about__para">
          In my spare time when I'm not coding, you'll probably find me playing
          Playstation, or watching Youtube videos about the finest horological
          timepieces.
        </p>

        <a className="button--primary about__button" href="/about">
          more about me
        </a>
      </div>
    </section>
  );
}
