import Image from 'next/image';
import { HomeIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid';
import {
  ChatIcon,
  HeartIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className='shadow-sm sticky border-b bg-white top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* Left */}

        <div
          className='hidden relative w-24 h-24 cursor-pointer lg:inline-grid'
          onClick={() => router.push('/')}
        >
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div
          className='relative w-10  flex-shrink-0 cursor-pointer lg:hidden'
          onClick={() => router.push('/')}
        >
          <Image
            src='https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Middle */}
        <div className='max-w-xs mt-2'>
          <div className='mt-1 relative p-3 rounded-md '>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='text'
              placeholder='Search'
              className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
            />
          </div>
        </div>

        {/* Right */}

        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' onClick={() => router.push('/')} />
          <MenuIcon className='h-6 md:hidden' />

          {session ? (
            <>
              <div className='relative navBtn '>
                <ChatIcon className='navBtn ' />
                <div className='absolute text-center -top-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white -right-1 text-xs'>
                  5
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className='navBtn'
              />
              <UserGroupIcon className='navBtn' />
              <HeartIcon className='navBtn' />
              <img
                onClick={signOut}
                className='cursor-pointer rounded-full h-10'
                src={session?.user.image}
                alt='Profile Picture'
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
