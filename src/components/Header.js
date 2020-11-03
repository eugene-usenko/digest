import React from 'react'
import { Text } from '@fluentui/react'
import { Link } from 'gatsby'

const Header = ({ logo }) => {
  return (
    <div className='flex fixed top-0 inset-x-0 h-16 items-center bg-gray-900 text-xl'>
      <div className='w-full max-w-screen-xl relative mx-auto px-6'>
        <div className='flex items-center -mx-6'>
          <Link to='/'>
            <Text className='lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8 text-white' variant='xLarge'>
              {logo}
            </Text>
          </Link>
          {/* <div className='flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5'>
            <div className='w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12'></div>
            <button
              type='button'
              id='sidebar-open'
              class='flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700'
              aria-label='Open site navigation'
            >
              <svg class='fill-current w-4 h-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header
