import React from 'react'
import './Experience.css'
import det from '../../assets/det.png'
import dsc from '../../assets/dsc.png'
import kle from '../../assets/kle.png'
import { motion } from 'framer-motion'


const style = {
    container : "mx-[4rem] mb-[2rem] w-full max-w-[1800px] px-[1rem] 800:px-[3rem] 1000:px-[4rem] flex flex-col justify-center items-center",
    titleMain : "text-[1.5rem] font-code text-purple mb-[3rem] 800:text-[2rem] self-start",
    highlight : "text-orange",
    exp_div : " flex flex-col items-center justify-between gap-[4rem] max-w-[1500px]",
    exp : "flex flex-row items-center justify-between text-center mb-[2rem] 800:flex-row 800:mx-[1rem] w-full 800:justify-between 800:mb-[5rem] 800:mt-[3rem]",
    exp_content : "",
    img : "max-w-[100%] w-[40%] mb-[1.5rem] 800:w-[40%] ",
    title : "text-[1.125rem] min-[400px]:text-[2rem] 1000:text-[2.5rem]",
    position : "text-[1.1rem] opacity-80 min-[400px]:text-[1.75rem] 1000:text-[2rem]",
    time : "opacity-75 text-[0.85rem] min-[400px]:text-[1.25rem] 1000:text-[1.5rem]"

}
    
function Experience(props) {
    return (
        <div className={style.container} id="experience">
            <motion.div className={style.titleMain}
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            > &lt;<span className={style.highlight}>Experience</span>/&gt;</motion.div>

            <div className={style.exp_div}>
                <motion.div className={style.exp}
                initial={{opacity : 0, x : -20}}
                whileInView={{opacity : 1, x : 0}}
                transition={{duration:1.5}}
                viewport={{once:true}}
                >
                    <img src={det} alt="" className={style.img}/>

                    <div className={style.exp_content}>
                        <h3 className={style.title}>
                            DET Toastmasters Club
                        </h3>
                        <h4 className={style.position}>
                            President
                        </h4>
                        <p className={style.time}>
                        Jan 2023 - Jun 2023
                        </p>
                    </div>
                </motion.div>

                <motion.div className={style.exp}
                initial={{opacity : 0, x : 15}}
                whileInView={{opacity : 1, x : 0}}
                transition={{duration:1.5}}
                viewport={{once:true}}
                >
                    <img src={dsc} alt="" className={"even " + style.img}/>
                    <div className={style.exp_content}>
                        <h3 className={style.title}>
                        KLE Tech Developers Student Club
                        </h3>
                        <h4 className={style.position}>
                        Club Lead
                        </h4>
                        <p className={style.time}>
                        Aug 2022 - Aug 2023
                        </p>
                    </div>
                </motion.div>
                <motion.div className={style.exp}
                initial={{opacity : 0, x : -20}}
                whileInView={{opacity : 1, x : 0}}
                transition={{duration:1.5}}
                viewport={{once:true}}
                >
                    <img src={kle} alt="" className={style.img}/>
                    <div className={style.exp_content}>
                        <h3 className={style.title}>
                            KLE Tech AI and Data Analytics Lab
                        </h3>
                        <h4 className={style.position}>
                        Research Student
                        </h4>
                        <p className={style.time}>
                            Jun 2022 - Jun 2023
                        </p>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Experience