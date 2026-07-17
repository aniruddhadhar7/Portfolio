import "./Home.css";
import pp from "../../assets/images/dp3.png";

export default function Home() {
  return (
    <div className="container hero-section" id="home">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5 col-md-6 text-section">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Aniruddha</span> 👋
          </h1>

          <p className="hero-subtitle">
            Frontend Developer passionate about building clean and modern web
            interfaces using React.
          </p>

          <a href="#projects" className="btn custom-btn mt-3">View Projects</a>
        </div>

        <div className="col-lg-5 col-md-6 text-center image-section">
          <img src={pp} alt="profile" className="profile-img" />
        </div>
      </div>
    </div>
  );
}
