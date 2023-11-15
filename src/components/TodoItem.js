// TodoItem.js

import React, { useState } from "react";

const TodoItem = ({ item, onDelete, onToggleComplete, onEditItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    onEditItem(item.id, editedText);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggleComplete(item.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.text}
          </span>
          <button onClick={handleToggleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
