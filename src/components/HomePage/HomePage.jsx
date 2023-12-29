import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [imageData, setImageData] = useState([]);
  async function downloadImages() {
    const response = await axios
      .get(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
      )
      .then((res) => {
        console.log(res);
        const photos = res.data.photos;
        console.log(photos);
        setImageData(photos);
      });
  }
  useEffect(() => {
    downloadImages();
  }, []);

  return (
    <>
      <div className="parent">
        {imageData.map((image) => {
          const { id, title, url } = image;
          return (
            <div key={id} className="imageCard">
              <Link to={`/photos/${id}`}>
                <img src={image.url} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default HomePage;
