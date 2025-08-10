import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { UserContext } from '../App'; // ✅ Correct import

const About = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  // ✅ Access context value
  const user = useContext(UserContext);

  useEffect(() => {
    if (load) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => setData(users));
    }
  }, [load]);

  return (
    <div>
      <Header />
      <p>{`Hello from ${user}`}</p>

      <button onClick={() => setLoad(true)}>Load Data</button>
      <button onClick={() => {
        setData([]);
        setLoad(false);
      }}>Hide Data</button>

      {data.map(u => (
        <p key={u.id}>{u.name}</p>
      ))}

      <Footer />
    </div>
  );
};

export default About;
