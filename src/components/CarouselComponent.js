import Carousel from 'react-bootstrap/Carousel';
import goa from '../Images/Goa.jpg';
import jaipur from '../Images/jaipur.jpg';
import snow from '../Images/snow.jpeg';
import mahal from '../Images/mahal.jpg';

import '../CSS/Style.css';


function CarouselFadeExample() {
  return (
   
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 c-Carouselimg"
          src={mahal}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-Carouselimg"
          src={snow}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-Carouselimg"
          src={jaipur}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    
  );
}

export default CarouselFadeExample;