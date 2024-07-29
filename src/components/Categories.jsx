import { useContext } from 'react';
import { selectedContext } from '../App';
import {RiFlashlightLine, RiTodoLine, RiBriefcaseLine, RiBook2Line, 
        RiFirstAidKitLine, RiWalletLine, RiPlaneLine, RiLightbulbLine,} from "@remixicon/react";
import '../css/Categories.css'

export const categoriesIcons = [
  {name: 'Notas Rápidas', icon: <RiFlashlightLine/>, className: 'quick'},
  {name: 'Tarefas', icon: <RiTodoLine/>, className: 'todo'},
  {name: 'Trabalho', icon: <RiBriefcaseLine/>, className: 'work'},
  {name: 'Estudos', icon: <RiBook2Line/>, className: 'study'},
  {name: 'Saúde', icon: <RiFirstAidKitLine/>, className: 'health'},
  {name: 'Finanças', icon: <RiWalletLine/>, className: 'finance'},
  {name: 'Viagens', icon: <RiPlaneLine/>, className: 'travel'},
  {name: 'Criatividade', icon: <RiLightbulbLine/>, className: 'creativity'}
];

const Categories = () => {
  const { handleSelected, setNotes } = useContext(selectedContext)

  function createNewNote(className, name) {
     const newNote = {
       id: crypto.randomUUID(),
       date: new Date().toLocaleDateString('pt-br', {day: 'numeric', month: 'long', year: 'numeric'}),
       className: className,
       category: name,
       isDisabled: true,
       title: null,
       text: null
     }
     setNotes((prevNotes) => [...prevNotes, newNote])
  }

  function handleClick(index) {
    handleSelected(categoriesIcons[index].name)
    createNewNote(categoriesIcons[index].className, categoriesIcons[index].name)
  }

  return (
     <ul className='categories-header'>
      {categoriesIcons.map((icon, index) => {
         return (
          <li 
            key={index} 
            onClick={() => {
              handleClick(index)}}
              className='header-icon active'
              title={icon.name}>
            {icon.icon}
          </li>
         )
      })}
     </ul>
  )
};

export default Categories;