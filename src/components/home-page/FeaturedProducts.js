import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true
  };
  const arr =[1,2,3,4,5,6]
  return (
    <div>
        <h3 className="text-center fs-2 my-5">Featured Products</h3>
      <Slider className="my-5" {...settings}>
        {arr.map((item)=>

        <div className="text-center">

          <img src="https://via.placeholder.com/436x259" alt="Slide 1" height="259" width="436" />
          <p className="text-center me-5 pe-5">Product Name {item}</p>
          <p className="me-5 pe-5">$300</p>
        </div>
        )}
        
      </Slider>
    <hr/>

    </div>
  );
}
