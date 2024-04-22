import React from 'react'
import Images from '../constant/Images'
const Header = () => {
  return (
    <div className='w-full fixed left-0 right-0 top-0 bottom-0 shadow-md h-[4.5em] z-[9999] bg-[#fff]'>
      <div className='flex justify-between ps-6 pe-6 h-[4.5em]'>
        <div className='flex items-center'>
          <div>
            <img src={Images.Humburger} alt='Humburger' />
          </div>
          <div>
            <img className='w-[8em]' src={Images.Logo} alt='Humburger' />
          </div>
        </div>

        <div className='flex items-center'>
          <div className='ps-2 pe-2'>
            <img className='w-[25px] h-[25px] rounded-[100px]' src={Images.Flag} alt='Humburger' />
          </div>
          <span class="ms-2 me-2">|</span>
          <div className='flex items-center pe-10'>
            <div className='ps-2 pe-2'>
              <img src={Images.Search} alt='Humburger' />
            </div>
            <div className='ps-2 pe-2'>
              <img src={Images.User} alt='Humburger' />
            </div>
            <div className='ps-2 pe-2'>
              <img src={Images.Cart} alt='Humburger' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header