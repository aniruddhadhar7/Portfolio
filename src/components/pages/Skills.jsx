import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava
} from "react-icons/fa";
import { SiCplusplus, SiPython, SiDjango, SiNextdotjs, SiMysql, SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <SiPython /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <div className="skills-section container" id="skills">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="skills-header-box skills-text-animate">
            <h2 className="skills-title">
              My <span className="skills-highlight">Skills</span>
            </h2>

            <p className="skills-subtitle">
              Technologies and tools I use to build modern and scalable applications.
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="skills-grid skills-grid-animate">
            {skills.map((skill, index) => (
              <div key={index} className="skills-card">
                <div className="skills-icon">{skill.icon}</div>
                <p className="skills-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}