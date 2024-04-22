import React from 'react';
import { ColumnsData } from '../constant/FooterData';
import Images from '../constant/Images';
const Footer = () => {

  return (
    <div>
      <div className='flex justify-between ps-10 pe-10'>
        {ColumnsData?.map((column, index) => (
          <div key={index} className='ps-4'>
            <div className='mb-5'>
              <h3 className='font-[700] text-[16px]'>{column.title}</h3>
            </div>
            {column.links.map((link, linkIndex) => (
              <p key={linkIndex} className='pt-1 pb-1 text-[0.8rem] text-[#6f7377]'>{link}</p>
            ))}
          </div>
        ))}
      </div>
      {/* Payments Methods and Terms and Conditions */}
      <div className='pt-10 pb-10 ps-10 pe-10 bg-[#f9f9f9] mt-4'>
        <div className='flex items-center justify-between'>
          <div className='flex justify-between'>
            <div>
              <p className='underline text-[10px] text-[#000000]'>TERMS & CONDITIONS</p>
            </div>
            <div>
              <p className='underline text-[10px] text-[#000000]'>PRIVACY POLICY</p>
            </div>
            <div>
              <p className='underline text-[10px] text-[#000000]'>COOKIES POLICY</p>
            </div>
          </div>
          {/* Company Details */}
          <div>
            <p className='opacity-[0.6]'>© 2024 <span className='underline text-[16px] text-[#000]'>Pure Elements</span> - V 1.0</p>
          </div>
          {/* Payment Method */}
          <div className='flex items-center'>
            <div className='ps-2 pe-2'>
              <img className='h-[25px]' src={Images.Visa} alt='Visa' />
            </div>
            <div className='ps-2 pe-2'>
              <img className='h-[25px]' src={Images.MasterCard} alt='Visa' />
            </div>
            <div className='ps-2 pe-2'>
              <img className='h-[25px]' src={Images.Gpay} alt='Visa' />
            </div>
            <div className='ps-2 pe-2'>
              <img className='h-[25px]' src={Images.Applepay} alt='Visa' />
            </div>
            <div className='ps-2 pe-2'>
              <img className='h-[25px]' src={Images.Cod} alt='Visa' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
