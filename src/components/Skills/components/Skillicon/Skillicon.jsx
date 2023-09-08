import {React, useState,useEffect} from 'react'
import './Skillicon.css'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useScreenSize } from '../../../../utils/screenSize';


function Skillicon(props) {
    
    const screenSize = useScreenSize();

    return (
    
        <motion.span
        initial ={{opacity : 0, x : -5,y : -5}}
        whileInView={{opacity : 1, x : 0,y : 0}}
        transition={{duration:0.5 , delay : props.i * 0.2}}
        viewport={{ once: true }}
        >
            <Icon icon={props.icon}
                color="#545454"
                width={screenSize.width <= 450 ? "50" : screenSize.width <= 1200 ? "75" : "90"}
            />
        </motion.span>
    
    )
}

export default Skillicon