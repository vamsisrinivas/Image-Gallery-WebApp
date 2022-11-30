import React from "react";
import "./App.css";

const Gallery = ({ data }) => {
  return (
    <div className="grid">
      {data.map ((image) => <div key={image.id}>
          <div className="col-md-4">
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              height="250"
              width="250"
              alt="images"
            />
          </div>
        </div>
      
   
  )}
   </div>
  );
};

export default Gallery;
