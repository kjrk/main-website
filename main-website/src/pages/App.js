import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import { SoftwarePage } from "./SoftwarePage";
import NavBar from "../components/NavBar";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="nav-bar-layout">
          <NavBar />
        </div>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/software" element={<SoftwarePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
