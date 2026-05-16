import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { DesignProcess } from "./components/DesignProcess";
import { DesignToCode } from "./components/DesignToCode";
import { Contact } from "./components/Contact";
import { ScrollToTop } from "./components/ScrollToTop";

import LearnSphere from "./pages/learnsphere";
import IETDAVV from "./pages/IETDAVV";
import RecruitersConnect from "./pages/recruitersconnect";

function HomePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        <SelectedWork />
        <About />
        <Skills />
        <DesignProcess />
        <DesignToCode />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/LearnSphere" element={<LearnSphere />} />

        <Route path="/iet-davv" element={<IETDAVV />} />

        <Route
          path="/recruiters-connect"
          element={<RecruitersConnect />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;