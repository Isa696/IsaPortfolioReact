import AboutMe from "./Components/AboutMe/AboutMe"
import Contact from "./Components/Contact/Contact"
import MyProjects from "./Components/MyProjetcs/MyProjects"
import SideBar from "./Components/SideBar/SideBar"
import Techs from "./Components/Techs/Techs"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./app.css"

function App() {
  return (
    <>
      <div id="page-wraper">
      <HelmetProvider>

        <Helmet>
          <title>Isaias Portfolio</title>
          <meta name="description" content="Portafolio personal como desarrollador frontend." />
          <meta name="og:thumbnail" content="https://i.imgur.com/VZX2mte.png" />
        </Helmet>

        <SideBar />

        <Techs/>

        <MyProjects/>

        <AboutMe/>

        <Contact />


      </HelmetProvider>
      </div>
    </>
  )
}

export default App
