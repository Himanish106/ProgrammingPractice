import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/images/gallery");
        console.log(response);
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <h3>{image.name}</h3>
            <img src={`data:image/jpg;base64,${image.data}`} alt={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
