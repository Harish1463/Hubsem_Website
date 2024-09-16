import WorkTime from "../Components/Header/WorkTime"
import Contact from "../Components/Header/Contact"
import LittleContact from "../Components/Header/LittleContact"

// importing Navigation Bar
import NavigationBar from "../Components/Header/NavigationBar";


function Header () {
  return (
    <>
      <WorkTime />
      <Contact />
      <LittleContact />
      <NavigationBar />
    </>
  )
}

export default Header