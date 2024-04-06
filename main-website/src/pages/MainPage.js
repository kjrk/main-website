import AboutMeComponent from "../components/AboutMeComponent";
import NavBar from "../components/NavBar";
import ShowOffComponent from "../components/ShowOffComponent";
import "./MainPage.scss";
function MainPage() {
  return (
    <div className="main-layout">
      <div className="nav-bar-layout">
        <NavBar />
      </div>

      <section className="about-me-layout">
        <AboutMeComponent />
      </section>

      <ShowOffComponent />
    </div>
  );
}

export default MainPage;
