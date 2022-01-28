import "./Skill.scss";

export default function Skill({ skill, children }) {
  return (
    <figure className="skill">
      <img src={`assets/${skill}.svg`} alt={`${skill} logo`} />
      <figcaption className="skill__caption">{skill}</figcaption>
    </figure>
  );
}
