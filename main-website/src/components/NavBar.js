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
        }}
      >
        {navItems.map((m) => (
          <b style={{ cursor: "pointer" }}>{m} </b>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
