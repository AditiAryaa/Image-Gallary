import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ImageDetails.css";

function ImageDetails() {
  const { id } = useParams();
  const [picture, setPicture] = useState({});

  async function downloadPicture() {
    const response = await axios
      .get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
      .then((res) => {
        console.log(res);
        setPicture({
          image: res.data.photo.url,
          title: res.data.photo.title,
          description: res.data.photo.description,
        });
      });
    console.log(picture);
  }

  useEffect(() => {
    downloadPicture();
  }, []);

  return (
    <div className="card">
      <img src={picture.image} alt="" />
      <div>
        <div className="title">
          <span>{picture.title}</span>
        </div>
        <div className="description">
          <span>{picture.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;
