import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from 'src/utils/variants';
import { useAlertContext } from 'src/context/alertContext';

export default function Contact() {
  const { onOpen } = useAlertContext();
  function handleSubmit(e){
    e.preventDefault()
    onOpen({type:'success',message:'Thank you for interacting'})
  }
  return (
    <section id='contact' className='section'>
      <section className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.3}} 
          className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.3}} 
          className='flex-1 flex flex-col  sm:gap-6 gap-3 font-secondary font-extrabold'>
            {/* name */}
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                name='floating_name'
                id='floating_name'
                className='block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_name'
                className=' peer-focus:font-extrabold absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Name
              </label>
            </div>
            {/* email */}
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='email'
                name='floating_email'
                id='floating_email'
                className='block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_email'
                className='peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Email address
              </label>
            </div>
            {/* message */}
            <div className='relative z-0 w-full mb-5 group'>
              <textarea
                type='text'
                rows={4}
                name='floating_message'
                id='floating_message'
                className='block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_message'
                className='peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Your Message
              </label>
            </div>

            <button
              type='submit'
              className=' btn btn-sm sm:btn-lg bg-gradient self-start  '>
              Submit
            </button>
          </motion.form>
        </div>
      </section>
    </section>
  );
}
