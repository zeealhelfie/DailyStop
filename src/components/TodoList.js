import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoList = ({ user }) => {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState("");

  useEffect(() => {
    // Fetch tasks associated with the current user when the component mounts
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost3002", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setItems(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };

    fetchTasks();
  }, [user]);

  const handleAddItem = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/tasks",
        {
          text: newItemText,
          completed: false,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setItems([...items, response.data.task]);
      setNewItemText("");
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3002/tasks/${itemId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const handleToggleComplete = async (itemId) => {
    try {
      const response = await axios.patch(
        `http://localhost:3002/tasks/${itemId}`,
        {
          completed: true,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? response.data.task : item
        )
      );
    } catch (error) {
      console.error("Error toggling task completion:", error.message);
    }
  };

  const handleEditItem = async (itemId, newText) => {
    try {
      const response = await axios.patch(
        `http://localhost:3002/tasks/${itemId}`,
        {
          text: newText,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? response.data.task : item
        )
      );
    } catch (error) {
      console.error("Error editing task:", error.message);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onDelete={handleDeleteItem}
            onToggleComplete={handleToggleComplete}
            onEditItem={handleEditItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
