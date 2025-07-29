import React, { useEffect, useRef, useState } from 'react';

const ImageGallery = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const offsetRef = useRef(0); // <-- store offset in a ref

  const images = [
    '/img1.JPG',
    '/img2.JPG',
    '/img3.JPG',
    '/img4.jpg',
    '/img5.JPG',
    '/img6.JPG',
    '/img7.JPG',
    '/img8.jpg',
    '/img9.jpg',
    '/img10.jpg'
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const container = slider.parentElement;
    let slideWidth = container.offsetWidth;
    const speed = 2;
    let animationFrameId;

    const slide = () => {
      if (!isHovered) {
        offsetRef.current -= speed;
        // When the first set of images has fully scrolled, instantly reset offset to 0 (no transition)
        if (offsetRef.current <= -(slideWidth * images.length)) {
          slider.style.transition = 'none';
          offsetRef.current = 0;
          slider.style.transform = `translateX(${offsetRef.current}px)`;
          void slider.offsetWidth;
          slider.style.transition = 'transform 0.3s ease';
        } else {
          slider.style.transform = `translateX(${offsetRef.current}px)`;
        }
      }
      animationFrameId = requestAnimationFrame(slide);
    };

    slider.style.transition = 'transform 0.3s ease';
    animationFrameId = requestAnimationFrame(slide);

    const handleResize = () => {
      slideWidth = container.offsetWidth;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [images.length, isHovered]);

  // Inline styles
  const imageContainer = {
    padding: '40px 20px',
    backgroundColor: '#f9fbfc',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginBottom: '10px',
  };

  const underlineStyle = {
    width: '80px',
    height: '4px',
    backgroundColor: '#2563eb',
    margin: '0 auto 50px auto',
  };

  const sliderBoxStyle = {
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    border: '2px solid #ddd'
  };

  const sliderWrapperStyle = {
    display: 'flex',
    width: '100%',
    transition: 'transform 0.3s ease',
  };

  const imageStyle = (index) => ({
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    marginRight: '16px',
    transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
    transform: hoveredIndex === index ? 'scale(1.25)' : 'scale(1)',
    zIndex: hoveredIndex === index ? 2 : 1,
    boxShadow: hoveredIndex === index ? '0 8px 24px rgba(0,0,0,0.18)' : undefined,
    cursor: 'pointer',
  });

  return (
    <div style={imageContainer}>
      <h2 style={headingStyle}>Image Gallery</h2>
      <div style={underlineStyle}></div>

      <div style={sliderBoxStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setHoveredIndex(null); }}
      >
        <div ref={sliderRef} style={sliderWrapperStyle}>
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index % images.length + 1}`}
              style={imageStyle(index % images.length)}
              onMouseEnter={() => setHoveredIndex(index % images.length)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
