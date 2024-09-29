/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react'
import toast from 'react-hot-toast'

export default function Gallery () {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [gallery, setGallery] = useState([])
  const imageRefs = useRef([])

  useEffect(() => {
    const handleLoadGallery = async () => {
      try {
        const res = await fetch('/api/gallery/get-gallery')
        const data = await res.json()
        setGallery(data)

        if (data.success === false) {
          toast.error('Failed to fetch Gallery!')
          return
        }
      } catch (error) {
        console.log(error)
        toast.error('Failed to fetch Gallery!')
      }
    }

    handleLoadGallery()
  }, [])

  const handleOpenModal = index => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    setSlideNumber(slideNumber === 0 ? gallery.length - 1 : slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    setSlideNumber(slideNumber + 1 === gallery.length ? 0 : slideNumber + 1)
  }

  // Lazy Loading with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            observer.unobserve(img)
          }
        })
      },
      { threshold: 0.1 }
    )

    imageRefs.current.forEach(img => {
      if (img) {
        observer.observe(img)
      }
    })

    return () => {
      imageRefs.current.forEach(img => {
        if (img) observer.unobserve(img)
      })
    }
  }, [gallery])

  return (
    <div className='pt-[30%] md:pt-[8%]'>
      <section
        id='members'
        className='container mx-auto px-4 space-y-8 bg-slate-50 py-20 md:py-20 lg:py-20'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-semibold text-3xl leading-[1.1] sm:text-2xl md:text-5xl'>
            Explore the Legacy:{' '}
            <span className='text-blue-800 sm:text-2xl md:text-5xl text-3xl'>
              99s
            </span>
          </h2>
          <h3 className='max-w-[85%] text-justify leading-normal sm:text-lg sm:leading-7'>
            Explore the moments that define 99s India – where every event and
            function reflects our passion for flying, camaraderie, and community
            impact. Take a visual tour of our inspiring journey.
          </h3>
        </div>

        <div className='text-center mb-10'>
          <span className='inline-block w-1 h-1 rounded-full bg-blue-800 ml-1'></span>
          <span className='inline-block w-3 h-1 rounded-full bg-blue-800 ml-1'></span>
          <span className='inline-block w-40 h-1 rounded-full bg-blue-800 ml-1'></span>
          <span className='inline-block w-3 h-1 rounded-full bg-blue-800 ml-1'></span>
          <span className='inline-block w-1 h-1 rounded-full bg-blue-800 ml-1'></span>
        </div>

        {openModal && (
          <div className='slideWrap grid fixed -top-8 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-80 items-center justify-center w-full h-full'>
            {/* Cross Button */}
            <button
              onClick={handleCloseModal}
              className='fixed cursor-pointer opacity-70 text-white z-50 hover:opacity-100 top-10 right-10'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18 18 6M6 6l12 12'
                />
              </svg>
            </button>
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className='fixed cursor-pointer opacity-60 text-white z-50 hover:opacity-100 top-[50%] left-10 transform -translate-y-1/2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
              </svg>
            </button>
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className='fixed cursor-pointer opacity-60 text-white z-50 hover:opacity-100 top-[50%] right-10 transform -translate-y-1/2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </button>

            <img
              src={gallery[slideNumber].image}
              alt='Gallery Image'
              className='max-w-full max-h-[90vh] object-contain pointer-events-none'
            />
          </div>
        )}

        <div className='mx-auto grid justify-center gap-5 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3 px-6 md:px-2'>
          {gallery.map((galleryItem, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(index)}
              className='w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-95 hover:shadow-xl cursor-pointer overflow-hidden'
            >
              <img
                ref={el => (imageRefs.current[index] = el)}
                data-src={galleryItem.image}
                alt={galleryItem.name}
                className='w-full h-52 object-cover'
              />
              <p className='text-base font-semibold text-black truncate'>
                {galleryItem.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}