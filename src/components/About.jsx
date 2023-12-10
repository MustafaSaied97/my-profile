import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from 'src/utils/variants';
export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section section id='about' className='section' ref={ref}>
      <section className='container mx-auto flex  lg:flex-row flex-col   gap-x-4  items-center'>
        <motion.figure 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex-1 bg-about bg-contain bg-top bg-no-repeat h-[420px] opacity-60 mix-blend-lighten m-0'>
        </motion.figure>

        <motion.article
        variants={fadeIn('left',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}} 
        className='flex-1'>
          <h2 className='h2 text-secondary'>About me.</h2>
          <h3 className='h3 mb-4'>
            software developer with a specialization in frontend technologies. 
          </h3>
          <p className=''>
            I have a strong foundation in software engineering principles, I bring a holistic perspective to every
            project. Throughout my career, I have undertaken a multitude of real projects, which have significantly expanded my expertise , knowledge, and
            problem-solving. I thrive in agile environments and have a solid grasp of version control systems. In addition to my frontend skills, I'm proficient
            in various programming languages like C, Python, and MATLAB, with a strong command of JavaScript. I also have hands-on experience with Linux and
            bash commands.
          </p>

          <div className='flex gap-8'>
            <div>
              <p className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView&& <CountUp start={0} end={1} duration={6}/>}
              </p>
              <p className='font-primary text-sm tracking-[2px]'>
                Years of <br/>
                Experience
              </p>
            </div>
            <div>
              <p className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView&& <CountUp start={0} end={30} duration={4}/>}
              </p>
              <p className='font-primary text-sm tracking-[2px]'>
                Compeleted <br/>
                projects
              </p>
            </div>
          </div>
          
        </motion.article>

      </section>
    </section>
  );
}
