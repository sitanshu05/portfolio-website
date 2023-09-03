import React from 'react'
import './Projcard.css'
import { Icon } from '@iconify/react'
import {motion} from 'framer-motion'

const style = {
    container : "mx-[0.5rem] mb-[2rem]",
    card : "max-w-[450px] w-full",
    image: "rounded-t-lg",
    content : "bg-[#252525] px-[0.5rem] flex flex-col gap-2 justify-around items-start",
    title : "text-[1.5rem]",
    description : "text-[1.1rem]",
    link : "self-end mr-[1.5rem] mb-[1rem] cursor-pointer"


}
    
function Projcard(props) {

    const Variants = {
        offscreen: {
          y: 150
        },
        onscreen: {
          y: 0,
          transition: {
            type: "tween",
            bounce: 0.2,
            duration: 0.5
          }
        }
      };

      

    return (
        <motion.div className={style.container}
        initial={Variants.offscreen}
        whileInView={Variants.onscreen}
        viewport={{ once: true }}
        >
            <div className={style.card}>
                <img src={props.image} alt="" className={style.image}/>
                <div className={style.content}>
                    <h4 className={style.title}>{props.title}</h4>
                    <p className={style.description}>
                        {props.description}
                    </p>
                    <motion.a href={props.link} className={style.link} target='_blank'
                    whileHover={{
                        boxShadow : "0px 15px 8px -5px #F96900",
                        y : -4}}
                    >
                        <Icon icon={props.icon} color="#545454" width="40" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )
}

export default Projcard