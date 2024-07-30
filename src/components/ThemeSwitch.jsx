import { useContext } from "react"
import { selectedContext } from "../App"
import { RiSunLine, RiMoonLine } from "@remixicon/react"
import '../css/ThemeSwitch.css'

const ThemeSwitch = () => {
  const { activeSwitch, setActiveSwitch } = useContext(selectedContext)

  function switchTheme() {
    setActiveSwitch(prev => !prev)
  }

  return (
    <div className={`switch-container ${activeSwitch ? 'dark' : ''}`} 
         onClick={switchTheme}>
      <RiSunLine/>
      <div className={`switch-ball ${activeSwitch ? 'dark' : ''}`}></div>
      <RiMoonLine/>
    </div>
  )
}

export default ThemeSwitch