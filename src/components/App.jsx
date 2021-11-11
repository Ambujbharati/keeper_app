import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return ( 
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {notes.map((noteItems, index) =>{
      return (
        <Note
        onDelete={deleteNote}
        key={index}
        id={index}
        title={noteItems.title}
        content={noteItems.content}
        />
        )
      })}
      <Footer />
    </div>
    );
  }

  export default App;
  