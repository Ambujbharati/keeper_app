import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpended] = React.useState(false);

  const [note, setNote] = React.useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {name, value} = event.target;
    setNote(prevNotes => {
      return {
        ...prevNotes,
        [name]: value
      };
    })
  }

  function submitNote(event){
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    });
  }

  function handleClick(){
    setExpended(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input 
        onChange={handleChange}
        name="title" 
        placeholder="Title" 
        value={note.title}
        />)}
        <textarea 
        onChange={handleChange}
        onClick={handleClick}
        name="content" 
        placeholder="Take a note..." 
        rows={isExpanded?3:1} 
        value={note.content}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;