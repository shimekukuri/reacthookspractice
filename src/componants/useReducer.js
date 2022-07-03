import React, { useState, useEffect, useReducer } from "react";
import Todo from "./useReducerTodo";

export const ACTIONS = {
  ADD: `add`,
  TOGGLE: `toggle`,
  DELETE: `delete`,
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

export default function UseReducerPractice() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState(``);

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: { name: name } });
    setName(``);
  };

  console.log(todos);

  return (
    <>
      <div style={{ margin: "15px" }}>
        <form onSubmit={handleSumbit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
}
