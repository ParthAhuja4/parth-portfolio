import "./Header.css";
import { links } from "../../Data";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
function Header() {
  const [showMenu, setMenu] = useState(false);

  const getTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light-theme";
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  let themeToggle = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      return;
    }
    setTheme("light-theme");
  };

  return (
    <header className="header">
      <nav className="nav">
        <div
          className={`nav_logo text-cs ${theme == "light-theme" ? "logo" : "logo_white"}`}
        ></div>
        <div className={`${showMenu ? "nav_menu show-menu" : "nav_menu"}`}>
          <div className="nav_data">
            <ul className="nav_list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav_item" key={index}>
                    <Link
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-75}
                      duration={500}
                      className="nav_link text-cs"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="nav_bttns">
          <div className="theme_toggler" onClick={themeToggle}>
            {theme == "light-theme" ? <BsMoon /> : <BsSun />}
          </div>
          <div
            className={`${showMenu ? "nav_toggle animate_toggle " : "nav_toggle"}`}
            onClick={() => {
              setMenu(!showMenu);
            }}
          >
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
