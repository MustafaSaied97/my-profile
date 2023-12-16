import React from 'react';
import BannerImg from 'src/assets/images/avatar.svg';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from 'src/utils/variants';
import { useAlertContext } from 'src/context/alertContext';

export default function Banner() {
  const { onOpen } = useAlertContext();
  const mailto={
    email:'mustafasaied749@gmail.com',
    subject:'new message for connection',
    body:'thank you for interesting you write your message for me',
    format:()=>`mailto:${mailto.email}?subject=${mailto.subject}&body=${mailto.body}`
  }

  const socialMedia = [
    {
      icon: <FaYoutube  className=' text-[#e65151]'/>,
      link: 'https://www.youtube.com/playlist?list=PL4_eidZDaykPQOrSNYC2y_XSbyuBQEFp8',
      color:'#e65151'
    },
    {
      icon: <FaGithub className='' />,
      link: 'https://github.com/MustafaSaied97?tab=repositories',
      color:'#fff'
    },
    {
      icon: <FaLinkedin  className=' text-[#288aec]'/>,
      link: 'https://www.linkedin.com/in/mustafa-saied-b11418238/',
      color:'#288aec'
    },
  ];
  return (
    <section id='banner' className='section'>
      <section className='container mx-auto'>
        <figure className='flex sm:flex-row flex-col gap-x-2 items-center'>
          
          <figcaption className='flex-1 text-center font-secondary sm:text-left flex flex-col gap-4'>

            <motion.h1  variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} 
            className='text-[55px] font-[900] leading-[.8]'>
              MUSTAFA <span>SAIED</span>
            </motion.h1>

            <motion.p  variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} 
            className=' flex flex-col sm:flex-row  gap-2  flex-wrap text-[26px] sm:text-[36px] lg:text-[50px] font-secondary font-bold uppercase leading-[1]'>
              <span>I am a</span>
              <TypeAnimation
                sequence={['Software Developer', 2000, 'R&D Engineer', 2000, '3D Designer', 2000]}
                speed={50}
                className='text-secondary '
                wrapper='span'
                repeat={Infinity}
              />
            </motion.p>

            <motion.p  variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} 
            className='mx-auto lg:mx-0 mt-5  max-w-2xl font-semibold text-lg  '>
              I'm a seasoned frontend developer, passionate about creating user-friendly applications. I've tackled various real projects, expanding my
              expertise in software engineering principles. I excel in agile environments, have a strong grasp of version control systems, and am proficient in
              C, Python, MATLAB, and JavaScript. I also have hands-on experience with Linux and bash commands.
            </motion.p>

            <motion.div  variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} 
            className='mx-auto lg:mx-0  mt-8 flex items-center gap-6 max-w-max '>
              <a href={mailto.format()} className='btn btn-sm sm:btn-lg  bg-gradient'> contact me</a>
              <p className='text-gradient btn-link'>My Portfolio</p>
            </motion.div>
            {/* social media */}
            <motion.ul variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} 
            className='flex gap-6 mx-auto lg:mx-0  mt-8'>
              {socialMedia.map((item,index) => (
                <li key={index} className={`hover:-translate-y-1 shadow-md  hover:shadow-[${item.color}] rounded-full   duration-100`}>
                  <a href={item.link} target='_blank' className='text-[30px] '>{item.icon}</a>
                </li>
              ))}
            </motion.ul>
          </figcaption>

          <motion.img variants={fadeIn('down',0.3)} viewport={{once:true,amount:0.7}}  initial='hidden' whileInView={'show'}  
          src={BannerImg} className='w-[500px] p-0 sm:self-start hidden lg:block' alt="" />
  
        </figure>

      </section>
    </section>
  );
}
