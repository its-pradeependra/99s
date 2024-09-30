import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { addDoc, collection } from 'firebase/firestore'
import { formDatabase } from '../firebase'

export default function Contact () {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const [disableBtn, setDisableBtn] = useState(false)

  const submitHandler = async e => {
    e.preventDefault()
    setDisableBtn(true)

    try {
      await addDoc(collection(formDatabase, 'contacts'), {
        name,
        email,
        number,
        message
      })

      toast.success('Thank You, We will reach you soon.')

      setName('')
      setMessage('')
      setNumber('')
      setEmail('')
      setDisableBtn(false)

      navigate('/')
    } catch (error) {
      toast.error('Error in Submission. Please try again.')
      console.error('Submission error:', error)

      setDisableBtn(false)
    }
  }

  return (
    <div
      id='contact'
      className='px-4  bg-slate-50 py-20 bg-slate-50 pt-[42%] md:pt-[12%]'
    >
      {/* Page heading and subheading */}
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-semibold text-3xl leading-[1.1] sm:text-2xl md:text-5xl'>
          Connect with <span className='text-blue-800'>India 99s </span>
        </h2>

        <h3 className='max-w-[85%] leading-normal sm:text-lg sm:leading-7 text-center'>
          Whether you have a question, want to join our community, or simply
          wish to connect, we&apos;re here to listen. Reach out to us and become
          part of our ever-growing network of inspiring aviators.
        </h3>
      </div>
      <div className='text-center mb-10'>
        <span className='inline-block w-1 h-1 rounded-full bg-blue-800 ml-1'></span>
        <span className='inline-block w-3 h-1 rounded-full bg-blue-800 ml-1'></span>
        <span className='inline-block w-40 h-1 rounded-full bg-blue-800 ml-1'></span>
        <span className='inline-block w-3 h-1 rounded-full bg-blue-800 ml-1'></span>
        <span className='inline-block w-1 h-1 rounded-full bg-blue-800 ml-1'></span>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16'>
        
{/* Box With Logo & social links ----start */}
<div className='lg:w-[80%] py-10 sm:py-5 w-auto h-auto bg-gray-300 bg-opacity-60 shadow-lg mx-auto backdrop-blur-sm rounded-xl bg-white/30 flex flex-col justify-center gap-5'>
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FheaderImg.png?alt=media&token=096586ea-31e3-495b-b3ee-be00526d5721'
            }
            alt='Ninety-Nine!!!'
            className='px-10  mx-auto'
          />

          <h5 id='quote' className='text-md text-center text-2xl'>
            <span className='not-italic text-3xl'>
              Inspiring women pilots since 1976
            </span>{' '}
            <br />
            <br />
            <br />
            Celebrate History, Raise Awareness, Spark Vocations <br /><br />
            If I can fly, You can fly
          </h5>
          <a
            href='mailto:indiasection99s@gmail.com'
            className='px-10 flex items-center'
          >
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
            </svg>
            <h5 className='text-black text-base font-normal leading-6 ml-5'>
              indiasection99s@gmail.com
            </h5>
          </a>
          <a
            href='https://www.ninety-nines.org/'
            target='_blank'
            className='px-10 flex items-center'
          >
            <svg
              width='30'
              height='30'
              fill='#000000'
              stroke='#000000'
              strokeWidth='1'
              strokeLinecap='round'
              viewBox='0 0 512 512'
              id='_x30_1'
              version='1.1'
              xmlSpace='preserve'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667 c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146 z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034 C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187 h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306 c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50 H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414 C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404 c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514 H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667 c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593 C381.469,407.717,366.807,418.738,351.021,427.514z'></path>
              </g>
            </svg>
            <h5 className='text-black text-base font-normal leading-6 ml-5'>
              www.ninety-nines.org
            </h5>
          </a>

          <div className='flex items-center gap-6 justify-center border-t border-gray-100 pt-6'>
            <a
              href='https://x.com/99sIndiaSection?t=q9EJ4RhxzA2q_4c8izPQkg&s=09'
              target='_blank'
              className='w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#33CCFF] hover:bg-gray-900'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  id='Vector'
                  d='M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z'
                  fill='white'
                />
              </svg>
            </a>
            <a
              href='https://www.instagram.com/99s_india_section?igsh=MWZ4d3dqczR1dmtkbA=='
              target='_blank'
              className='relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[linear-gradient(45deg,#FEE411_6.9%,#FEDB16_10.98%,#FEC125_17.77%,#FE983D_26.42%,#FE5F5E_36.5%,#FE2181_46.24%,#9000DC_85.57%)]  hover:bg-gradient-to-b from-gray-900 to-gray-900  
                        '
            >
              <svg
                className='w-[1.25rem] h-[1.125rem] text-white'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.63434 7.99747C5.63434 6.69062 6.6941 5.63093 8.00173 5.63093C9.30936 5.63093 10.3697 6.69062 10.3697 7.99747C10.3697 9.30431 9.30936 10.364 8.00173 10.364C6.6941 10.364 5.63434 9.30431 5.63434 7.99747ZM4.35427 7.99747C4.35427 10.0108 5.98723 11.6427 8.00173 11.6427C10.0162 11.6427 11.6492 10.0108 11.6492 7.99747C11.6492 5.98418 10.0162 4.3522 8.00173 4.3522C5.98723 4.3522 4.35427 5.98418 4.35427 7.99747ZM10.9412 4.20766C10.9411 4.37615 10.991 4.54087 11.0846 4.681C11.1783 4.82113 11.3113 4.93037 11.4671 4.99491C11.6228 5.05945 11.7942 5.07639 11.9595 5.04359C12.1249 5.01078 12.2768 4.92971 12.3961 4.81062C12.5153 4.69153 12.5966 4.53977 12.6295 4.37453C12.6625 4.2093 12.6457 4.03801 12.5812 3.88232C12.5168 3.72663 12.4076 3.59354 12.2674 3.49988C12.1273 3.40622 11.9625 3.35619 11.7939 3.35612H11.7936C11.5676 3.35623 11.3509 3.44597 11.1911 3.60563C11.0313 3.76529 10.9414 3.98182 10.9412 4.20766ZM5.132 13.7759C4.43946 13.7444 4.06304 13.6291 3.81289 13.5317C3.48125 13.4027 3.24463 13.249 2.99584 13.0007C2.74705 12.7524 2.59305 12.5161 2.46451 12.1847C2.367 11.9348 2.25164 11.5585 2.22016 10.8664C2.18572 10.1181 2.17885 9.89331 2.17885 7.99752C2.17885 6.10174 2.18629 5.87758 2.22016 5.12866C2.2517 4.43654 2.36791 4.06097 2.46451 3.81035C2.59362 3.47891 2.7474 3.24242 2.99584 2.99379C3.24428 2.74515 3.48068 2.59124 3.81289 2.46278C4.06292 2.36532 4.43946 2.25004 5.132 2.21857C5.88074 2.18416 6.10566 2.17729 8.00173 2.17729C9.89779 2.17729 10.1229 2.18472 10.8723 2.21857C11.5648 2.25009 11.9406 2.36623 12.1914 2.46278C12.5231 2.59124 12.7597 2.74549 13.0085 2.99379C13.2573 3.24208 13.4107 3.47891 13.5398 3.81035C13.6373 4.06023 13.7527 4.43654 13.7841 5.12866C13.8186 5.87758 13.8255 6.10174 13.8255 7.99752C13.8255 9.89331 13.8186 10.1175 13.7841 10.8664C13.7526 11.5585 13.6367 11.9347 13.5398 12.1847C13.4107 12.5161 13.2569 12.7526 13.0085 13.0007C12.76 13.2488 12.5231 13.4027 12.1914 13.5317C11.9414 13.6292 11.5648 13.7444 10.8723 13.7759C10.1236 13.8103 9.89865 13.8172 8.00173 13.8172C6.10481 13.8172 5.88051 13.8103 5.132 13.7759ZM5.07318 0.941429C4.31699 0.975845 3.80027 1.09568 3.34902 1.27116C2.88168 1.45239 2.48605 1.69552 2.09071 2.09C1.69537 2.48447 1.45272 2.88049 1.27139 3.34755C1.0958 3.79882 0.975892 4.31494 0.941455 5.07068C0.90645 5.82761 0.898438 6.0696 0.898438 7.99747C0.898438 9.92534 0.90645 10.1673 0.941455 10.9243C0.975892 11.68 1.0958 12.1961 1.27139 12.6474C1.45272 13.1142 1.69543 13.5106 2.09071 13.9049C2.48599 14.2992 2.88168 14.542 3.34902 14.7238C3.80113 14.8993 4.31699 15.0191 5.07318 15.0535C5.83096 15.0879 6.0727 15.0965 8.00173 15.0965C9.93075 15.0965 10.1729 15.0885 10.9303 15.0535C11.6865 15.0191 12.2029 14.8993 12.6544 14.7238C13.1215 14.542 13.5174 14.2994 13.9127 13.9049C14.3081 13.5105 14.5502 13.1142 14.7321 12.6474C14.9077 12.1961 15.0281 11.68 15.062 10.9243C15.0964 10.1668 15.1044 9.92534 15.1044 7.99747C15.1044 6.0696 15.0964 5.82761 15.062 5.07068C15.0276 4.31489 14.9077 3.79853 14.7321 3.34755C14.5502 2.88077 14.3075 2.4851 13.9127 2.09C13.518 1.69489 13.1215 1.45239 12.655 1.27116C12.2029 1.09568 11.6865 0.975277 10.9308 0.941429C10.1735 0.907013 9.93132 0.898438 8.00229 0.898438C6.07327 0.898438 5.83096 0.906445 5.07318 0.941429Z'
                  fill='white'
                />
              </svg>
            </a>
            <a
              href='https://facebook.com/groups/2405620646324248/'
              target='_blank'
              className='relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF]  hover:bg-gray-900 '
            >
              <svg
                className='w-[1rem] h-[1rem] text-white'
                viewBox='0 0 8 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Box With Logo & social links ----end */}
        
        {/* Contact-us form ----start  */}
        <div className='lg:w-[80%] w-auto h-auto px-10 py-5 bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
          <h1 className='text-xl font-semibold text-center my-5'>
            {' '}
            Connect With Us
          </h1>
          <form onSubmit={submitHandler}>
            <div className='mb-5'>
              <input
                type='text'
                placeholder='Full Name'
                className='w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-blue-600 ring-gray-50'
                name='Name'
                required
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='mb-5'>
              <input
                type='number'
                placeholder='Mobile'
                className='w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-blue-600 ring-gray-50'
                name='Number'
                required
                onChange={e => setNumber(e.target.value)}
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='email_address' name='email' className='sr-only'>
                Email Address
              </label>
              <input
                id='email_address'
                type='email'
                placeholder='Email'
                className='w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4  border-gray-300 focus:border-blue-600 ring-gray-50'
                name='Email'
                required
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <textarea
                placeholder='Your Query....'
                className='w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none  h-36 focus:ring-4  border-gray-300 focus:border-blue-600 ring-gray-50'
                name='Message'
                required
                onChange={e => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type='submit'
              disabled={disableBtn}
              className='w-full py-4 font-semibold text-white transition-colors bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7'
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact-us form ----end  */}
      </div>
    </div>
  )
}