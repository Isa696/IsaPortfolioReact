import { BrowserRouter } from "react-router-dom"
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
    <BrowserRouter>
      <div id="page-wraper">
        <HelmetProvider>
          <Helmet>
          <meta property="og:title" content="Isaias Portfolio" />
          <meta name="og:description" content="Portafolio personal como desarrollador frontend." />
          <meta name="og:type" content="website" />
          <meta property="og:site_name" content="Isaias Portfolio" />
          <link rel="canonical" href="https://isa696-portfolio.vercel.app" />
          <meta property="og:image" content="https://i.imgur.com/VZX2mte.png" />
          <meta property="og:url" content="https://isa696-portfolio.vercel.app" />
          <title>Isaias Portfolio</title>
          </Helmet>

        <SideBar />

        <Techs/>

        <MyProjects/>

        <AboutMe/>

        <Contact />


        </HelmetProvider>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
