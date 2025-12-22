import { useState, useEffect } from 'react';
// import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);      // ✅ array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {                          // ✅ correct hook
    axios.get("https://api.mascarpool.com/api/brands")
      .then((response) => {
        setData(response.data.body);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
