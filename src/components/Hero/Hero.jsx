import {React, useEffect,useState } from 'react'
import './Hero.css'
import hero from '../../assets/computer-2.png'
import { Icon } from '@iconify/react';
import  resume  from '../../assets/Sitanshu_Hallad.pdf'
import { motion } from 'framer-motion';

const style = {
    container: "px-[1rem] mb-[6rem] flex flex-col items-start 800:flex-row 800:justify-around 800:items-center 800:mt-[6rem] 800:mb-[10rem] w-full max-w-[2500px] 1000:mb-[15rem] 1800:mb-[30rem]",
    main: " flex flex-col  mb-[1rem] 1800:mt-[5rem]",
    title: "font-roboto text-[2.25rem] pb-[0.5rem] 550:text-[3rem] min-[1300px]:text-[4rem] 1800:text-[5rem]",
    highlight_title : "font-code text-orange",
    content : "text-[1.25rem] w-[75%] mb-[1rem] 550:text-[1.75rem] min-[1300px]:text-[1.75rem] 1800:mb-[2rem]",
    link_div : "flex gap-6 items-center justify-baseline",
    hero_img_div : "max-w-[400px] self-end 550:mt-[-12rem] 800:mt-[0] max-[800px]:w-[60%] w-[70%] min-[1300px]:max-w-[400px] 1800:max-w-[550px]",
    hero_img : " w-[100%] mr-0 800:m-0"
}
    
function Hero(props) {

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



    return (
        <div className={style.container}>
            <div className={style.main}>
                
                <div className={style.title_div}>
                    <motion.h2 className={style.title}
                    initial={{ opacity:  0,translateY: 100 }} animate={{opacity: 1,translateY : 0}} transition={{ duration: 1.5}}
                    >
                        Unlocking<br></br>Possibilities<br></br>Through <span className={style.highlight_title}>code;</span>
                    </motion.h2>
                </div>
                <motion.div className={style.content_div}
                initial={{ opacity:  0,translateY: 100 }} animate={{opacity: 1,translateY : 0}} transition={{ duration: 2}}
                >
                    <p className={style.content}>Explore My Journey in CSE <br></br> & Development</p>
                </motion.div>
                <motion.div className={style.link_div}
                initial={{ opacity:  0,translateY: 100 }} animate={{opacity: 1,translateY : 0}} transition={{ duration: 2.5}}
                >
                    <motion.a href="https://github.com/sitanshu05" target='_blank' className={style.links}
                    whileHover={{
                        boxShadow : "0px 15px 8px -10px #F96900",
                        y : -4
                    }}
                    >
                        <Icon icon="mdi:github" color="#545454" width={screenSize.width <= 450 ? "40" : screenSize.width <= 1000 ? "60" : "75"} />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/sitanshu-hallad-9804a120b/" target='_blank' className={style.links}
                     whileHover={{
                        boxShadow : "0px 15px 8px -10px #F96900",
                        y : -4
                    }}
                    >
                    <Icon icon="mdi:linkedin" color="#545454" width={screenSize.width <= 450 ? "40" : screenSize.width <= 1000 ? "60" : "75"} />
                    </motion.a>
                    <motion.a href={resume} className={style.links} download="Sitanshu_Hallad.pdf"
                     whileHover={{
                        boxShadow : "0px 15px 8px -10px #F96900",
                        y : -4
                    }}
                    >
                    <Icon icon="mdi:resume" color="#545454" width={screenSize.width <= 450 ? "40" : screenSize.width <= 1000 ? "60" : "75"} />
                    </motion.a>
                </motion.div>
            </div>
            <motion.div className={style.hero_img_div}
                initial={{opacity :0, translateX : 15}}
                animate={{opacity:1,translateX : 0}}
                transition={{duration : 2 }}
            >
                <img src={hero} alt="" className={style.hero_img}/>
            </motion.div>
        </div>
    )
}

export default Hero