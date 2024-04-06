import "./AboutMeComponent.css";
const AboutMeComponent = () => {
  return (
    <>
      <div className="left-layout">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <b style={{ fontSize: "80px" }}>KEL</b>
          <b style={{ fontSize: "100px" }}>
            <i>KING OF ALL TRADES</i>
          </b>
        </div>
        <div
          style={{ width: "2px", height: "100%", backgroundColor: "white" }}
        ></div>
      </div>
      <div className="right-layout">
        <div
          style={{
            margin: "150px",
            display: "flex",
            color: "white",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <b
            style={{ display: "flex", width: "auto", justifyContent: "center" }}
          >
            ABOUT ME
          </b>

          <p>
            Self-taught across Engineering, Musicality, Artistry, Athletics, and
            Cognitive Conditioning. <br></br> <br></br>The aim is to
            proficiently master diverse skills, honing learning techniques at an
            accelerated pace relative to the norm. By achieving this, each skill
            is intended to serve as a gateway to expanding various real world
            opportunities.
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutMeComponent;
