import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item d-flex">
        <button className="btn btn-success me-2" onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"> Add </button>
        <button className="btn btn-warning me-4" onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"> Update </button>
        <input className="form-control" style={{maxWidth:"300px"}}
          value={todo.title}
          onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        />
      </li>
    );
  }
  