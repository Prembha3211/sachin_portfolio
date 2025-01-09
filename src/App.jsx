import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Certificate from "./components/Certificate";
import Tech from "./components/Tech";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Certificate />
        <Tech />
        <Clients />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
