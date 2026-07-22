import { useState } from "react";
import "./Projects.css";
import swad from "../../assets/images/swad.jpg";
import cert1 from "../../assets/images/certificate1.jpeg";
import cert2 from "../../assets/images/certificate2.jpeg";
import cert3 from "../../assets/images/certificate3.jpeg";
import chat from "../../assets/images/chatapp.png";
import job from "../../assets/images/jobportal.png";
import comingsoon from "../../assets/images/coming.png";
import sh from "../../assets/images/sh.png";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "SMART-HYDRATE: Intelligent Bottle",
      image: sh,
      description: "Patent Filed (App No: 202631032874). An intelligent bottle designed for goal-oriented hydration and tracking user health parameters.",
      demo: "#",
      github: "#",
    },
    {
      title: "Job Portal",
      image: job,
      description: "A fully responsive Online Job Portal built using Django, HTML, CSS, and JavaScript, featuring distinct dashboards for candidates, recruiters, and admins.",
      demo: "#",
      github: "#",
    },
    {
      title: "AiVa Chatbot Website",
      image: chat,
      description: "An AI-powered chatbot web application using React, OpenRouter API, and JavaScript, with a fully responsive and polished console UI.",
      demo: "https://anychat-ai.vercel.app/",
      github: "#",
    },
    {
      title: "ExamDeskPro Portal",
      image: comingsoon,
      description: "A secure, desktop-based Online Examination Portal featuring timed assessments and automated result management built using JavaFX and MySQL.",
      demo: "#",
      github: "#",
    },
    {
      title: "Swad Food ordering",
      image: swad,
      description: "A responsive online food ordering and restaurant search website designed with an attractive UI using the MERN stack and Tailwind CSS.",
      demo: "https://swad-food-delivery.vercel.app/",
      github: "https://github.com/aniruddhadhar7/Swad-Food-Delivery",
    },
  ];

  const certificates = [
    {
      title: "Full Stack MERN Development (Ardent Computech)",
      image: cert1,
      link: "#",
    },
    {
      title: "Programming in Java (IIT Kharagpur / NPTEL)",
      image: cert2,
      link: "#",
    },
    {
      title: "SAP S/4HANA Development (Narula Institute of Tech)",
      image: cert3,
      link: "#",
    },
  ];

  return (
    <div className="projects-section container" id="projects">
      <div className="projects-header projects-text-animate">
        <h2 className="projects-title">
          My <span className="highlight">Projects</span>
        </h2>
      </div>

      <div className="projects-grid projects-grid-animate">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt="project" className="project-img" />

            <h5 className="projtitle">{proj.title}</h5>
            <p className="projdesc" style={{ fontSize: "13px", color: "var(--text-secondary)", margin: "10px 0 15px", lineHeight: "1.5" }}>
              {proj.description}
            </p>

            <div className="project-buttons">
              <a href={proj.demo} className="btn custom-btn" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a
                href={proj.github}
                className="btn custom-btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-header mt-5 projects-text-animate">
        <h2 className="projects-title">
          My <span className="highlight">Certificates</span>
        </h2>
      </div>

      <div className="certs-list projects-grid-animate">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <div
              className="cert-img-container"
              onClick={() => setSelectedImage(cert.image)}
              style={{ cursor: "zoom-in" }}
            >
              <img src={cert.image} alt="certificate" className="cert-img" />
            </div>

            <div className="cert-info">
              <h5 className="cert-title">{cert.title}</h5>
              <a href={cert.link} className="btn custom-btn" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <span className="close-btn" onClick={() => setSelectedImage(null)}>&times;</span>
          <img
            src={selectedImage}
            alt="Fullscreen Certificate"
            className="fullscreen-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
