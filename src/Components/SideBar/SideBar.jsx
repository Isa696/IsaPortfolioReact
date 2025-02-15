import profilePicture from "../../assets/images/profile-pic.png";
import { useState, useEffect } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll('.section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveSection(sectionId);
    
    // Using jQuery for smooth scrolling
    window.$('html, body').animate({
      scrollTop: window.$(`#${sectionId}`).offset().top - 0
    }, 800);
  };
  return (
<div className="responsive-nav">
      <i className="fa fa-bars" id="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}></i>
      <div id="menu" className={`menu ${menuOpen ? "open" : ""}`}>
        <i className="fa fa-times" id="menu-close" onClick={() => setMenuOpen(false)}></i>
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
              {[
                { id: "section1", text: "Tecnologías" },
                { id: "section2", text: "Proyectos" },
                { id: "section3", text: "Sobre Mí" },
                { id: "section4", text: "Contacto" }
              ].map((section) => (
                <li key={section.id} className={activeSection === section.id ? "active" : ""}>
                  <Link
                    to={`#${section.id}`}
                    onClick={(e) => handleNavClick(e, section.id)}
                  >
                    {section.text}
                  </Link>
                </li>
              ))}
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
              <li>
                <a
                  href="https://www.youtube.com/@IsaiasRomero696"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube"></i>
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
