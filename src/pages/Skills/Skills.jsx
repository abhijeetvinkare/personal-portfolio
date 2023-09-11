import React from "react";
import "./Skills.css";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineDatabase } from "react-icons/ai";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">My Experience</h2>
      <div className="skills-container container grid">
        <div className="skills-tabs">
          <div className="skills-header skills-active" data-target="#frontend">
            <AiOutlineDatabase className="skills-icon" />
            <div>
              <h1 className="skills-title">Frontend Developer</h1>
              <span className="skills-subtitle">More than 2+ Years</span>
            </div>
            <IoIosArrowDown className="skills-arrow" />
          </div>

          <div className="skills-header" data-target="#design">
            <AiOutlineDatabase className="skills-icon" />
            <div>
              <h1 className="skills-title">Frontend Developer</h1>
              <span className="skills-subtitle">More than 2+ Years</span>
            </div>
            <IoIosArrowDown className="skills-arrow" />
          </div>

          <div className="skills-header" data-target="#backend">
            <AiOutlineDatabase className="skills-icon" />
            <div>
              <h1 className="skills-title">Frontend Developer</h1>
              <span className="skills-subtitle">More than 2+ Years</span>
            </div>
            <IoIosArrowDown className="skills-arrow" />
          </div>
        </div>

        <div className="skills-content">
          <div className="skills-group skills-active" data-content id="frontend">
            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">HTML</h3>
                  <span className="skills-number">90%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "90%" }}
                  ></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">CSS</h3>
                  <span className="skills-number">80%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "90%" }}
                  ></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">JavaScript</h3>
                  <span className="skills-number">85%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "85%" }}
                  ></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">ReactJs</h3>
                  <span className="skills-number">85%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "85%" }}
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-group" data-content id="design">
            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">HTML</h3>
                  <span className="skills-number">90%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "90%" }}
                  ></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">CSS</h3>
                  <span className="skills-number">80%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "90%" }}
                  ></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">JavaScript</h3>
                  <span className="skills-number">85%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "85%" }}
                  ></span>
                </div>
              </div>
            </div>
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">ReactJs</h3>
                <span className="skills-number">85%</span>
              </div>
              <div className="skills-bar">
                <span
                  className="skills-percentage"
                  style={{ width: "85%" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="skills-group" data-content id="backend">
            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">HTML</h3>
                  <span className="skills-number">90%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "90%" }}
                  ></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">CSS</h3>
                  <span className="skills-number">80%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "90%" }}
                  ></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">JavaScript</h3>
                  <span className="skills-number">85%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "85%" }}
                  ></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">ReactJs</h3>
                  <span className="skills-number">85%</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage"
                    style={{ width: "85%" }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
