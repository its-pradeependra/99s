import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashMember from '../components/DashMember.jsx';
import DashGallery from '../components/DashGallery.jsx';
import DashContactQuery from '../components/DashContactQuery.jsx';
import AddMember from '../components/AddMember.jsx';
import AddGalleryImage from '../components/AddGalleryImage.jsx';
import DashEvent from '../components/DashEvent.jsx';
import AddEvent from '../components/AddEvent.jsx';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const tabFromUrl = new URLSearchParams(location.search).get('tab');
    if (tabFromUrl) setTab(tabFromUrl);
  }, [location.search]);

  return (
    <div className='min-h-screen flex flex-col md:flex-row pt-[10%]'>
      {tab === 'member' && <DashMember />}
      {tab === 'gallery' && <DashGallery />}
      {tab === 'event' && <DashEvent />}
      {tab === 'contact-form' && <DashContactQuery />}
      {tab === 'add-member' && <AddMember />}
      {tab === 'add-gallery' && <AddGalleryImage />}
      {tab === 'add-event' && <AddEvent />}
    </div>
  );
}
