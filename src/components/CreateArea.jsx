import React, { useState } from "react";

function CreateArea(props) {
  /* option 1 */
  /*   const [title, setTitle] = useState(""); 
  const [content, setContent] = useState("");

  function updateTitle(event) {
    let newTitle = event.target.value;
    setTitle(newTitle);
  }

  function updateContent(event) {
    let newContent = event.target.value;
    setContent(newContent);
  } */
  /* option 2 */
  const [note, setNote] = useState({
    title: " ",
    content: " "
  });

  function updateNote(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.addNote(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={updateNote}
          placeholder="Title"
          value={note.title}
          name="title"
        />
        <textarea
          onChange={updateNote}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
