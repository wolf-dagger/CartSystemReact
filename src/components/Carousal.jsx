import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carousal = () => {
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src="https://m.media-amazon.com/images/I/616SqgdNgLL._SX3000.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/61dCP8bufeL._SX3000.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/81NTpbZ58lL._SX3000.jpg" />
        </div>
      </Carousel>
    </>
  );
};

export default Carousal;
