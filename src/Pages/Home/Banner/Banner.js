import React  from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/Banner/banner-1.jpg'


const Banner = () => {
  
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to the academy</h3>
                    <p>I will teach you How shot, hot to caught and how to play</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
