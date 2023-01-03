import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./testimonial.css";

const Testimonial = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="next" onClick={onClick}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="prev" onClick={onClick}>
        <i className="fa-solid fa-angle-left"></i>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial_flex">
          <div className="testimonial_title">
            <h3>What our clients say about us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
          <div className="testimonial_containt">
            <Slider {...settings}>
              <div>
                <h4>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h4>
                <div className="testimonial_user">
                  <div className="testimonial_user_img">
                    <img src="images/team3.png" alt="testimonial" />
                  </div>
                  <h6>Jenny Wilson</h6>
                  <p>Vice President</p>
                </div>
              </div>
              <div>
                <h4>
                  "Worked with so far. They understand our product and are able
                  to add new features with a great focus."
                </h4>
                <div className="testimonial_user">
                  <div className="testimonial_user_img">
                    <img src="images/testimonial.png" alt="testimonial" />
                  </div>
                  <h6>Cathy Rose</h6>
                  <p>President</p>
                </div>
              </div>
              <div>
                <h4>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features."
                </h4>
                <div className="testimonial_user">
                  <div className="testimonial_user_img">
                    <img src="images/team4.png" alt="testimonial" />
                  </div>
                  <h6>Wilson Poal</h6>
                  <p>CEO</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
