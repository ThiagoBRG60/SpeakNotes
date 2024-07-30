import { useState, useContext, useEffect } from 'react'
import { selectedContext } from '../App'
import { RiAddLine } from '@remixicon/react'
import Categories from './Categories'
import '../css/Header.css'

const Header = () => {
  const { activeSwitch } = useContext(selectedContext)
  const openedCategories = JSON.parse(localStorage.getItem('openedCategories'))
  const [activeCategories, setActiveCategories] = useState(openedCategories || false)

  function selectCategories() {
    setActiveCategories(prevActive => !prevActive)
  }

  useEffect(() => {
    localStorage.setItem('openedCategories', JSON.stringify(activeCategories))
  }, [activeCategories])

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