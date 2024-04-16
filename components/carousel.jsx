import Image from 'next/image'
import { useState } from 'react'
import Swipe from 'react-easy-swipe'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel ({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    const newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className='relative h-full cocktails-carousel'>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className='absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20'
      />
      <div className='w-full h-full flex overflow-hidden relative m-auto align-center'>
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className='relative z-10 w-full h-full'
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <div
                  className='flex flex-col lg:flex-row lg:h-full'
                  key={image.id}
                >
                  <div className='carousel-image flex container mx-auto justify-center lg:justify-center lg:ml-12'>
                    <Image
                      src={image.src}
                      height={image.height}
                      width={image.width}
                      alt={image.alt}
                      sizes='100vw'
                      className='transition-opacity ease-in-out object-cover h-96 w-96 lg:w-full lg:h-full'
                      placeholder='blur'
                      loading='lazy'
                      style={{
                        width: 'auto'
                      }}
                    />
                  </div>
                  <div className="text-center items-center flex-col mx-12 my-auto">
                    <div className="carousel-title py-4">{image.title}</div>
                    <div className="carousel-text">{image.desc}</div>
                  </div>
                </div>
              )
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className='absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20'
      />

      <div className='relative flex justify-center place-content-baseline p-2'>
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? 'h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer'
                  : 'h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer'
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
