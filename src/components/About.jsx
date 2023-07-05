import React from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
    

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-5 text-white-gradirnt text-justify sm:text-[18px] text-[13px] max-w-3xl leading-[30px]"
      >
        I am a serious and invested person, ready to assume missions as a web
        developer for the maintenance and management of sites. <br /> I'm
        currently working for a BTS SIO within the CCS - SAT Clients belonging
        to the Crédit Mutuel Alliance Fédérale group. <br /> I continue my
        professional and personal development through self-training on
        programming languages and new technologies.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'> 
        {services.map((service , index) => (
          <ServiceCard key={service.Tilt} index={index}{...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
