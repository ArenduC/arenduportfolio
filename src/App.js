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
          <div className="headerSegmentView">
            {skillImage.map((data, index) =>
              index === 3 ? (
                <div className="divider"></div>
              ) : (
                <img
                  src={data}
                  alt=""
                  style={{
                    width: "50px",
                    borderRadius: "50%",
                    marginRight: index === 2 ? "0rem" : "1rem",
                  }}
                />
              )
            )}
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
    </div>
  );
}

export default App;
