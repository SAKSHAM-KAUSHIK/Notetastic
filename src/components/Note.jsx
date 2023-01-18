import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  var date = new Date().toDateString();


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p className="p0">{props.content}</p>
          <button onClick={handleClick}>
              <DeleteIcon />
      </button>
      <p className="p1">{date}</p>
      
    </div>
  );
}

export default Note;
