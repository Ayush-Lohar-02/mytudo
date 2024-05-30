import React, { useState } from "react";
import { ListGroup, Form, Button } from "react-bootstrap";
import "./Todo.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

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

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Form>
        <Form.Group className="Form-group">
          <Form.Control
            type="text"
            placeholder="Enter a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className=" textModiefy"
          />
          <Button
            variant="primary"
            onClick={addTodo}
            className="Button addtodo"
          >
            Add
          </Button>
        </Form.Group>
      </Form>
      <ListGroup className="list-group mt-3">
        {todos.map((todo, index) => (
          <ListGroup.Item key={index} className="list-group-item">
            {todo}
            <div className="remove-button-container">
              <Button
                variant="danger"
                className="float-right remove"
                onClick={() => removeTodo(index)}
              >
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
