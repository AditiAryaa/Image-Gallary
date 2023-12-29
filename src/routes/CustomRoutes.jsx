import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import ImageDetails from "../components/ImageDetails/ImageDetails";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photos/:id" element={<ImageDetails />} />
    </Routes>
  );
}
export default CustomRoutes;
