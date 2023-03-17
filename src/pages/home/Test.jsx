import React, { useState } from 'react';
import Slider from 'react-slick';

function ImageSlider() {
    const [images, setImages] = useState([
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
    ]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`img ${index + 1}`} />
            ))}
        </Slider>
    );
}

function TextDescription() {
    return (
        <div>
            <h2>Text Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod quam vel justo convallis, vel aliquam felis bibendum. Etiam fringilla euismod velit sed pellentesque. Proin eget nisi ac arcu gravida lobortis. Donec vestibulum quam nisl, euismod suscipit dolor sodales quis. Integer consequat massa vel ante pretium ultrices. </p>
        </div>
    );
}

function Test() {
    return (
        <div className="row">
            <div className="column">
                <ImageSlider />
            </div>
            <div className="column">
                <TextDescription />
            </div>
        </div>
    );
}

export default Test;
