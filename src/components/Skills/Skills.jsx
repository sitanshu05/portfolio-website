import React, { useState,useEffect } from 'react'
import './Skills.css'
import Skillicon from './components/Skillicon/Skillicon'
import { motion } from 'framer-motion'

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

    const frstSkills = frstSkillSet.map((skill , i) => {
        return <Skillicon icon = {skill} />
   
    });

    const sndSkills = sndSkillSet.map((skill) => {
        return <Skillicon icon = {skill} />
    
    });



    function getCurrentDimension(){
        return {
              width: window.innerWidth,
              height: window.innerHeight
        }
    }

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        const updateDimension = () => {
              setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
  }, [screenSize])

  let content

  if(screenSize.width <=1000){
     content = (<motion.div className={style.skill_container}
        initial ={{opacity : 0, y : 100}}
            whileInView={{opacity : 1,y:0}}
            transition = {{duration :1}}
            viewport={{ once: true }}
     >
        <div className={style.row1}>
            {frstSkills}
        </div>
        <div className={style.row2}>
            {sndSkills}
        </div>
    </motion.div>)
  }
  else{
    content = (
        <motion.div className={style.skill_container}
            initial ={{opacity : 0, y : 100}}
            whileInView={{opacity : 1,y:0}}
            transition = {{duration :1}}
            viewport={{ once: true }}
        >
                  {frstSkills} {sndSkills} 
            </motion.div>
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