import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  SplashScreen,
} from "./component";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ToastContainer limit={1} />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <SplashScreen />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
