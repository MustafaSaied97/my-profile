import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from 'src/utils/variants';
import Img_1 from 'src/assets/images/portfolio-img-1.png'
import Img_2 from 'src/assets/images/portfolio-img-2.png'
import Img_3 from 'src/assets/images/portfolio-img-3.png'
export default function Work() {
  const projects = [
    {
      name: 'Development',
      ImgSrc: Img_1,
      link: 'learn more',
    },
    {
      name: 'Development',
      ImgSrc: Img_2,
      link: 'learn more',
    },
    {
      name: 'Development',
      ImgSrc: Img_3,
      link: 'learn more',
    },

  ];
  return (
    <section id='work' className='section'>
      <section className='container mx-auto'>
          <div className='card-container gap-4'>
            {/* section title  */}
            <motion.div  variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.3}} 
            className='w-full'>
              <h2 className='h2   leading-tight text-secondary'>
                My latest <br /> work
              </h2>
              <p className='max-w-sm mb-16 '>software developer with a specialization in frontend technologies.</p>
              <button className='btn bg-gradient btn-sm'>View all projects</button>
            </motion.div>

            {/* project card */}
            {projects.map((project,index)=>(
            <motion.figure  variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.3}} 
            key={index} className='group w-full  relative overflow-hidden border-2 border-white/50 rounded-xl' >

              <div className='group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-500'></div>

              <img src={project.ImgSrc} alt="" className='group-hover:scale-125 object-contain h-full  transition-all duration-500' />

              <figcaption className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20'>
                <span className='text-gradient'>UI/UX Design</span>
              </figcaption>
              <figcaption className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-20'>
                <span className='text-3xl text-white'>Project-title</span>
              </figcaption>
            </motion.figure>
            ))}
          </div>
  

      </section>
    </section>
  );
}
