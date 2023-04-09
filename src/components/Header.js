import Logo from "../assets/logo.png";
import "../index.css";
import "../App.css";
import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="task mate logo" />
        <span>Task Mate </span>
        <h5> productivty buddy</h5>
      </div>
      <div className="themeSelector">
        <span
          className={theme === "light" ? "light activeTheme" : "light"}
          onClick={() => setTheme("light")}
        ></span>
        <span
          className={theme === "medium" ? "medium activeTheme" : "medium"}
          onClick={() => setTheme("medium")}
        ></span>
        <span
          className={theme === "dark" ? "dark activeTheme" : "dark"}
          onClick={() => setTheme("dark")}
        ></span>
        <span
          className={
            theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"
          }
          onClick={() => setTheme("gradientOne")}
        ></span>
        <span
          className={
            theme === "gradientTwo" ? "gradientTwo activeTheme" : "grradientTwo"
          }
          onClick={() => setTheme("gradientTwo")}
        ></span>
        <span
          className={
            theme === "gradientThree"
              ? "gradientThree activeTheme"
              : "gradientThree"
          }
          onClick={() => setTheme("gradientThree")}
        ></span>
      </div>
    </header>
  );
};
