import { useState } from "react";

export default function ProductGallery() {

  const images = [
    "/mv01-1.png",
    "/mv01-2.png",
    "/mv01-3.png",
    "/mv01-4.png"
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (

    <div className="gallery">

      <div className="thumbnails">

        {images.map((image, index) => (

          <img
            key={index}
            src={image}
            onClick={() => setSelectedImage(image)}
          />

        ))}

      </div>

      <div className="main-image">

        <img src={selectedImage}/>

      </div>

    </div>

  );
}