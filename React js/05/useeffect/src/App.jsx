// import { useEffect, useState } from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./product";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("Count updated:", count);
  // }, [count]);
useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Running...");
    }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
  return (
    <>
      <div>
        <h2>User List</h2>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} <br />
            {user.username}
            <br />
            {user.email}
          </p>
        ))}
      </div>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  );
}


export default App;
