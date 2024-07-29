import { useState, createContext, useEffect } from "react"
import Header from "./components/Header"
import SectionHeader from "./components/SectionHeader"
import { transformNoteToData } from "./js/transformData.mjs"
import { categoriesIcons } from "./components/Categories"

export const selectedContext = createContext()

const App = () => {
  const savedNotes = localStorage.getItem('notes');
  const data = JSON.parse(savedNotes);
  const localStorageNotesCount = localStorage.getItem('count')
  const countData = JSON.parse(localStorageNotesCount)
  const localStorageTheme = localStorage.getItem('theme')
  const themeData = JSON.parse(localStorageTheme)
  const [notes, setNotes] = useState(data || [])
  const [notesCount, setNotesCount] = useState(countData || {});
  const [selected, setSelected] = useState('Notas Rápidas')
  const [activeSwitch, setActiveSwitch] = useState(themeData || false)
  const [opened, setOpened] = useState(false)

  function handleMenu() {
     setOpened(prev => !prev)
  }

  function handleSelected(category) {
     setSelected(category)
  }

  function updateNotesCount() {
    localStorage.setItem('count', JSON.stringify(notesCount))
  }

  function saveLocalStorage() {
    try {
      const data = notes.map(transformNoteToData);
      localStorage.setItem('notes', JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error);
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(activeSwitch))
  }, [activeSwitch])

  useEffect(() => {
    updateNotesCount()
  }, [notesCount])

  useEffect(() => {
    localStorage.removeItem('count')
    saveLocalStorage()

    const updateCount = {};
    categoriesIcons.forEach(({ name }) => {
      updateCount[name] = notes.filter(note => note.category === name).length
    });
    setNotesCount(updateCount)
  }, [notes])

  return (
    <selectedContext.Provider 
      value={{selected, handleSelected, notes, setNotes, notesCount, 
              setNotesCount, activeSwitch, setActiveSwitch, opened, handleMenu}}>
      <Header/>
      <SectionHeader/>
    </selectedContext.Provider>
  )
}

export default App