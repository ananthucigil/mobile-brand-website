import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Zap} from 'lucide-react';
import ShieldIcon from './ShieldIcon';
import { Link } from "react-router-dom"; 

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, isMobile ? 4000 : 5000); // Faster on mobile

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, isMobile]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Enhanced touch handlers with better sensitivity
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 30; // Reduced threshold for better sensitivity
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key >= '1' && e.key <= '4') {
        goToSlide(parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      ref={carouselRef}
      className="relative min-h-screen overflow-hidden bg-black z-carousel pt-16 lg:pt-20"
      onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
      onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Product carousel"
      aria-live="polite"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          aria-hidden={index !== currentSlide}
        >
          {/* Background with improved mobile optimization */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          
          {/* Content Container with responsive layout */}
          <div className="relative h-full flex items-center">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              
              {/* Mobile-first responsive grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-7xl mx-auto">
                
                {/* Content Section - Mobile optimized */}
                <div className="text-white z-10 text-center lg:text-left order-2 lg:order-1">
                  
                  {/* Model Name - Responsive typography */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4">
                    <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-2xl">
                      {slide.model}
                    </span>
                  </h1>

                  {/* Feature highlight - Mobile optimized */}
                  <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0">
                    {slide.standoutFeature}
                  </p>

                  {/* Feature badges - Responsive layout */}
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 mb-8">
                    <div className="flex items-center space-x-2 text-white/80 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full">
                      <ShieldIcon className="w-4 h-4 sm:w-5 sm:h-5" variant="gradient" />
                      <span className="text-xs sm:text-sm font-medium">Premium Build</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-xs sm:text-sm font-medium">Latest Technology</span>
                    </div>
                  </div>

                  {/* CTA Button - Touch-friendly */}
                </div>

                {/* Image Section - Responsive sizing */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div 
                    className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-64 sm:h-80 lg:h-96 xl:h-[500px] bg-contain bg-no-repeat bg-center rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500"
                    style={{backgroundImage: `url(${slide.backgroundImage})`}}
                    role="img"
                    aria-label={`${slide.model} product image`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Responsive positioning */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 lg:p-4 hover:scale-110 active:scale-95 transition-all duration-300 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/40 touch-manipulation"
        aria-label="Previous slide"
        tabIndex={0}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 lg:p-4 hover:scale-110 active:scale-95 transition-all duration-300 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/40 touch-manipulation"
        aria-label="Next slide"
        tabIndex={0}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Slide Indicators - Mobile optimized */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 mt-5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border touch-manipulation ${
              index === currentSlide 
                ? 'w-6 sm:w-8 lg:w-10 h-2 sm:h-3 bg-white border-white shadow-lg' 
                : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/30 border-white/50 hover:bg-white/50 hover:border-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
            tabIndex={0}
          />
        ))}
      </div>

      {/* Progress Bar - Enhanced visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-700 ease-out shadow-lg"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
          role="progressbar"
          aria-valuenow={currentSlide + 1}
          aria-valuemin={1}
          aria-valuemax={slides.length}
          aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}
        />
      </div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].model}
      </div>
    </section>
  );
};

export default HeroCarousel;