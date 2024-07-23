import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navItems = [
    "Home",
    "Software",
    "Athletics",
    "Magic",
    "Art",
    "Cooking",
    "Hybrid Builds",
    "Cognitive Prowess",
  ];
  const navigate = useNavigate();
  return (
    <div style={{ marginLeft: "180px" }}>
      <div
        style={{
          justifyContent: "space-evenly",
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          gap: "50px",
          color: "white",
          opacity: "100%",
        }}
      >
        {navItems.map((m) => (
          <b
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/${m.toLowerCase()}`)}
          >
            {m}{" "}
          </b>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
