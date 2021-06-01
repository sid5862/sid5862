import React, { useState } from "react";
import "./todo.css";

const ToDoOutput = (props) => {
  const [line, setline] = useState(false);

  const done = () => {
    setline(true);
  };

  const dclick = () => {
    setline(false);
  };
  return (
    <div>
      <p
        onClick={done}
        style={{ textDecoration: line ? "line-through" : "none" }}
        onDoubleClick={dclick}
      >
        {props.text}
      </p>
    </div>
  );
};

export default ToDoOutput;
