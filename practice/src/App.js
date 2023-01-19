import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Selectstyle from "./pages/Selectstyle";
import ImageUploadA from "./pages/BackgroundPhotoshop";
import ImageUploadB from "./pages/CartoonStyle";
function App() {
  return (
    <div
      style={{ backgroundColor: "#F2C9C9 ", overflow: "auto", height: "100vh" }}
    >
      {/* 배경색 지정 */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/selectpage" element={<Selectstyle />} />
          <Route path="/imageupload/bg" element={<ImageUploadA />} />
          <Route path="/imageupload/cartoon" element={<ImageUploadB />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
