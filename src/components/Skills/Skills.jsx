import React, { useState,useEffect } from 'react'
import './Skills.css'
import Skillicon from './components/Skillicon/Skillicon'
import { motion } from 'framer-motion'
import { useScreenSize } from '../../utils/screenSize'

// border-b-[1px] border-acc_grey pb-[1rem]",

const style = {
    container : "mx-[0.75rem] pb-[4rem] w-full max-w-[1800px] px-[1rem] 800:px-[3rem] 1000:px-[4rem]",
    title : "text-[1.5rem] font-code text-purple mb-[4rem] 800:text-[2rem] 550:mb-[8rem] 1000:mb-[8rem]",
    highlight : " text-orange",
    skill_container : "flex flex-col gap-8 550:gap-[5rem] 1000:gap-[3rem] items-center mb-[2rem] min-[1000px]:flex-row min-[1000px]:justify-between 550:mb-[8rem] 1000:mb-[10rem]",
    row1: "flex w-full items-center justify-between", 
    row2: "flex w-full items-center justify-between"

}



    
function Skills(props) {


    const frstSkillSet = ['uil:react' ,'file-icons:c', 'mdi:sql-query','ri:javascript-fill']
    const sndSkillSet = ['akar-icons:html-fill', 'akar-icons:css-fill', 'akar-icons:python-fill','mdi:tailwind']

    const frstSkills = frstSkillSet.map((skill, index) => {
        return <Skillicon icon = {skill} i = {index}/>
   
    });

    const sndSkills = sndSkillSet.map((skill, index) => {
        return <Skillicon icon = {skill} i = {index + 4}/>
    
    });


  let content
  const screenSize = useScreenSize();

  if(screenSize.width <=1000){
     content = (<div className={style.skill_container}>
        <div className={style.row1}>
            {frstSkills}
        </div>
        <div className={style.row2}>
            {sndSkills}
        </div>
    </div>)
  }
  else{
    content = (
        <div className={style.skill_container}>
            {frstSkills} {sndSkills} 
        </div>
    )
  }



    return (
        <div className={style.container} id = "skills">
            <motion.div className={style.title}
            initial={{opacity : 0, translateX : -50}}
            whileInView={{opacity:1 , translateX:0}}
            viewport={{ once: true }}
            transition={{duration : 1}}
            > &lt;<span className={style.highlight}>Skills</span>/&gt;</motion.div>
            {content}
        </div>
    )
}

export default Skills