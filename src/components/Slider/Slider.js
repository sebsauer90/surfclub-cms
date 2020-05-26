import React from 'react';
import SlickSlider from 'react-slick';
import './Slider.scss';

function Slider({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="Slider">
      <SlickSlider {...settings}>
        {items.map((item) => (
          <div key={item.image}>
            <div className="Slider__item" style={{ backgroundImage: `url(${item.image})` }}>
              <img className="Slider__image" src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
}

export default Slider;
