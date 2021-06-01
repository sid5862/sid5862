import React, { useState } from "react";
import "./todo.css";
import { Input } from "@material-ui/core";
import { Button } from "react-bootstrap";
import ToDoOutput from "./ToDoOutput";

function ToDoApp() {
  const [items, setitems] = useState("");
  const [list, setlist] = useState([]);

  const submit = () => {
    if (items === "") {
      alert("You can not add Blank Field in the List!");
    } else {
      setlist((pre) => {
        return [...pre, items];
      });
    }
    setitems("");
  };

  return (
    <div className="main">
      <h1>ToDo App</h1>
      <div className="todo">
        <Input
          className="input"
          value={items}
          onChange={(e) => setitems(e.target.value)}
          style={{ color: "grey" }}
        />
        <Button variant="outline-warning" onClick={submit}>
          Submit
        </Button>
      </div>

      <div className="output">
        {list.map((value, index) => {
          return <ToDoOutput key={index} text={value} />;
        })}
      </div>
    </div>
  );
}

export default ToDoApp;
