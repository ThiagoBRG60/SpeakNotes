import { RiCloseLine } from '@remixicon/react';
import { useContext, useState } from 'react';
import { selectedContext } from '../App';
import '../css/MobileMenu.css'

const MobileMenu = () => {
   const { activeSwitch, opened ,handleMenu } = useContext(selectedContext)

  return (
   <div className={`mobile-menu ${activeSwitch ? 'dark' : ''} ${opened ? 'opened' : ''}`}>
      <RiCloseLine size={30} onClick={handleMenu}/>
      <h1>SpeakNotes</h1>
   </div>
  )
}

export default MobileMenu