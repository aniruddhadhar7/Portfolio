import "./About.css";
import pp from "../../assets/images/dp3.png";

export default function About() {
  return (
    <div className="container about-section" id="about">
      <div className="row align-items-center">
        <div className="col-md-4 text-left image-section-left">
          <img src={pp} alt="about" className="profile-img" />
        </div>

        <div className="col-md-8 text-section-right">
          <h2 className="hero-title text-center">
            About <span className="highlight">Me</span>
          </h2>

          <p className="hero-subtitle">
            I am <strong>Aniruddha Dhar</strong>, a 3rd year B.Tech student at
            Narula Institute of Technology, with a strong passion for frontend
            development and building modern, interactive web applications.
          </p>

          <p className="hero-subtitle">
            I specialize in <strong>HTML, CSS, JavaScript, and React</strong>,
            and I enjoy transforming ideas into clean, responsive, and
            user-friendly interfaces. I focus on writing efficient code and
            creating smooth user experiences.
          </p>

          <p className="hero-subtitle">
            I have built projects like{" "}
            <strong>To-Do Apps, Movie Watchlist Apps</strong>, and currently
            working on portfolio and real-world applications to strengthen my
            skills.
          </p>

          <p className="hero-subtitle">
            Beyond coding, I have a creative side — I enjoy{" "}
            <strong>photography, videography, editing, and voice arts</strong>,
            which helps me bring better design thinking into my development
            work.
          </p>

          <p className="hero-subtitle">
            I am actively looking for opportunities to grow as a developer,
            contribute to real-world projects, and build impactful digital
            experiences.
          </p>
          <div>
            <a 
              href="/Aniruddha_Dhar_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn custom-btn mt-6"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
