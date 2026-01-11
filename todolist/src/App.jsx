import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
    };

    setTodoList([...todoList, newTodo]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const sortedList = [...todoList].sort((a, b) =>
    a.text.toLowerCase().localeCompare(b.text.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>My Todo List</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          style={{ padding: "8px", width: "250px" }}
        />
        <button
          onClick={handleAdd}
          style={{ marginLeft: "10px", padding: "8px 15px", cursor: "pointer" }}
        >
          Add Task
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedList.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
              width: "350px",
              justifyContent: "space-between",
            }}
          >
            <span>{item.text}</span>
            <button
              onClick={() => handleDelete(item.id)}
              style={{
                color: "red",
                border: "1px solid red",
                background: "white",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todoList.length === 0 && (
        <p style={{ color: "gray" }}>No tasks available.</p>
      )}
    </div>
  );
};

export default TodoApp;
