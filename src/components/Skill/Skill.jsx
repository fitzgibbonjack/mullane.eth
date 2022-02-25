import "./Skill.scss";

export default function Skill({ skill, caption }) {
	return (
		<figure className="skill">
			<img src={`assets/${skill}.svg`} alt={`${skill} logo`} />
			<figcaption className="skill__caption">
				{caption ? caption : skill}
			</figcaption>
		</figure>
	);
}
