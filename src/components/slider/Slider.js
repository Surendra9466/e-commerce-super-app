import { useState } from 'react';
import './Slider.scss';

export default function SingleProductPage({ sliderImages }) {
    const [heroImg, setHeroImg] = useState(sliderImages[0].url);

    const handleImgGallery = (e)=>{
        if(e.target.closest('img')) {
            setHeroImg(e.target.closest('.slider-img').src);
        }
    }

    return (
        <div className='slider-wrapper'>
            <div className='hero-img'>
                <img src={heroImg} />
            </div>
            <div className='img-gallery' onClick={handleImgGallery}>
                {sliderImages?.map((item, index) => {
                    return <img src={item.url} key={index} className={`slider-img ${heroImg === item.url ? 'active' : ''}`} />
                })}
            </div>
        </div>
    )
}
