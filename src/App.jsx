import AboutMe from "./Components/AboutMe/AboutMe"
import Contact from "./Components/Contact/Contact"
import MyProjects from "./Components/MyProjetcs/MyProjects"
import SideBar from "./Components/SideBar/SideBar"
import Techs from "./Components/Techs/Techs"
import { Helmet } from "react-helmet"
import "./app.css"

function App() {
  return (
    <>
      <div id="page-wraper">

        <Helmet>
          <title>Isaias Portfolio</title>
          <meta name="og:description" content="Portafolio personal como desarrollador frontend." />
          <meta name="og:thumbnail" content="https://i.imgur.com/kf8bimK.jpg" />
        </Helmet>

        <SideBar />

        <Techs/>

        <MyProjects/>

        <AboutMe/>

        <Contact />


      </div>
    </>
  )
}

export default App
