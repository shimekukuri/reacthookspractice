import React from "react";
import { ACTIONS } from "./useReducer";

export default function Todo(props) {
  const { todo, dispatch } = props;

  return (
    <div style={{ marginTop: "10px" }}>
      <span style={{ color: todo.complete ? `#AAA` : `#000` }}>
        {todo.name}
      </span>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }
      >
        Completed
      </button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
        }
      >
        delete
      </button>
    </div>
  );
}
