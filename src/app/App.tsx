import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { DesignProcess } from './components/DesignProcess';
import { DesignToCode } from './components/DesignToCode';
import { Contact } from './components/Contact';

function App() {
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

export default App;