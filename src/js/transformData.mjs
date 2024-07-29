export function transformNoteToData(note) {
   return {
     id: note.id,
     title: note.title,
     text: note.text,
     date: note.date,
     className: note.className, 
     category: note.category,
     isDisabled: note.isDisabled,
   };
}