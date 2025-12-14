import "./App.css";
import { useState } from "react";
import Formsss from "./form";

function App() {
  const [add, setadd] = useState(0);
  const [sub, setsub] = useState(0);
  const [task, settask] = useState([]);
  const [user, setuser] = useState({
    name: "bilal",
    age: 111,
  });

  const increaseAge = () => {
    setuser({
      ...user,
      age: user.age + 1,
    });
  };

  const addTask = () => {
    settask([...task, "task added"]);
  };

  return (
    <>
      <div>
        <h1 className="initialVlaue">count value is {add}</h1>
        <button
          onClick={() => {
            setadd(add + 1);
          }}
        >
          Increment
        </button>
      </div>
      <div>
        <h1 className="initialVlaue">count value is {sub}</h1>
        <button
          onClick={() => {
            setsub(sub - 1);
          }}
        >
          decrement
        </button>
      </div>

      <div>
        <br />
        <button onClick={addTask}>task add</button>
        <ul>
          {task.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>user name ={user.name}</h1>
        <h1>user age= {user.age}</h1>
        <button onClick={increaseAge}>increase age</button>
      </div>
      <br />
      <Formsss />
    </>
  );
}

export default App;
