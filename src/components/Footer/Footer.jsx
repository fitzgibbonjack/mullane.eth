import "./Footer.scss";
import Github from "../../assets/github.ico";
import Insta from "../../assets/insta.ico";
import LinkedIn from "../../assets/linkedin.ico";
import Twitter from "../../assets/twitter.ico";

export default function Footer() {
  const github = "https://github.com/fitzgibbonjack";
  const insta = "https://www.instagram.com/jaaackfitz/";
  const twitter = "https://twitter.com/jaaackfitz";
  const linkedin = "https://www.linkedin.com/in/jack-fitzgibbon-b6310b167/";
  return (
    <footer className="footer">
      <p className="footer__text">
        Designed and developed by Jack Fitgibbon - &copy; 2022
      </p>

      <nav className="footer__nav" aria-label="social links">
        <ul>
          <li className="nav__github">
            <a href={github} aria-label="Github">
              <img src={Github} alt="Github logo" />
            </a>
          </li>
          <li className="nav__instagram">
            <a href={insta} aria-label="Instagram">
              <img src={Insta} alt="Instagram logo" />
            </a>
          </li>
          <li className="nav__twitter">
            <a href={twitter} aria-label="Twitter profile">
              <img src={Twitter} alt="LinkedIn logo" />
            </a>
          </li>
          <li className="nav__linkedin">
            <a href={linkedin} aria-label="LinkedIn profile">
              <img src={LinkedIn} alt="Twitter logo" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
