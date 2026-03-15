import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { HSCode } from "./HSCode";
import { Home } from "./Home";
import { Contact } from "./components/Contact/Contact";
import GoogleTranslate from "./components/Home/GoogleTranslate";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <GoogleTranslate />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/HSCode" element={<HSCode />} />
      </Routes>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
