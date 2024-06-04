import profilePicture from '../../assets/images/profile-pic.jpeg'
import { useState, useEffect } from 'react';
import './SideBar.css';

function SideBar() {

  const scrollToSection = (sectionId) => {
    const reqSection = document.querySelector(`[data-section="${sectionId}"]`);
    const reqSectionPos = reqSection.offsetTop;

    window.scrollTo({
      top: reqSectionPos,
      behavior: 'smooth',
    });
  };


  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const topEdge = section.offsetTop - 80;
        const bottomEdge = topEdge + section.offsetHeight;
        const wScroll = window.scrollY;
        if (topEdge < wScroll && bottomEdge > wScroll) {
          setActiveSection(section.dataset.section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  //Menu open & close functions
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };
  return (
    <div className="responsive-nav">
      <i className="fa fa-bars" id="menu-toggle" onClick={handleToggleMenu}></i>
      <div id="menu" className={`menu ${menuOpen ? 'open' : ''}`}>
        <i className="fa fa-times" id="menu-close" onClick={handleMenuItemClick}></i>
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
              <li className={activeSection === 'section1' ? 'active' : ''}>
                <a href="#section1" onClick={(e) => handleNavClick(e, 'section1')}>
                  Tecnologías
                </a>
              </li>
              <li className={activeSection === 'section2' ? 'active' : ''}>
                <a href="#section2" onClick={(e) => handleNavClick(e, 'section2')}>
                  Proyectos
                </a>
              </li>
              <li className={activeSection === 'section3' ? 'active' : ''}>
                <a href="#section3" onClick={(e) => handleNavClick(e, 'section3')}>
                  Sobre Mí
                </a>
              </li>
              <li className={activeSection === 'section4' ? 'active' : ''}>
                <a href="#section4" onClick={(e) => handleNavClick(e, 'section4')}>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="social-network">
            <ul>
              <li>
                <a href="https://github.com/Isa696/Isa696/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/isaias-romero-b0264b288/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar;