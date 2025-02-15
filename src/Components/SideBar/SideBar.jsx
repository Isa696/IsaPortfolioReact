import profilePicture from "../../assets/images/profile-pic.png";
import { useState, useEffect } from "react";
import "./SideBar.css";

function SideBar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Menu open & close functions
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="responsive-nav">
      <i className="fa fa-bars" id="menu-toggle" onClick={handleToggleMenu}></i>
      <div id="menu" className={`menu ${menuOpen ? "open" : ""}`}>
        <i
          className="fa fa-times"
          id="menu-close"
          onClick={handleMenuItemClick}
        ></i>
        <div className="container">
          <div className="image">
            <img src={profilePicture} alt="" />
          </div>
          <div className="author-content">
            <h4>Isaias Romero</h4>
            <span>Front End Developer</span>
          </div>

          <nav className="main-nav" role="navigation">
            <ul className="main-menu">
              <li className={activeSection === "section1" ? "active" : ""}>
                <a
                  href="#section1"
                  onClick={(e) => handleNavClick(e, "section1")}
                >
                  Tecnologías
                </a>
              </li>
              <li className={activeSection === "section2" ? "active" : ""}>
                <a
                  href="#section2"
                  onClick={(e) => handleNavClick(e, "section2")}
                >
                  Proyectos
                </a>
              </li>
              <li className={activeSection === "section3" ? "active" : ""}>
                <a
                  href="#section3"
                  onClick={(e) => handleNavClick(e, "section3")}
                >
                  Sobre Mí
                </a>
              </li>
              <li className={activeSection === "section4" ? "active" : ""}>
                <a
                  href="#section4"
                  onClick={(e) => handleNavClick(e, "section4")}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="social-network">
            <ul>
              <li>
                <a
                  href="https://github.com/Isa696/Isa696/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/isaias-romero-b0264b288/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
