import { useState, useContext } from 'react'
import { selectedContext } from '../App'
import { RiAddLine } from '@remixicon/react'
import Categories from './Categories'
import '../css/Header.css'

const Header = () => {
  const { activeSwitch } = useContext(selectedContext)
  const [activeCategories, setActiveCategories] = useState(false)

  function selectCategories() {
    setActiveCategories(prevActive => !prevActive)
  }

  return (
    <header className={`main-header ${activeSwitch ? 'dark' : ''}`}>
      <div className="header-info">
         <h1>SpeakNotes</h1>
         <button onClick={selectCategories} title='Criar nova nota'>
            <RiAddLine className='plus-icon'/>
         </button>
      </div>
      {activeCategories && <Categories/>}
    </header>
  )
}

export default Header