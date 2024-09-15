import AboutMe from "./Components/AboutMe/AboutMe"
import Contact from "./Components/Contact/Contact"
import MyProjects from "./Components/MyProjetcs/MyProjects"
import SideBar from "./Components/SideBar/SideBar"
import Techs from "./Components/Techs/Techs"
import "./app.css"
import { Helmet, HelmetProvider } from "react-helmet-async"

function App() {
  return (
    <>
      <div id="page-wraper">
        <HelmetProvider>
          <Helmet>
          <meta property="og:image" content="https://i.imgur.com/VZX2mte.png" />
          <meta property="og:url" content="https://isa696-portfolio.vercel.app" />
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
