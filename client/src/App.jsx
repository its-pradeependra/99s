import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Member = lazy(() => import('./pages/Member'))
const Footer = lazy(() => import('./components/Footer'))
const Header = lazy(() => import('./components/Header'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivateRoute = lazy(() => import('./components/PrivateRoute'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const EventView = lazy(() => import('./pages/EventView'))
const Donate = lazy(() => import('./pages/Donate'))
const MemberView = lazy(() => import('./pages/MemberView'))
const FriendView = lazy(()=> import('./pages/FriendView'))
const News_Event = lazy(() => import('./pages/News_Event'))
const PageNotFound = lazy(() => import('./components/PageNotFound'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))
export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
        {/* <img className="w-40 h-40 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" /> */}
        <svg width='200' height='200' fill='#f6640f' viewBox='0 0 24 24'>
        <g className='spinner_OSmW'>
          <rect x='11' y='1' width='2' height='5' opacity='.14' />
          <rect
            x='11'
            y='1'
            width='2'
            height='5'
            transform='rotate(30 12 12)'
            opacity='.29'
          />
          <rect
            x='11'
            y='1'
            width='2'
            height='5'
            transform='rotate(60 12 12)'
            opacity='.43'
          />
          <rect
            x='11'
            y='1'
            width='2'
            transform='rotate(90 12 12)'
            opacity='.57'
          />
          <rect
            x='11'
            y='1'
            width='2'
            height='5'
            transform='rotate(120 12 12)'
            opacity='.71'
          />
          <rect
            x='11'
            y='1'
            width='2'
            radius='5'
            transform='rotate(150 12 12)'
            opacity='.86'
          />
          <rect
            x='11'
            y='1'
            width='2'
            radius='5'
            transform='rotate(180 12 12)'
          />
        </g>
      </svg>
      </div>}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/member' element={<Member />} />
          <Route path='/event/:eventId' element={<EventView />} />
          <Route path='/member/:memberId' element={<MemberView />} />
          <Route path='/friend/:friendId' element={<FriendView />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/news_and_events' element={<News_Event />} />

          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
        <Toaster /></Suspense>
    </Router>
  )
}