import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Selectstyle from "./pages/Selectstyle";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
