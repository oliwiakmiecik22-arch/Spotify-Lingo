import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding1 />} />
        <Route path="/onboarding2" element={<Onboarding2 />} />
        <Route path="/onboarding3" element={<Onboarding3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;