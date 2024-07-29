import { RiMenuLine } from '@remixicon/react';
import { useContext } from 'react';
import { selectedContext } from '../App';
import ThemeSwitch from './ThemeSwitch';
import Note from './Note';
import MobileMenu from './MobileMenu';
import '../css/SectionHeader.css'

const SectionHeader = () => {
   const navCategories = [
      'Notas Rápidas', 'Tarefas', 'Trabalho', 'Estudos',
      'Saúde', 'Finanças', 'Viagens', 'Criatividade'
   ]

   const { selected, handleSelected, notes, setNotes, notesCount,
           activeSwitch, opened, handleMenu } = useContext(selectedContext)

   const filteredNotes = notes.filter(note => note.category === selected)

   function toggleEditNote(noteId) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === noteId ? { ...note, isDisabled: !note.isDisabled } : note
        )
      );
    }

   function handleTitleChange(noteId, newTitle) {
      setNotes((prevNotes) =>
         prevNotes.map((note) =>
           note.id === noteId ? { ...note, title: newTitle } : note
         )
       );
   }

   function handleTextChange(noteId, newText) {
      setNotes((prevNotes) =>
         prevNotes.map((note) =>
           note.id === noteId ? { ...note, text: newText } : note
         )
       );
   }

   function deleteNote(noteId) {
      setNotes((prevNotes) => 
         prevNotes.filter((note) => 
            note.id !== noteId
         ) 
      )
   }

  return (
   <main>
    <section className={activeSwitch ? 'dark' : ''}>
      <header className='section-header'>
         <h2>Notas</h2>
         <nav>
            <ul className={`section-categories ${opened ? 'openedMenu' : ''}`}>
               {navCategories.map((category, index) => {
                  return (
                     <li key={index} className='nav-category'>
                        <p 
                           onClick={() => handleSelected(category)} 
                           className={selected === category ? 'selected' : ''}
                        >
                           {notesCount[category] > 0 && <span>{notesCount[category]}</span>} {category}
                        </p>
                     </li>
                  )
               })}
            </ul>
         </nav>
         <ThemeSwitch/>
         <RiMenuLine className={`hamburguer-menu ${opened ? 'openedMenu' : ''}`} onClick={handleMenu}/>
         <MobileMenu/>
      </header>
      <div className="notes-container">
         <ul>
            {filteredNotes.length === 0 ? (
                  <li><p className='zero-notes'>Nenhuma nota criada</p></li>
               ) : (
                  filteredNotes.map((note) => {
                     return (
                        <Note
                           key={note.id}
                           {...note}
                           onTitleChange={handleTitleChange}
                           onTextChange={handleTextChange}
                           onToggleEdit={toggleEditNote}
                           onDeleteNote={deleteNote}
                        />
                     )
                  })
               )
            }
         </ul>
      </div>
    </section>
   </main>
  )
}

export default SectionHeader