import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home/page";
import { LenisProvider } from "./context/smooth-scroll";
import Header from "./components/kit/header";
import Footer from "./components/kit/footer";
import Services from "./services/page";
import Testimontials from "./testimontials/page";

function App() {
  const location = useLocation(); // ✅ Use the hook
  return (
    <>
      <LenisProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimontials" element={<Testimontials />} />
        </Routes>

        <div key={location.pathname}>
          <Footer />
        </div>
      </LenisProvider>
    </>
  );
}

export default App;
