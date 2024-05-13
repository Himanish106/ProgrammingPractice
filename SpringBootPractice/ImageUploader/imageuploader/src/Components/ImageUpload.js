import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);

    try {
      // Send POST request to backend API
      await axios.post("http://localhost:8080/api/images/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle success
      console.log("Image uploaded successfully");
    } catch (error) {
      // Handle error
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUpload;
