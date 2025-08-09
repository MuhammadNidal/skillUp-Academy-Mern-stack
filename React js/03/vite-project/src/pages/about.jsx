import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const About = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

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
      <p>
      <button onClick={() => setLoad(true)}>Load Data</button>
<button onClick={() => {
  setData([]);  // clear data
  setLoad(false);
}}>Hide Data</button>

      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

      </p>
     <Footer/>
    </div>
  )
}

export default About
