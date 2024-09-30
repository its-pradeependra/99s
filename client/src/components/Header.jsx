import { Link, useLocation } from 'react-router-dom'
import { Dropdown } from 'flowbite-react'
import GoogleAuth from '../components/GoogleAuth'
import toast from 'react-hot-toast'

import { useEffect, useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { signOutUserSuccess } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Header () {
  const dispatch = useDispatch()

  const { currentUser } = useSelector(state => state.user)

  const location = useLocation()
  const [tab, setTab] = useState('')

  const handleSignOut = async () => {
    try {
      const res = await fetch('/api/auth/signout', {
        method: 'GET'
      })
      const data = await res.json()

      if (!res.ok) {
        console.log(data.message)
        toast.error('Failed to LogOut!!')
      } else {
        dispatch(signOutUserSuccess(data))
        console.log(data)
        toast.success(data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) setTab(tabFromUrl)
  }, [location.search])

  const dashboard = location.pathname

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menu = [
    {
      name: 'Home',
      path: '/',
      adminName: 'Members',
      tab: 'member'
    },
    {
      name: 'About',
      path: '/about',
      adminName: 'Gallery',
      tab: 'gallery'
    },
    {
      name: 'Members',
      path: '/member',
      adminName: 'News & Event',
      tab: 'event'
    },
    {
      name: 'News & Events',
      path: '/news_and_events',
      adminName: 'Query',
      tab: 'contact-form'
    },
    {
      name: 'Gallery',
      path: '/gallery'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ]

  return (
    <header className='bg-white z-50 w-full bg-opacity-60 shadow-lg  backdrop-blur-sm  bg-white/30 fixed py-4 '>
      <nav className='mx-auto flex max-w-7xl items-center justify-between lg:px-8'>
        <Link to={'/'} className='sm:w-[12%] w-[80%]'>
          <img
            className='h-20 sm:h-28 w-full'
            alt='99s'
            src={
              'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2Flogo.png?alt=media&token=4331b693-7010-4879-83c0-335e7a7a7e52'
            }
          />
        </Link>
        <div className='flex flex-col gap-2 items-center'>
          <Link to={'/'} className='sm:w-[50%] w-[80%]'>
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2FheaderImg.png?alt=media&token=096586ea-31e3-495b-b3ee-be00526d5721'
              }
              className=' mx-auto w-[90%] sm:w-90' 
              alt=''
            />
          </Link>

          <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
            {menu.map(i => (
              <span
                key={i.path}
                className='text-lg font-medium leading-6 text-gray-900'
              >
                {dashboard == '/dashboard' ? (
                  <Link
                    to={`/dashboard?tab=${i.tab}`}
                    className={`rounded-md hover:text-blue-800 ${
                      tab === i.tab && 'text-blue-800'
                    }`}
                  >
                    {i.adminName}
                  </Link>
                ) : (
                  <Link
                    to={i.path}
                    className={`rounded-md hover:text-blue-800 ${
                      dashboard === i.path && 'text-blue-800'
                    }`}
                  >
                    {i.name}
                  </Link>
                )}
              </span>
            ))}
          </PopoverGroup>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-2'>
          <Link
            to={'https://www.ninety-nines.org/'}
            target='_blank'
            className='w-[6rem] leading-6 border border-[#f6640f] rounded-xl py-2 px-4 lg:mx-0  text-sm text-white bg-[#f6640f] font-semibold transition-all duration-300 hover:bg-[#f6640fc0]'
          >
            Join 99s
          </Link>
          <Link
            to={'/donate'}
            className='leading-6 border border-blue-800 rounded-xl py-2 px-4 w-fit lg:mx-0  text-sm text-white bg-blue-800 font-semibold transition-all duration-300 hover:bg-blue-700'
          >
            Donate
          </Link>

          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <img
                  className='border-2 border-black absolute rounded-full h-10 w-10 object-cover'
                  src={currentUser.avatar}
                  alt={currentUser.name}
                />
              }
            >
              <Dropdown.Header>
                <span className='block text-sm'>@{currentUser.username}</span>
                <Dropdown.Divider />
                <span className='block text-sm font-medium truncate'>
                  {currentUser.email}
                </span>
              </Dropdown.Header>

              {currentUser.isAdmin ? (
                <Link to={'/dashboard?tab=member'}>
                  {' '}
                  <Dropdown.Item>Admin</Dropdown.Item>
                </Link>
              ) : (
                ''
              )}
              <Dropdown.Divider />
              {dashboard == '/dashboard' && (
                <Link to={'/'}>
                  <Dropdown.Item>Home</Dropdown.Item>
                </Link>
              )}
              <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <GoogleAuth />
          )}
        </div>

        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='inline-flex items-center justify-center rounded-md p-3 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden z-50'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 sm:pt-[25%] pt-[40%] md:pt-[20%] w-full overflow-y-scroll bg-white px-6 py-6 sm:max-w-[15rem] sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex flex-row justify-between'>
            {currentUser ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  // <Avatar alt='User' className='border-2 rounded-full border-black absolute' img={currentUser.profilePicture} rounded />
                  <img
                    className='border-2 border-black absolute rounded-full h-10 w-10 object-cover'
                    src={currentUser.avatar}
                    alt={currentUser.name}
                  />
                }
              >
                <Dropdown.Header>
                  <span className='block text-sm'>@{currentUser.username}</span>
                  <Dropdown.Divider />
                  <span className='block text-sm font-medium truncate'>
                    {currentUser.email}
                  </span>
                </Dropdown.Header>

                {currentUser.isAdmin ? (
                  <Link to={'/dashboard?tab=member'}>
                    {' '}
                    <Dropdown.Item onClick={() => setMobileMenuOpen(false)}>
                      Admin
                    </Dropdown.Item>
                  </Link>
                ) : (
                  ''
                )}
                <Dropdown.Divider />
                {dashboard == '/dashboard' && (
                  <Link to={'/'}>
                    <Dropdown.Item onClick={() => setMobileMenuOpen(false)}>
                      Home
                    </Dropdown.Item>
                  </Link>
                )}
                <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
              </Dropdown>
            ) : (
              <GoogleAuth />
            )}
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='rounded-md p-2.5 text-gray-700 float-right'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>

          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6 flex flex-col gap-2'>
                {menu.map(i => (
                  <span
                    onClick={() => setMobileMenuOpen(false)}
                    key={i.path}
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    {dashboard == '/dashboard' ? (
                      <Link
                        to={`/dashboard?tab=${i.tab}`}
                        className={`rounded-md hover:text-blue-800 ${
                          tab === i.tab && 'text-blue-800'
                        }`}
                      >
                        {i.adminName}
                      </Link>
                    ) : (
                      <Link
                        to={i.path}
                        className={`rounded-md hover:text-blue-800 ${
                          dashboard === i.path && 'text-blue-800'
                        }`}
                      >
                        {i.name}
                      </Link>
                    )}
                  </span>
                ))}
              </div>

              <div className='py-6 flex flex-col gap-8'>
                <div className='flex gap-3'>
                  <Link
                    to={'https://www.ninety-nines.org/membership.htm'}
                    target='_blank'
                    className='w-[6rem] leading-6 border border-orange-800 rounded-xl py-2 px-4 lg:mx-0  text-sm text-white bg-orange-800 font-semibold transition-all duration-300 hover:bg-orange-600'
                  >
                    Join 99s
                  </Link>
                  <Link
                    to={'/'}
                    className='leading-6 border border-blue-800 rounded-xl py-2 px-4 w-fit lg:mx-0  text-sm text-white bg-blue-800 font-semibold transition-all duration-300 hover:bg-blue-700'
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}