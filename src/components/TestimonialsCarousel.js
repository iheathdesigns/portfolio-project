import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from '../images/avatars/avatar-1.png';
import avatar2 from '../images/avatars/avatar-2.png';
import avatar3 from '../images/avatars/avatar-3.png';
import avatar4 from '../images/avatars/avatar-4.png';

const TestimonialsCarousel = () => {
  return (
  <Carousel
  showArrows={true}
  infiniteLoop={true}
  showThumbs={false}
  showStatus={false}
  autoPlay={true}
  interval={3000}
  >
      <>
      <img src={avatar1} alt="John Smith"/>
      <div className="myCarousel">
      <h3>John Smith</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla autem ipsum laudantium ex odio iste explicabo labore totam, voluptatum eum.</p>
      </div>
      </>
      <>
      <img src={avatar2} alt="John Smith"/>
      <div className="myCarousel">
      <h3>James Smith</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla autem ipsum laudantium ex odio iste explicabo labore totam, voluptatum eum.</p>
      </div>
      </>
      <>
      <img src={avatar3} alt="John Smith"/>
      <div className="myCarousel">
      <h3>Jake Smith</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla autem ipsum laudantium ex odio iste explicabo labore totam, voluptatum eum.</p>
      </div>
      </>
      <>
      <img src={avatar4} alt="John Smith"/>
      <div className="myCarousel">
      <h3>Joe Smith</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla autem ipsum laudantium ex odio iste explicabo labore totam, voluptatum eum.</p>
      </div>
      </>
  </Carousel>
  )
};

export default TestimonialsCarousel;