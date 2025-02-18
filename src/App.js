import { useState } from "react";
import "./App.css";
import "./style/globalStyle.css";
import AppCarousel from "./screen/AppCarousel.js";
import {
  skillProgramDetails,
  profileImage,
  skillLabel,
  skillProgram,
  skillImage,
  skillImageBackground,
  imageMockup,
} from "../src/data/PortfolioData.js";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";

function App() {
  const [isNavigate, setIsNavigate] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  const skillViewController = (key) => {
    setIsNavigate((data) => !data);
    setSelectedSkill(key);
    console.log("isClick", isNavigate, key);
  };
  const skillOptionClick = (key) => {
    setSelectedOption(key);
  };
  const backHandler = () => {
    setIsNavigate(false);
    setSelectedSkill(0);
    setSelectedOption(0);
  };
  return (
    <div className="backgroundColor">
      <div className="viewSegment">
        <div className="headerView">
          <div className="headerSegmentView">
            <div className="profilePictureView">hi</div>
            <img
              src={profileImage[0]}
              alt="Profile"
              style={{ width: "50px", borderRadius: "50%" }}
            />
            <img
              src={profileImage[1]}
              alt="Profile"
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </div>

          <div className="headerTextView">
            <span className="folioText1">
              Hi, I'm Arendu Chanda, a passionate software developer with
              <span className="folioText2">3 years of experience</span> in
              building innovative and high-performing applications.
            </span>
          </div>
        </div>
        <div className="footerView">
          <span>Senior developer</span>
          <span>arenduchanda1997@gmail.com</span>
        </div>
      </div>

      <div className="portfolioImageSegment1"></div>
      <div className="portfolioImageSegment2"></div>
      <div className="portfolioImage">
        <img src={profileImage[2]} alt="Profile" style={{ width: "250px" }} />
      </div>
      <div
        className="skillView"
        style={{
          backgroundColor: isNavigate ? "#292925" : "#29292500",
          opacity: isNavigate ? 1 : 1,
          transition: isNavigate ? ".5s" : "4s",
        }}
      >
        <div className="viewSegment">
          <div
            className="skillSegmentBackground"
            style={{
              opacity: isNavigate ? 1 : 0,
            }}
          >
            <img
              src={skillProgram[selectedSkill][selectedOption].image}
              alt="Profile"
              style={{
                marginTop: isNavigate ? "0%" : "100%",
                opacity: isNavigate ? 1 : 0,
                transition: ".5s",
              }}
            />
          </div>
          <div
            className="skillSegmentBlurBackground"
            style={{
              backdropFilter: isNavigate ? "blur(90px)" : "blur(0px)",
              backgroundColor: isNavigate ? "#29292580" : "#29292500",
            }}
          ></div>

          <div
            className="skillViewHeaderSegmentView"
            style={{ marginTop: isNavigate ? "0rem" : "25rem" }}
          >
            <div className="skillIconHeader">
              {skillImage.map((data, index) =>
                index === 3 ? (
                  <div>
                    <div
                      className="divider"
                      style={{
                        opacity: isNavigate ? 0 : 1,
                        transition: ".5s",
                        width: isNavigate ? "0rem" : ".2rem",
                        display: isNavigate ? "none" : "block",
                      }}
                    ></div>
                  </div>
                ) : (
                  <img
                    key={index}
                    className="imageLink"
                    src={data}
                    alt=""
                    onClick={() => skillViewController(index)}
                    style={{
                      width: isNavigate
                        ? index == selectedSkill
                          ? "50px"
                          : "0px"
                        : "40px",
                      borderRadius: "50%",
                      color: "#f1d500",
                      transformOrigin: "center",
                      marginRight:
                        index === 2 ? "0rem" : isNavigate ? "0rem" : "1rem",
                      transition: ".5s",
                    }}
                  />
                )
              )}
              <span
                style={{
                  opacity: isNavigate ? 1 : 0,
                  fontSize: isNavigate ? "1.5rem" : "0rem",
                  fontWeight: 700,
                  color: "#f1d500",
                  transition: ".8s",
                  marginLeft: isNavigate ? "1rem" : "0rem",
                }}
              >
                {skillLabel[selectedSkill]}
              </span>
            </div>
          </div>

          <div
            className="projectBackground"
            style={{
              opacity: isNavigate ? 1 : 0,
              marginTop: isNavigate ? "60px" : "25%",
            }}
          >
            <div className="skillOptionView">
              {skillProgram[selectedSkill].map((data, index) => (
                <span
                  className="optionSegment"
                  onClick={() => skillOptionClick(index)}
                  style={{
                    fontWeight: index === selectedOption ? 700 : 200,
                    fontSize: index === selectedOption ? "1.2rem" : ".9rem",
                    transition: ".5s",
                    cursor: "pointer",
                    marginBottom: ".5rem",
                  }}
                >
                  {data["option"]}
                </span>
              ))}
              <div className="skillDetailsSegment">
                {skillProgramDetails[selectedOption].map((data, index) => (
                  <div className="skillIndividualSegment">
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {data["label"]}
                    </span>
                    <span
                      style={{
                        fontWeight: 200,
                        fontSize: ".9rem",
                      }}
                    >
                      {data["details"]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="segmentAnimation">
                <ArrowCircleLeftRoundedIcon
                  style={{
                    cursor: "pointer",
                    fontSize: isNavigate ? "1.3rem" : "0rem",
                    transition: ".5s",
                  }}
                  onClick={() => backHandler()}
                />
              </div>
            </div>
            <div>
              <div>
                {" "}
                <AppCarousel
                  items={imageMockup[selectedSkill][selectedOption]}
                  autoPlay={true}
                  interval={6000}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
