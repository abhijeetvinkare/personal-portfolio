import React, { useEffect, useState } from "react";
import "./Skills.css";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillDatabase, AiOutlineLaptop } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { Fade } from 'react-reveal';

function Skills() {
  const defaultActiveSkill = "Frontend"; // Set your desired default skill here
  const [activeSkill, setActiveSkill] = useState(
    localStorage.getItem("activeSkill") || defaultActiveSkill
  );

  const toggleSkill = (skill) => {
    setActiveSkill(skill);
  };

  useEffect(() => {
    localStorage.setItem("activeSkill", activeSkill);
  }, [activeSkill]);

  const skillsData = {
    Frontend: {
      experience: "More than 7+ Projects",
      skills: [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 85 },
        { name: "JavaScript", percentage: 80 },
        { name: "ReactJs", percentage: 85 },
        { name: "Responsive Design", percentage: 100 },
      ],
    },
    Backend: {
      experience: "More than 6+ Projects",
      skills: [
        { name: "NodeJs", percentage: 70 },
        { name: "ExpressJs", percentage: 80 },
        { name: "RESTful APIs", percentage: 100 },
        { name: "Authentication and Authorization", percentage: 100 },
        { name: "Version Control/Git", percentage: 85 },
        { name: "CI/CD", percentage: 90 },
      ],
    },
    Database: {
      experience: "More than 6+ Projects",
      skills: [
        { name: "MongoDB", percentage: 85 },
        { name: "MySQL", percentage: 70 },
      ],
    },
    Tools: {
      experience: "Expert",
      skills: [
        { name: "Visual Studio Code", percentage: 100 },
        { name: "Postman", percentage: 100 },
        { name: "MongoDB Compass", percentage: 100 },
        { name: "Chrome DevTools", percentage: 100 },
        { name: "GitHub Desktop", percentage: 100 },
      ],
    },
  };

  const skillIcons = {
    Frontend: <AiOutlineLaptop className="skills-icon" />,
    Backend: <AiFillDatabase className="skills-icon" />,
    Database: <BsDatabase className="skills-icon" />,
    Tools: <VscTools className="skills-icon" />,
    // Add more skills and their icons as needed
  };

  return (
    <section className="skills section" id="skills">
      <Fade big cascade duration={2000} delay={200} ease="ease"><h2 className="section-title" data-heading="My Intro">My Technical Skills</h2></Fade>
      <div className="skills-container container grid">
        <div className="skills-tabs">
          {Object.keys(skillsData).map((skill) => {
            const skillInfo = skillsData[skill];
            return (
              <Fade bottom duration={2000} delay={200} ease="ease">  
              <div
                key={skill}
                className={`skills-header ${
                  activeSkill === skill ? "skills-active" : ""
                }`}
                onClick={() => toggleSkill(skill)}
                data-target={`#${skill}`}
              >
                {skillIcons[skill]}
                <div>
                  <h1 className="skills-title">{skill}</h1>
                  <span className="skills-subtitle">{skillInfo.experience}</span>
                </div>
                <IoIosArrowDown
                  className={`skills-arrow ${
                    activeSkill === skill ? "active-skill" : ""
                  }`}
                />
              </div>
            </Fade >
            );
          })}
        </div>

        <div className="skills-content">
          {Object.keys(skillsData).map((skill) => {
            const skillInfo = skillsData[skill];
            return (
              <Fade bottom duration={2000} delay={200} ease="ease">  
              <div
                key={skill}
                className={`skills-group ${
                  activeSkill === skill ? "skills-active" : ""
                }`}
                data-content
                id={skill}
              >
                <div className="skills-list grid">
                  {skillInfo.skills.map((data) => (
                    <div className="skills-data" key={data.name}>
                      <div className="skills-titles">
                        <h3 className="skills-name">{data.name}</h3>
                        <span className="skills-number">{`${data.percentage}%`}</span>
                      </div>
                      <div className="skills-bar">
                        <span
                          className="skills-percentage"
                          style={{ width: `${data.percentage}%` }}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </Fade >  
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
