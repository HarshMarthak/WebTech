import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "bootstrap";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true
  };
  return (
      <div className="my-5">
      <h3 className="text-center fs-2 my-5">Tagline describing your e-shop</h3>
    <Slider  {...settings}>
      <div>
        <img src="https://via.placeholder.com/162x132" alt="Slide 1" height="132" width="162" />
      </div>
      <div>
        <img src="https://via.placeholder.com/162x132" alt="Slide 2" height="132" width="162" />
      </div>
      <div>
        <img src="https://via.placeholder.com/162x132" alt="Slide 3" height="132" width="162" />
      </div>
      <div>
        <img src="https://via.placeholder.com/162x132" alt="Slide 4" height="132" width="162" />
      </div>
      <div>
        <img src="https://via.placeholder.com/162x132" alt="Slide 5" height="132" width="162" />
      </div>
    </Slider>
    
    <div className="my-5 text-center">
      <button type="button" className="btn btn-secondary btn-lg">Shop Now</button>
    </div>
    <hr/>
    </div>
  );
}
