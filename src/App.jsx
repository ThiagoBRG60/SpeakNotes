import { useState, createContext, useEffect } from "react"
import Header from "./components/Header"
import SectionHeader from "./components/SectionHeader"
import { transformNoteToData } from "./js/transformData.mjs"
import { categoriesIcons } from "./components/Categories"

export const selectedContext = createContext()

const App = () => {
  const savedNotes = JSON.parse(localStorage.getItem('notes'))
  const localStorageNotesCount = JSON.parse(localStorage.getItem('count'))
  const localStorageTheme = JSON.parse(localStorage.getItem('theme'))
  const selectedCategory = JSON.parse(localStorage.getItem('category'))
  const openedMenu = JSON.parse(localStorage.getItem('openedMenu'))

  const [notes, setNotes] = useState(savedNotes || [])
  const [notesCount, setNotesCount] = useState(localStorageNotesCount || {});
  const [selected, setSelected] = useState(selectedCategory || 'Notas Rápidas')
  const [activeSwitch, setActiveSwitch] = useState(localStorageTheme || false)
  const [opened, setOpened] = useState(openedMenu || false)

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
    localStorage.setItem('openedMenu', JSON.stringify(opened))
  }, [opened])

  useEffect(() => {
    localStorage.setItem('category', JSON.stringify(selected))
  }, [selected])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(activeSwitch))
  }, [activeSwitch])

  useEffect(() => {
    updateNotesCount()
  }, [notesCount])

  useEffect(() => {
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