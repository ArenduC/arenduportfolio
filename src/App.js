import { useState } from "react";
import "./App.css";
import "./style/globalStyle.css";

function App() {
  const profileImage = ["/2068185.svg", "/2068189.svg", "/arendu.svg"];
  const skillImage = [
    "/flutter.svg",
    "/React js.svg",
    "/Angular.svg",
    "/React native.svg",
    "/Figma.svg",
    "/Blender.svg",
  ];
  const skillImageBackground = [
    "/skillBackground01.svg",
    "/skillBackground02.svg",
  ];

  const [isNavigate, setIsNavigate] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(0);

  const skillViewController = (key) => {
    setIsNavigate((data) => !data);
    setSelectedSkill(key);
    console.log("isClick", isNavigate, key);
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
              src={skillImageBackground[selectedSkill]}
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
            style={{ marginTop: isNavigate ? "0%" : "25%" }}
          >
            {skillImage.map((data, index) =>
              index === 3 ? (
                <div>
                  <div
                    className="divider"
                    style={{
                      opacity: isNavigate ? 0 : 1,
                      transition: ".5s",
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
