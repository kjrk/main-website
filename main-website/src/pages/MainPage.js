import AboutMeComponent from "../components/AboutMeComponent";
import NavBar from "../components/NavBar";
import ShowOffComponent from "../components/ShowOffComponent";
import "./MainPage.scss";
import { Cloudinary } from "@cloudinary/url-gen";

function MainPage() {
  return (
    <div className="main-layout">
      <section className="about-me-layout">
        <AboutMeComponent />
      </section>

      <ShowOffComponent />
    </div>
  );
}

export default MainPage;
