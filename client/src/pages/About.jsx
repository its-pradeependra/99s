import { Link } from 'react-router-dom'
import { Carousel, IconButton } from '@material-tailwind/react';

const charter_members = [
  {
    id: 1, name: "CHANDA S BUDHABHATTI ", avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FCharter%20Members%2Fchanda.jpg?alt=media&token=2e1aca7a-abb9-4e4d-a880-90b9d392bd2a'
  }, {
    id: 2, name: "MOHINI SHROFF", avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FCharter%20Members%2Fmohini_shroff.jpg?alt=media&token=613cb5bb-9259-43ce-ab00-e0747664d9b5'
  },
  {
    id: 3, name: "DURBA BANNERJEE", avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FCharter%20Members%2Fdurba_bannerjee.jpg?alt=media&token=bf2c0abc-5e5e-4f87-930a-03ea371ee428'
  },
  {
    id: 4, name: "RABIA FUTEHALLY", avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FCharter%20Members%2Frabia_futehally.jpg?alt=media&token=18e42b34-cac8-464a-9876-5db2a41a2fd6'
  },
  {
    id: 5, name: "DR.SUNILA BHAJEKAR", avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FCharter%20Members%2Fsunila_bhajekar.jpg?alt=media&token=d24e64f4-b35f-4d47-ab08-913bb4a76aae'
  },
  {
    id: 6, name: "SAUDAMINI DESHMUKH", avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FCharter%20Members%2Fsaudamini.jpg?alt=media&token=b19d221d-92cf-4f60-86d4-e03470f18bf4'
  },
]

const aboutUsSlider = [
  'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FAbout%20us%2F4-sri-lanka.jpg?alt=media&token=c9da3f0b-1b18-4f5a-9de3-520725dcbe5f',
  'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FAbout%20us%2F5-australia.jpg?alt=media&token=c42cc761-a211-45f7-94d6-71baace713c7',
  'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FAbout%20us%2F6-jordan.jpg?alt=media&token=c383cca0-4199-4e2a-8ab8-19a9a9200561',
  'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FAbout%20us%2F7-usa.jpg?alt=media&token=19824094-d095-4de8-9ddb-2e7b6ba0cabf',
  'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FAbout%20us%2F8_image.jpg?alt=media&token=2305a5c4-bd32-45de-bb52-20a103520df0'
]

export default function About() {

  return (
    <section className="pt-[30%] md:pt-[8%]">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">

        {/* Component - About us */}
        {/* <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 flex justify-center">About Us</h1> */}
        <h2 className=" text-center font-semibold text-3xl leading-9 text-gray-800 sm:text-2xl md:text-5xl">About Us</h2>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-blue-800"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
        </div>

        <div className='flex flex-col justify-between gap-8 px-10'>
          <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
            <p className=' sm:w-[30%] w-full font-normal text-base leading-6 text-gray-600 text-justify'>The Ninety-Nines is a unique organisation. It is the largest organisation worldwide, which is comprised wholly of licenced women pilots. It was founded in the year 1929 when a group of women pilots met at Curtiss Field Long Island, New York, USA. As the original members numbered 99, the club was appropriately given the name, The Ninety- Nines. The world famous aviatrix, Amelia Earhart, was the first president of the club.</p>
            <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FAbout%20us%2F1-bombay.jpg?alt=media&token=3454016a-d30d-44cd-b8e5-eb19835eb1c7'} alt="Bombay" />
          </div>

          <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col-reverse bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
            <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FAbout%20us%2F2-nepal.jpg?alt=media&token=67a67d4e-7025-469b-9059-8e4aa08ab2d9'} alt="Nepal" />
            <p className=' sm:w-[30%] w-full font-normal text-base leading-6 text-gray-600 text-justify'> The membership is limited to women possessing pilot licenses.Once a member, they are addressed as “Ninety-Nines”. And their spouses are called 49 1/2ers (Forty-nine and a half-ers).The organisation’s, 27 geographic sections in the United States Canada, Australia, India, Japan, Italy, Austria, Finland, UK, Brazil France, Nepal, New Zealand, Russia and Germany operate under the guidance of the International Board of Directors Sections are divided into more than 150 Chapters which have  minimum of 5 members each.</p>
          </div>

          <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
            <p className=' sm:w-[30%] w-full font-normal text-base leading-6 text-gray-600 text-justify'> Members in countries with fewer than fiv participants are given the status of members-at-large Sections are presided over by Governors, and each Section hold periodical meetings. The Ninety-Nines hold an annual conference whic is attended by members around the world. As the Ninety-Nine Headquarters are in Oklahoma, the annual Conference is held in the U and once every 4-5 years it is held outside the US, hosted by one of th International Sections Ninety-Nines are living and flying in almost all continents.</p>
            <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FAbout%20us%2F3-egypt.jpg?alt=media&token=b0f93986-f435-4ede-80b0-b97bb5d4fe92'} alt="Egypt" />
          </div>

          <div className=' bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>

            <Carousel
              className="rounded-xl overflow-y-visible"
              autoplay={true}
              loop={true}
              interval={3000}
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
              {aboutUsSlider.map((slide) => (

                <img
                  key={slide}
                  src={slide}
                  alt="Failed to load image"
                  className="h-96 w-full object-cover
                      bg-center"
                />))}
            </Carousel>

            <div className="text-center font-medium my-3">
              <span>International Website of  </span><Link className="text-blue-800" target="_blank" to={'https://www.ninety-nines.org/Chapter-India_16.htm'}>The Ninety-Nines, inc.</Link>
            </div>

          </div>

        </div>

        {/* Component - Founder Member's  */}
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">

          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            {/* <h2 className=" text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4  tracking-tight  ">Our Charter Members </h2> */}
            <h2 className=" font-semibold text-3xl sm:text-2xl leading-9 text-gray-800 md:text-5xl">Our Charter Members</h2>
            <p className="font-normal text-base leading-6 text-gray-600">Their vision and dedication continue to inspire generations of women aviators.</p>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-blue-800"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
            </div>
          </div>

          <div className="grid gap-8 mb-6 md:grid-cols-3">
            {
              charter_members.map((member) => (

                <div key={member.id} className="w-full flex flex-col justify-center items-center">
                  <img className="rounded-full w-48 h-48 object-contain" src={member.avatar} alt={member.name} />
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 ">{member.name}</h3>
                    <p></p>
                  </div>
                </div>

              ))
            }
          </div>
        </div>


        {/* Component - Our History */}
        <div className="w-full flex flex-col justify-center py-5 px-10 ">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 flex justify-center">OUR HISTORY: BIRTH OF THE INDIA SECTION</h1>
          <div className="font-normal text-base leading-6 text-gray-600 text-justify">

            <div className='flex flex-col gap-8'>
              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <p className=' sm:w-[30%] w-full'>In 1965, Miss Isabelle McCrae, Chairman of the El Cajon Valley Chapter, while on a cruise, stopped over in Bombay, and visited the Bombay Flying Club. There she saw Rabia Futehally flying in a saree. On her return to the US, she sent an invitation to women Pilots at the Bombay Flying Club, wanting to promote the Ninety-Nines in India.</p>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FHistory%2F1_HISTORY.jpeg?alt=media&token=4dd1572c-f1b1-4019-8e25-1cecf10a61bc'} alt="History 1" />
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col-reverse bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FHistory%2F4_HISTORY.jpeg?alt=media&token=f1c90178-f53b-408c-aef5-cb5ee20c4555'} alt="History 4" />
                <p className='sm:w-[30%] w-full'>The El Cajon Valley chapter, as a gesture of goodwill, subsequently offered to pay the entrance and a year’s fees for Ninety-Nines membership for three pilots- Mrs. Chanda Sawant, Mrs. Rabia Futehally, and Miss Mohini Shroff.</p>

              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <p className='sm:w-[30%] w-full'>In March 1976, the then president of The Ninety-Nines, Lois Feigenbaum came to India and she contacted Mrs. Chanda Sawant and helped in the formation of a Section for the Ninety-Nines in India. Isabelle McCrae was the guiding force behind the establishment of a section of the Ninety-Nines Club in this country.
                  <br /><br /><span className="text-black font-medium flex justify-center"> Thus, the Ninety-Nines India Section was chartered on 26th March
                    1976. </span></p>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FHistory%2F5_HISTORY.jpg?alt=media&token=aa2c423c-c607-463a-ba56-dc2669b24bfd'} alt="History 5" />
              </div>
              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col-reverse bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FHistory%2F7_HISTORY.jpg?alt=media&token=ecbe54b6-603d-48f8-b781-ec440eae4352'} alt="History 7" />
                <p className='sm:w-[30%] w-full'>Its founding members are Chanda Sawant Budhabhatti, Mohini Shroff, Rabia Futehally, Sunila Bhajekar, Durba Banerjee and Saudamini Deshmukh. Chanda Sawant Budhabhatti was the first Governor of the India Section. </p>
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <p className='sm:w-[30%] w-full'>When India Section was formed, India had only a handful of lady pilots. Two prominent women Pilots of that time were Miss Prem Mathur and Miss Durba Banerjee, who held Commercial pilots Licences. </p>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FHistory%2F9_HISTORY.jpg?alt=media&token=8518de01-0c2a-40fb-9fc8-9b3db9d36b2d'} alt="History 9" />
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col-reverse bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FHistory%2F11_HISTORY.jpg?alt=media&token=159c66a5-38f6-42f8-817b-36a7f9ce40fd'} alt="History 11" />
                <p className='sm:w-[30%] w-full'>Miss Prem Mathur had flown Dakotas for Business Houses like Birlas and also for Deccan Airways. Miss Durba Banerjee was flying the Boeing 737 for Indian Airlines at that time. Miss Prem Mathur had flown Dakotas for Business Houses like Birlas and also for Deccan Airways.</p>

              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <p className='sm:w-[30%] w-full'>Miss Durba Banerjee was flying the Boeing 737 for Indian Airlines at that time. Durba Banerjee became the first woman Pilot to be employed by an IATA Airline (Indian Airlines) in the year 1966.</p>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FHistory%2F12_HISTORY.jpg?alt=media&token=2cf12d77-626b-47ad-be6d-e58cbcb35ba6'} alt=" History 12" />
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col-reverse bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FHistory%2F10_HISTORY.jpg?alt=media&token=4f52ac1f-2365-4682-9e7c-b8f75175e99a'} alt="History 10" />
                <p className='sm:w-[30%] w-full'>Saudamini Deshmukh and Nivedita Jain (Bhasin) joined Indian Airlines in the year 1980 and 1984 respectively, and created history by flying the world’s first All Women Crew Flight on the Fokker Friendship F-27. Anila Bhatia (Cheema) became the fourth woman Pilot to join Indian Airlines in 1985. And the rest is History.</p>
              </div>
              <span className="text-black font-medium flex justify-center">  INDIA NOW LEADS THE WORLD IN THE PERCENTAGE ( almost 15%) OF WOMEN AIRLINE PILOTS. </span>         </div>
          </div>
        </div>

        {/* Component - INCEPTION & JOURNEY */}
        <div className="w-full flex flex-col justify-center py-5 mt-20 px-10 ">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 flex justify-center">INCEPTION & JOURNEY</h1>
          <div className="font-normal text-base leading-6 text-gray-600 text-justify">

            <div className='flex flex-col gap-8'>
              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <p className=' sm:w-[45%] w-full'>In 1928, three years before the birth of civil aviation in India, the first Flying Club opened at Bombay to civilians. Aviation, still at its infancy, was male-oriented and only a few daring ladies ventured to wing their way across the Indian skies. Lady Dinshaw Petit and Rodahben Sawhney, sisters of J.R.D. Tata, the father of civil aviation in India, took to flying for fun. Although a few women were members of Bombay Flying Club, they were unknown to each other. A visit in 1965 by Isabelle McCrae, an American Ninety-Nine, triggered off the idea to form an association. In 1967, Chanda Budhabhatti, founder President, Rabia Futehally and Mohini Shroff with Mangala Joshi, Kumudini Rawal and Dr. Sunila Bhajekar formed the Indian Women Pilots Association, a non-profit body with its headquarters in Bombay - the fifth national association of its kind in the world.</p>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FInception%20and%20journey%2F1.jpg?alt=media&token=c80967e3-8c05-4158-931a-d3b2596a3ee0'} alt="Inception and Journey 1" />
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col-reverse bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FInception%20and%20journey%2F2.jpg?alt=media&token=0c34b38a-73e5-4650-91e6-ee589b4782b1'} alt="Inception and Journey 2" />
                <p className='sm:w-[45%] w-full'>The members come from different walks of life like - airline pilots, flight instructors, flight dispatchers, air traffic controllers, engineers, airport managers, doctors, lawyers, agriculture aviation pilots, balloonists, sky divers, helicopter pilots, glider pilots, business women, teachers, executives, housewives, etc. The membership is extremely broad based which include women with special interest in aviation including students and corporate members.
                  The purpose is to foster, promote and facilitate the awareness, education and development of aerospace to all, men and women, especially amongst women. They held seminars, conferences, congresses, independently as well as with national aviation organizations like Aeronautical Society of India, Aero Club of India and Federations of Indian Pilots.
                </p>
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <p className='sm:w-[45%] w-full'>Other projects include holding essay competition in schools, doing workshops, arranging visits to flying clubs and Air traffic control towers.
                  <br />
                  In 1976, IWPA went international and formed the India Section of The Ninety-Nines, Inc., International Organization of Women Pilots, to facilitate and exchange experiences and ideas over the sub-continent and over the world. Chanda Budhabhatti, Rabia Futehally and Mohini Shroff were the members of The Ninety-Nines from 1965 and they helped to form an India Section, then, a part of twenty-seven geographical Sections of The Ninety-Nines.</p>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FInception%20and%20journey%2F3.jpg?alt=media&token=01e6573f-c2ef-47bf-892a-29734f188a51'} alt="Inception and Journey 3" />
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col-reverse bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FInception%20and%20journey%2F4.jpg?alt=media&token=1b24bab3-4507-47b6-9d94-700c57899bec'} alt="4Inception and Journey " />
                <p className='sm:w-[45%] w-full'>In the early years between 1929 and 1980, there were a handful of women pilots scattered all over India. The 1980s proved to be a breakthrough reflecting sustained and patient work of the founding members of IWPA over two decades. Since then women have gotten into various aviation fields like airline pilots, air force flight officers, coast guard pilots, flight dispatchers, engineers, air traffic controllers, airport managers, flight information centre, meteorology department, flight safety officers, etc.
                  <br /><br /><span className="text-black font-medium flex justify-center"> In 1985, Director General of Civil Aviation issued 153 private licenses and seven commercial pilot licenses to women.</span>
                </p>
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <p className='sm:w-[45%] w-full'>Indian Airlines women pilots set world records-Capt. Saudamini Deshmukh and Capt. Nivedita Bhasin flew all women crews IATA schedule flights in 1985 and 1989. In July 1988, Capt. Saudamini Deshmukh became India’s first woman Jet Commander. In 1990 Capt. Nivedita Bhasin, at the age of 26, became the world’s youngest woman Commander of the Boeing 737.
                  <br /><br />In 1986, the IWPA & India Section Ninety-Nines, organized the “World Aviation, Education & Safety Congress” sponsored by The Ninety-Nines, Inc. and Aero Club of India in Delhi. This Congress was the first of its kind in Asia and was inaugurated by the then Prime Minister Rajiv Gandhi. Over 300 delegates from different parts of the world participated in the Congress. It was a great success with having world renowned speakers deliberating on various aviation related topics.
                </p>
                <img className='rounded-xl h-1/4' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FInception%20and%20journey%2F5.jpeg?alt=media&token=578cb1bc-bce9-446c-b5d6-2d80369a6ebf'} alt="Inception and Journey 5" />
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col-reverse bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FInception%20and%20journey%2F6.jpg?alt=media&token=4e1e22f0-e970-410f-8d2d-0bafef2665be'} alt="Inception and Journey 6" />
                <p className='sm:w-[45%] w-full'>In 1994, the Second Congress was inaugurated by Air Chief Marshal S.K. Kaul, IAF, in Bombay, which had speakers like Lt. Manja Block, world’s first woman F-16 fighter from Holland, Capt. Suzanna Darcy-Hennemann, first woman test pilot of Boeing and aviator, author and actor Cliff Robertson.
                </p>
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <p className='sm:w-[45%] w-full'>
                  After fifteen years of persuasion, the Air Force opened its doors to women pilots, in 1994. As of today the Indian Air Force has women pilots flying helicopters, transport pilot officers and fighter jets, a few of them making history [<a className='text-blue-700' target='_blank' href='https://www.ninety-nines.org/Chapter-India_16.htm'>India Section </a>]
                  <br />
                  Since 1929, Indian women’s contribution in the field of aviation has been outstanding. Having concluded the 50 years of Indian Independence Celebrations, the Government of India released the
                  Commemorative Special Stamp of “Indian Women Pilots”, to honour them on October 5, 1998 – the day that Indian Women Pilots Association held their First Annual General Meeting in 1968.
                </p>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FInception%20and%20journey%2F7.jpg?alt=media&token=e4d10240-4b44-476e-890c-101837dbe139'} alt="Inception and Journey " />
              </div>

              <div className='flex gap-5 items-center justify-evenly sm:flex-row px-5 py-5 flex-col-reverse bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30'>
                <img className='sm:w-[50%] w-full rounded-xl h-auto' src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FInception%20and%20journey%2F8.jpg?alt=media&token=b1623dbb-1064-49b5-b77a-c7804563f8f2'} alt="Inception and Journey 8" />
                <p className='sm:w-[45%] w-full'>
                  India Section Ninety-Nines were instrumental in assisting their sisters in Nepal to form the Nepal Ninety-Nines Section. In November 2000, the 3rd World Aviation and Safety Congress was held in Kathmandu, Nepal. The high authorities of Nepal Government took an active part in the Congress Session. The Congress was a huge success. The women pilots of Nepal joined The Ninety-Nines organization and the Nepal Section was formed with a special ceremony.
                  <br /><br />
                  In November 2002, the India Section of The Ninety-Nines, the Indian Women Pilots Association along with the Aeronautical Society of India for the FIRST time organized an International Conference of “WOMEN IN AVIATION”. Five 99s speakers from USA participated along with Indian women pilots, engineers, designers, air traffic controllers, Indian Airlines and Air India Airlines pilots and managers, Indian Air Force and Navy pilots, medical officers and controllers addressed the august gathering. There were 300 participants from various aviation fields of India who attended the Conference.
                  Needless to say, the Conference was a great success.

                </p>
              </div>
              <span className="text-black font-medium flex justify-center">  India Section is actively promoting The Ninety-Nines’ aims and objectives in India and throughout the world. </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

