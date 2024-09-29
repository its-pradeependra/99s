import Feedback from '../components/Feedback'
import NewsAndEvents from '../components/NewsAndEvents'
import Slider from '../components/Slider'

export default function Home () {
  return (
    <div className='pt-[10%]'>
      {/* <----News & Event card-----> */}
      <Slider />

      {/* <----News & Event card-----> */}
      <NewsAndEvents />

      {/* <----Testimonail-----> */}
      <Feedback />
    </div>
  )
}