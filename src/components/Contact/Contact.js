import React, { useState } from 'react'
import Title from '../Layouts/Title';
import ContactRight from './ContactRight';
import ContactLeft from './ContactLeft';
const Contacts = () => {

  return (
    <section id='contacts' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className='w-full'>
        <div className='w-full h-auto flex justify-between'>
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  )
}

export default Contacts;