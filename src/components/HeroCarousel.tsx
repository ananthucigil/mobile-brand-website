import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Shield, Smartphone} from 'lucide-react';
import { Link } from "react-router-dom"; 
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      series: 'Series A',
      model: 'Cosmo A12 Pro',
      standoutFeature: 'Ultra-thin 6.1mm design',
      backgroundImage: '/images/carousel_image1.jpg',
      gradient: 'from-blue-900/80 via-purple-900/70 to-indigo-900/80',
      accentColor: 'from-blue-500 to-purple-600',
      buttonUrl: '/cosmo-a/model-1'
    },
    {
      id: 2,
      series: 'Series B',
      model: 'Cosmo B8 Elite',
      standoutFeature: '48MP Pro Camera System',
      backgroundImage: '/images/carousel_image2.jpeg',
      gradient: 'from-gray-900/80 via-slate-800/70 to-zinc-900/80',
      accentColor: 'from-gray-600 to-slate-800',
      buttonUrl: '/cosmo-b/model-1'
    },
    {
      id: 3,
      series: 'Series C',
      model: 'Cosmo C13 Max',
      standoutFeature: '7000mAh Ultra Battery',
      backgroundImage: '/images/carousel_image3.png',
      gradient: 'from-emerald-900/80 via-teal-800/70 to-cyan-900/80',
      accentColor: 'from-emerald-500 to-teal-600',
      buttonUrl: '/cosmo-c/model-1'
    },
    {
      id: 4,
      series: 'Series D',
      model: 'Cosmo D5 Gaming',
      standoutFeature: '165Hz Gaming Display',
      backgroundImage: '/images/carousel_image4.png',
      gradient: 'from-red-900/80 via-orange-800/70 to-yellow-900/80',
      accentColor: 'from-red-500 to-orange-600',
      buttonUrl: '/cosmo-d/model-1'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section 
      ref={carouselRef}
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Full-width Background Image */}
          <div className={"absolute inset-0 bg-black"} />
          {/* Content Container */}
          <div className="relative h-full flex mt-20 lg:mt-20">
            <div className="max-w-7xl mx-auto px-16 sm:px-20 lg:px-24 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content - Text and CTA with vertical distribution and increased top spacing */}
                <div className="text-white z-10 max-w-2xl flex flex-col">
                  {/* Model Name - Prominent Display with Responsive Font Sizes */}
                  <div className="flex justify-center lg:justify-start">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                      <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                        {slide.model}
                      </span>
                    </h1>
                  </div>

                  {/* Additional Info */}
                  <div className="flex justify-center lg:justify-start items-center space-x-6 mt-10">
                    <div className="flex items-center space-x-2 text-white/80">
                      <Shield className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm font-medium">Premium Build</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80">
                      <Smartphone className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm font-medium">Latest Technology</span>
                    </div>
                  </div>

                  {/* Learn More Button with Responsive Centering */}
                  <div className="flex justify-center lg:justify-start mt-10">
                    <Link to={slide.buttonUrl}>
                      <button className={`bg-gradient-to-r ${slide.accentColor} text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md border border-white/20 hover:border-white/40 w-auto sm:w-auto md:w-auto lg:w-auto`}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Right Content - Image with Responsive Sizing */}
                <div 
                    className="w-full h-80 lg:h-[500px] bg-contain bg-no-repeat bg-center rounded-lg shadow-lg overflow-hidden"
                    style={{backgroundImage: `url(${slide.backgroundImage})`}}
                />           
                
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-1 lg:left-4 top-1/2 transform -translate-y-1/2 text-white p-4 hover:scale-110 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-1 lg:right-8 top-1/2 transform -translate-y-1/2 text-white p-4 hover:scale-110 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators - Smaller Size */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border ${
              index === currentSlide 
                ? 'w-8 h-3 bg-white border-white' 
                : 'w-3 h-3 bg-white/30 border-white/50 hover:bg-white/50 hover:border-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;