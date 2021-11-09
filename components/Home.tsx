import ManypixelsScience from "./svg/ManypixelsScience";
import ScienceIcon from "@mui/icons-material/Science";
import CodeIcon from "@mui/icons-material/Code";
import InsightsIcon from "@mui/icons-material/Insights";
import LocalFireDepartment from "@mui/icons-material/LocalFireDepartment";

export default function Home() {
  return (
    <section className="home">
      <h1 className="title">
        <div className="title__tags">
          <span className="title__tag">
            <ScienceIcon /> data science
          </span>
          <span className="title__tag">
            <CodeIcon /> webdev
          </span>
          <span className="title__tag">
            <InsightsIcon /> analytics
          </span>
        </div>
        Le numérique au service des
        <ul className="title__typer">
          <li className="title__mask">
            <span className="title__word">organisations.</span>
          </li>
          <li className="title__mask">
            <span className="title__word">associations.</span>
          </li>
          <li className="title__mask">
            <span className="title__word">entreprises.</span>
          </li>
        </ul>
      </h1>
      <ManypixelsScience />
      <div className="window">
        <div className="window__bar">
          <div className="window__button window__button--red"></div>
          <div className="window__button window__button--yellow"></div>
          <div className="window__button window__button--green"></div>
        </div>
        <div className="window__client">
          <h2 className="window__text">
            🚀 Boostez vos projets grâce aux nouvelles technologies
          </h2>
          <a className="window__link">
            <LocalFireDepartment />
            Go !
          </a>
        </div>
      </div>
    </section>
  );
}
