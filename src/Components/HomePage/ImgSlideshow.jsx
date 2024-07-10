import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ImgSlideshow = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth < window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const landscapeImages = [
    {
      original: "/Images/anakuma-landscape/anakuma-table-landscape.jpg",
    },
    {
      original: "/Images/anakuma-landscape/bao-bun-landscape.jpg",
    },
    {
      original: "/Images/anakuma-landscape/padron-peppers-landscape.jpg",
    },
    {
      original: "/Images/anakuma-landscape/sweetcorn-landscape-2.jpg",
    },
    {
      original: "/Images/anakuma-landscape/peppers-mixed-landscape-2.jpg",
    },
  ];

  
  const portraitImages = [
    {
      original: "/Images/anakuma-portrait/anakuma-table-3.jpg",
    },
    {
      original: "/Images/anakuma-portrait/bao-bun-portrait.jpg",
    },
    {
      original: "/Images/anakuma-portrait/shrimp-nuggets-portrait.jpg",
    },
    {
      original: "/Images/anakuma-portrait/mixed-plates-portrait.jpg",
    }
  ];

  const images = isPortrait ? portraitImages : landscapeImages;

  return (
    <div className="image-gallery-container">
      <ImageGallery 
        items={images} 
        autoPlay={true} 
        slideInterval={5000}
        slideDuration={1200}
        showThumbnails={false} 
        showFullscreenButton={true} 
        showPlayButton={false}
        renderItem={(item) => (
          <div className="image-gallery-slide">
            <img src={item.original} alt="" className="full-screen-image" />
          </div>
        )}
      />
    </div>
  );
};

export default ImgSlideshow;
