import react from "react";
import React from "react";
import TodoItems from "./TodoItems";

const TodoList = (props) => {
  return (
    <ul>
      {props.todosss.map((a) => (
        <TodoItems
          key={a.id}
          todoss={a}
          handle={props.handle}
          deletedTodoProps={props.deletedTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
