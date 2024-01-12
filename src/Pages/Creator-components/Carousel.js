import React from 'react';
import img1 from '../IMG/Home.png';
import img2 from '../IMG/home.png';
import img3 from '../IMG/BrandLog-dave.png';
import img4 from '../IMG/Locality-IMG.png';

import { usestate } from 'react';
const Carousel = () => {
    const images = [ img1, img2 , img3 , img4];
    const [currentslide, setCurrentslide] = usestate(0);
    const goToNextSlide = () => {
        setCurrentslide(currentslide + 1 % images.length);
    }
    const goToPreviousSlide = () => {
        setCurrentslide(currentslide - 1 % images.length);
    }
    return (
        <>
            <div className="carousel-container">
                <button className="previousslide" onClick={goToPreviousSlide}>
                    &lt;
                </button>
                <div className="carousel-image-container">
                    {images.map((src, index) => {
                        <div key={index} className={index === currentslide ? 'slide-active' : 'slide'}>
                            <img src={src} alt={`Image ${images + 1} `} />
                        </div>
                    })}
                </div>
                <button className='nextSlide' onClick={goToNextSlide}>
                    &gt;
                </button>
            </div>
        </>
    )
}
export default Carousel;