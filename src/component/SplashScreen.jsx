import { useEffect, useState } from "react";
import { stanlogo } from "../asset";

const SplashScreen = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center transition-opacity ${
        showLogo ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src={stanlogo} alt="Company Logo" className="logo-animation" />
    </div>
  );
};

export default SplashScreen;
