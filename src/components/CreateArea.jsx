import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";

function CreateArea({ onAdd }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleExpanded() {
    setIsExpanded(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(note);
    setNote({ title: '', content: '' });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
        )}
        <p>
          <textarea
            name="content"
            onClick={handleExpanded}  
            value={note.content}
            onChange={handleChange}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          ></textarea>               
        </p>
        <button type="submit">
          <IoIosAdd size={36} />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
