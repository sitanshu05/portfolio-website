import {React, useState,useEffect} from 'react'
import './Skillicon.css'
import { Icon } from '@iconify/react';
    
function Skillicon(props) {


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
    
        <Icon icon={props.icon} color="#545454" width={screenSize.width <= 450 ? "50" : screenSize.width <= 1000 ? "80" : "90"}/>
    
    )
}

export default Skillicon