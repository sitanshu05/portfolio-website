import {React, useEffect,useState} from 'react'
import './Header.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
import { useScreenSize } from '../../utils/screenSize'


const style = {
    container : "flex items-center justify-between pl-[0.75rem] mt-[1rem] mb-[1rem] w-full min-[800px]:pl-[2rem] min-[1500px]:pl-[4rem] min-[1500px]:mt-[2rem] max-[550px]:mb-[3rem]",
    imgDiv : "w-[20%] min-w-[35px] max-w-[100px]",
    img: "max-w-[100%]",
    name_class : "text-[#545454]",
    title: "font-code pl-[1rem] pb-[0.5rem] border-acc_grey border-b-[1px] pr-[0.75rem] text-[1.2rem] 550:text-[1.75rem]",
    navbar: " flex font-code text-[1rem] border-b-[1px] border-acc_grey  gap-5 pb-[1rem] pr-[2rem] pl-[3rem]",
    nav_class : "  ",
    nav_item : "text-[1.25rem] 800:text-[1.25rem] 800:gap-[3rem] cursor-pointer ml-[0.75rem] pb-0",
    name : "text-orange ",
    dev : "text-purple",
    bracket : 'text-light_blue'
}
    
function Header(props) {

    const screenSize = useScreenSize();

    const hoverAnimation = {
        y: -5,
        transition: { duration: 0.4 }, // Fast transition on hover,
        // boxShadow : "0px 13px 7px -10px #F96900",
       

    };
    
    const defaultAnimation = {
        y: 0,
        transition: { duration: 0.6 }, // Slow transition when cursor leaves
    };


    let navbar = (
        <div>
            <nav className={style.nav_class}>
                <ul className={style.navbar}>
                    <motion.li whileHover={hoverAnimation} initial="false" animate={defaultAnimation} ><Link to="skills"  className={style.nav_item}><span className={style.name}>me</span>.<span className='text-purple'>skills</span><span className='text-light_blue'>()</span></Link></motion.li>
                    <motion.li whileHover={hoverAnimation} initial="false" animate={defaultAnimation}><Link to="about" className={style.nav_item}><span className={style.name}>me</span>.<span className='text-purple'>about</span><span className='text-light_blue'>()</span></Link></motion.li>
                    <motion.li whileHover={hoverAnimation} initial="false" animate={defaultAnimation}><Link to="projects" className={style.nav_item}><span className={style.name}>me</span>.<span className='text-purple'>projects</span><span className='text-light_blue'>()</span></Link></motion.li>
                    <motion.li whileHover={hoverAnimation} initial="false" animate={defaultAnimation}><Link to="experience" className={style.nav_item}><span className={style.name}>me</span>.<span className='text-purple'>experience</span><span className='text-light_blue'>()</span></Link></motion.li>
                    <motion.li whileHover={hoverAnimation} initial="false" animate={defaultAnimation}><Link to="contact" className={style.nav_item}><span className={style.name}>me</span>.<span className='text-purple'>contact</span><span className='text-light_blue'>()</span></Link></motion.li>
                    {/* <li><a href="" className={style.nav_item}><span className={style.name}>me</span>.<span className='text-purple'>lorem</span><span className='text-light_blue'>()</span></a></li> */}
                </ul>
            </nav>
        </div>
    )

    let content;

    if(screenSize.width >=1400){
        content = navbar;
    }
    else{
        content = (
            <h1 className={style.title}><span className={style.name}>SitanshuHallad</span>.<span className={style.dev}>dev</span><span className={style.bracket}>()</span></h1>
        )
    }

    return (
        <div className={style.container}>
            <motion.div className={style.imgDiv} initial={{y:50,opacity :0}} animate={{y:0,opacity:1}}  transition={{duration : 2}}>
                <img src={logo} alt="Logo" className={style.img} />
            </motion.div>
            <motion.div className={style.name_class}
            initial={{y:50,opacity :0}}
            animate={{y:0,opacity:1}}
            transition={{duration : 2}}
            >
                {content}
            </motion.div>
        </div>
    )
}

export default Header