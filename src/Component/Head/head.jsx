import "./head.css";
import { FiSun } from "react-icons/fi";
import { useState } from "react";
import BodyProp from "../Body/bodyProp";

const Head = () => {
  const [condition, setCondition] = useState(false);
  const [list, setList] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [checked, setChecked] = useState(false);
  const id = Date.now();
  const [todo, setTodo] = useState([]);

  const clickOne = () => {
    setChecked((prev) => !prev);
  };
  const Clear = (id) => {
    const til = todo.filter((items) => {
      return items === 50;
    });
    setTodo(til);
  };
  const HandleClicks = (e) => {
    e.preventDefault();
    if (list == "") {
      console.log("Nothing");
    } else {
      let todoList = { id, list, condition };
      setTodo((prevState) => [todoList, ...prevState]);
      console.log(todo);
      setList("");
    }
  };
  return (
    <header>
      <div className="container head__container">
        <div className="head__two">
          <h2>TODO</h2>
          <div>
            <FiSun />
          </div>
        </div>
        <form onSubmit={HandleClicks} action="">
          <input
            value={list}
            onChange={(e) => {
              setList(e.target.value);
            }}
            placeholder="Create a new todo..."
            type="text"
          />
        </form>
      </div>
      <BodyProp
        setIsCompleted={setIsCompleted}
        isCompleted={isCompleted}
        Clear={Clear}
        todo={todo}
        HandleClicks={HandleClicks}
        checked={checked}
        clickOne={clickOne}
        setTodo={setTodo}
        condition={condition}
        setCondition={setCondition}
      />
    </header>
  );
};

export default Head;
