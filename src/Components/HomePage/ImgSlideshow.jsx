import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import useImagesLoaded from '../useImagesLoaded'; // Adjust the path as needed
import LoadingScreen from '../LoadingScreen'; // Make sure you have a LoadingScreen component

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
    "/Images/anakuma-landscape/anakuma-table-landscape.jpg",
    "/Images/anakuma-landscape/bao-bun-landscape.jpg",
    "/Images/anakuma-landscape/padron-peppers-landscape.jpg",
    "/Images/anakuma-landscape/sweetcorn-landscape-2.jpg",
    "/Images/anakuma-landscape/peppers-mixed-landscape-2.jpg",
  ];

  const portraitImages = [
    "/Images/anakuma-portrait/anakuma-table-3.jpg",
    "/Images/anakuma-portrait/bao-bun-portrait.jpg",
    "/Images/anakuma-portrait/shrimp-nuggets-portrait.jpg",
    "/Images/anakuma-portrait/mixed-plates-portrait.jpg",
  ];

  const images = isPortrait ? portraitImages : landscapeImages;
  const imagesLoaded = useImagesLoaded(images);

  if (!imagesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="image-gallery-container">
      <ImageGallery 
        items={images.map((src) => ({ original: src }))}
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
