import React, { useState } from "react";
import { ListGroup, Form, Button } from "react-bootstrap";
import "./Todo.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [showTodos, setShowTodos] = useState(true);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const saveTodo = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? editText : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText("");
  };

  const toggleDisplay = () => {
    setShowTodos(!showTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Form>
        <Form.Group className="form-inline">
          <Form.Control
            type="text"
            placeholder="Enter a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="textModiefy"
          />
          <Button variant="primary" onClick={addTodo} className="addtodo  ">
            Add
          </Button>
          <Button variant="secondary" onClick={toggleDisplay} className="ml-2 show-todos">
            {showTodos ? "Hide" : "Display"}
          </Button>
        </Form.Group>
      </Form>
      {showTodos && (
        <ListGroup className="list-group mt-3">
          {todos.map((todo, index) => (
            <ListGroup.Item key={index} className="list-group-item">
              {editIndex === index ? (
                <>
                  <Form.Control
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="editModiefy"
                  />
                  <Button
                    variant="success"
                    onClick={saveTodo}
                    className="ml-2 save"
                  >
                    Save
                  </Button>
                </>
              ) : (
                <>
                  {todo}
                  <div className="button-container">
                    <Button
                      variant="warning"
                      className="float-right edit"
                      onClick={() => editTodo(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="float-right remove"
                      onClick={() => removeTodo(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default TodoList;
