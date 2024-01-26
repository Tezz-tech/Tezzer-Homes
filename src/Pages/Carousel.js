import React from 'react';
import ted from "../IMG/ted.jpeg";
import penny from "../IMG/penny.jpeg";
import hero from "../IMG/hero.jpeg";
import { usestate } from 'react';
const Carousel = () => {
    const images = [ted, penny, hero];
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
                <div className="carousel-content">
                    {images.map((src, index) => (
                        <div key={index} className={index === currentslide ? 'slide-active' : 'slide'}>
                            <img src={src} alt={`Img ${images + 1} `} />
                        </div>
                    ))}
                </div>
                <button className='nextSlide' onClick={goToNextSlide}>
                    &gt;
                </button>
            </div>
        </>
    )
}
export default Carousel;