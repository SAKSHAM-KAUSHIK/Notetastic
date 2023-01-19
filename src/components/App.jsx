import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (newNote.content === "" && newNote.title === "") toast.warn('Empty notes not allowed!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    else {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notesStore'));
    setNotes(prevNotes => {
      return [...prevNotes, ...data];
    });
},[])

useEffect(() => {
    localStorage.setItem('notesStore', JSON.stringify(notes));
},[notes]);

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
