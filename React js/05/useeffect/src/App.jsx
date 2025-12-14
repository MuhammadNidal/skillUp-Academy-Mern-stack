import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

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
