
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from 'src/utils/variants';
export default function Services() {
  const services = [
    {
      name: 'Development',
      description: 
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Ea magnam adipisci asperiores a ullam repellat temporibus perspiciatis?`,
      link:'learn more'
    },
    {
      name: 'Development',
      description: 
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Ea magnam adipisci asperiores a ullam repellat temporibus perspiciatis?`,
      link:'learn more'
    },
    {
      name: 'Development',
      description: 
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Ea magnam adipisci asperiores a ullam repellat temporibus perspiciatis?`,
      link:'learn more'
    },
  ];
  return (
    <section id='services' className='section'>
      <section className='mx-auto container'>
        <article className='flex flex-col lg:flex-row'>
          <motion.figure 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}} 
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat bg-contain mix-blend-lighten mb-12 lg:mb-0'> 
            <h2 className='h2 text-accent mb-6'> what I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'> software developer with a specialization in frontend technologies.</h3>
            <button className='btn btn-sm bg-gradient'>See my Work</button>
          </motion.figure>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}} 
          className='flex-1'>
            <ul>
              {services.map((service,index)=>(
                <li className='border-b border-white/50 h-fit mb-[36px] flex' key={index}>

                  <div className='max-w-[476px]'>
                    <h4 className='text-[22px] tracking-wider font-primary font-semibold mb-6'>
                      {service.name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {service.description}
                    </p>
                  </div>

                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='btn bg-gradient h-9 w-9 mb-[42px] grid place-items-center'><BsArrowUpRight/></a>
                    <a href="#" className='text-gradient text-sm'>{service.link}</a>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </article>
      </section>
    </section>
  );
}
