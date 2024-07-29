import { useContext } from 'react'
import { selectedContext } from '../App'
import { getIconByClassName } from '../js/icons.mjs'
import { RiPencilLine, RiCheckLine, RiDeleteBin2Line, RiVoiceRecognitionLine } from '@remixicon/react'
import { SpeechRecognitionHandler } from '../js/speechRecognition.mjs'
import '../css/Note.css'

const Note = ({id, date, className, title, text, isDisabled, onTitleChange, onTextChange, onToggleEdit, onDeleteNote}) => {
   const { activeSwitch } = useContext(selectedContext)

   const startRecognition = (onResult) => {
      try {
         const recog = new SpeechRecognitionHandler(
            onResult,
            (error) => console.error('Erro no reconhecimento de voz:', error)
         )
         recog.start()
      } catch (error) {
         alert(error.message)
      }
   }

   function handleTitleRecognition() {
      startRecognition((transcript) => onTitleChange(id, transcript))
   }

   function handleTextRecognition() {
      startRecognition((transcript) => onTextChange(id, transcript))
   }

   const IconComponent = getIconByClassName(className);

  return (
   <li className={`note ${className} ${activeSwitch ? 'dark' : ''}`}>
      <div className="date-icon-info">
         <p>{date}</p>
         {
            isDisabled ? 
               <span>{IconComponent && <IconComponent/>}</span>
            :
            <span className='delete' title='Deletar'>
               <RiDeleteBin2Line onClick={() => onDeleteNote(id)}/>
            </span>
         }
      </div>
      <input 
         disabled={isDisabled} 
         onChange={(e) => onTitleChange(id, e.target.value)} 
         value={title || ''} 
         className='title-input' 
         type="text"
         placeholder='Digite um título aqui'
      />
      <textarea 
         disabled={isDisabled} 
         onChange={(e) => onTextChange(id, e.target.value)}
         value={text || ''} 
         className='note-text'
         placeholder='Clique no lápis e digite sua anotação aqui...'
      ></textarea>
      {!isDisabled &&
         <div className='voice-controls'>
            <button onClick={handleTitleRecognition} title="Usar voz no título">
               <RiVoiceRecognitionLine/> Título
            </button>
            <button onClick={handleTextRecognition} title="Usar voz no texto">
               <RiVoiceRecognitionLine/> Texto
            </button>
         </div>
      }
      <button title={isDisabled ? 'Editar' : 'Confirmar'} 
         onClick={() => onToggleEdit(id)} 
         className='edit-note'>
         {isDisabled ? <RiPencilLine/> : <RiCheckLine style={{width: '20px'}}/>}
      </button>
   </li>
  )
}

export default Note