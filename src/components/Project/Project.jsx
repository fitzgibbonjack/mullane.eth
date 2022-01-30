import React from "react";
import "./Project.scss";
import "../Button/Button.scss";

export default function Project({ data, skeleton, color }) {
  if (skeleton) {
    return (
      <div className="project" style={{ backgroundColor: color }}>
        <div className="skeleton skeleton__img"></div>
        <div className="skeleton skeleton__title"></div>
        <div className="skeleton__description">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div className="skeleton skeleton__links"></div>
        <div className="skeleton skeleton__badges"></div>
      </div>
    );
  } else {
    return (
      <article className="project" style={{ backgroundColor: color }}>
        <a href={data.liveUrl} className="link__img" aria-label="Live Site">
          <img
            src={data.image.data[0].attributes.url}
            alt={`screenshot of ${data.title}`}
            className="project__img"
          />
        </a>
        <h3 className="project__title">{data.title}</h3>
        <p className="project__description">{data.description}</p>
        <div className="project__links">
          <a
            href={data.githubUrl}
            className="link__github"
            aria-label="Github Repo"
          >
            Github
          </a>
          <a href={data.liveUrl} className="link__live" aria-label="Live Site">
            Live Site
          </a>
        </div>
        <ul className="project__badges">
          {data.badges.data.map((badge, i) => (
            <li key={i} className="badge">
              {badge.attributes.badge}
            </li>
          ))}
        </ul>
      </article>
    );
  }
}
