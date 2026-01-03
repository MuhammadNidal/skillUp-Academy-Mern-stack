import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './useFetch'
import  About from './About'

function App() {
  const [data] = useFetch("https://api.mascarpool.com/api/brands");
    const [name, setName] = useState("");
// Local Storage Retrieval
 useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, []);
 const saveName = () => {
    localStorage.setItem("name", name);
  };

  // Session Storage Retrieval
    useEffect(() => {
    sessionStorage.setItem("token", "abc123");
  }, []);

  // Storing Objects in Local Storage
  const user = { name: "Ali", age: 20 };

localStorage.setItem("user", JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);
  return (
    <>
     <>
      {data &&
        data.body.map((item) => {
          return <p key={item.id}>{item.title}
          <br />{item.created_at}</p>;
        })}
          <input onChange={(e) => setName(e.target.value)} />
      <button onClick={saveName}>Save</button>
      <h3>{name}</h3>
    </>
    <About/>
    </>
  )
}

export default App
