import { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("http://localhost:5000/upload", {
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
            src={`http://localhost:5000${uploadedImage}`} 
            alt="uploaded" 
            width="200" 
          />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
