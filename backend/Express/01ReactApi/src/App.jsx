// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [users, setUsers] = useState([]);       // store users
//   const [loading, setLoading] = useState(true); // loading state
//   const [error, setError] = useState(null);     // error state

//   useEffect(() => {
//     fetch("http://localhost:3000/api/users")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center">Loading users...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div className="App">
//       <h1>👥 User List</h1>
//       {users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <li key={user._id}>
//               <strong>{user.name}</strong> — {user.email}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users found.</p>
//       )}
//     </div>
//   );
// }

// export default App;




import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploadedImage(data.filePath);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Image</h2>
      
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploadedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <img 
            src={`http://localhost:3000${uploadedImage}`} 
            alt="uploaded" 
            width="200" 
          />
        </div>
      )}
    </div>
  );
}

export default App;
