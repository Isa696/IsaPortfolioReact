import AboutMe from "./Components/AboutMe/AboutMe"
import Contact from "./Components/Contact/Contact"
import MyProjects from "./Components/MyProjetcs/MyProjects"
import SideBar from "./Components/SideBar/SideBar"
import Techs from "./Components/Techs/Techs"
import "./app.css"

function App() {
  return (
    <>
      <div id="page-wraper">

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
