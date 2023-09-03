import {React ,useEffect, useState } from 'react'
import './Badgefolio.css'
import cpp from '../../assets/cppbad.png'
import cbad from '../../assets/cbad.png'
import psbad from '../../assets/psbad.png'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import ProgressBar from "@ramonak/react-progress-bar";
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion'
import axios from 'axios'

const style = {
    container : " flex flex-col mx-[0.75rem] mb-[3rem] w-full max-w-[1800px] px-[1rem] 800:px-[3rem] 1000:px-[4rem]",
    title : "text-[1.5rem] font-code text-purple mb-[3rem] 800:text-[2rem] 550:mb-[8rem] 1000:mb-[13rem]",
    highlight : " text-orange",
    badges_container: "flex flex-col items-center justify-between max-w-[550px]  gap-10 1000:gap-5 w-full self-center min-[900px]:flex-row min-[900px]:max-w-[1800px] 550:mb-[8rem] 1000:mb-[13rem]",
    row : "w-full flex justify-around gap-5",
    badges : "w-[40%] max-w-[200px] min-[1000px]:w-[80%] bg-[#1C1C1C] p-[0.5rem] rounded-lg 550:p-[1rem]",
    progressBar : "w-[40%] max-w-[200px] min-[1000px]:w-[80%] bg-[#1C1C1C] p-[0.5rem] rounded-lg 550:p-[1rem]",
    strBar : "w-[100%] max-w-[250px] min-[1000px]:w-[100%] bg-[#1C1C1C]  rounded-lg  flex flex-col 550:gap-2"

}
    
function Badgefolio(props) {

    const [leetcode, setLeetcode] = useState({
        easy : 0,
        medium: 0,
        hard : 0,
        total : 0,
        totEasy : 0,
        totMedium : 0,
        totHard : 0

    })
    const getLeetcode = () =>{
        axios.get("https://leetcode-stats-api.herokuapp.com/sitanshuhallad").then((response)=>{
            console.log(response)
            const obj = {
                easy : response.data.easySolved,
                medium : response.data.mediumSolved,
                hard : response.data.hardSolved,
                total : response.data.easySolved + response.data.mediumSolved + response.data.hardSolved,
                totEasy : response.data.totalEasy,
                totMedium : response.data.totalMedium,
                totHard : response.data.totalHard
            }

            console.log(obj);
            setLeetcode(obj);
        })
    }

    useEffect(() => {
        getLeetcode();
      }, []);


      const [isHovered, setIsHovered] = useState(false);

        const handleMouseEnter = () => {
            console.log("enter");
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            console.log("leave")
            setIsHovered(false);
        };




    return (
        <div className={style.container}>
            <motion.div className={style.title}
            initial={{opacity : 0, translateX : -50}}
            whileInView={{opacity:1 , translateX:0}}
            transition={{duration : 1}}
            viewport={{ once: true }}
            > &lt;<span className={style.highlight}>Badgefolio</span>/&gt;</motion.div>

            <motion.div className={style.badges_container}
            initial ={{opacity : 0, y : 100}}
            whileInView={{opacity : 1,y:0}}
            transition = {{duration :1}}
            viewport={{ once: true }}
            >
                    <div className={style.row}>
                        <img src={cpp} alt="" className={style.badges} />
                        <img src={cbad} alt="" className={style.badges} />
                    </div>
                    <div className={style.row}>
                        <img src={psbad} alt="" className={style.badges} />

                        <div className={style.progressBar}>

                            <CircularProgressbarWithChildren
                                minValue={0}
                                maxValue={2838}
                                value={106}
                                strokeWidth={3}
                                styles={buildStyles({
                                    pathColor : "#EFBF37",
                                    trailColor : "#545454"
                                })}>
                                    <div>
                                        <p style={{fontSize : '2rem', fontWeight :'bold'}}>{leetcode.total}</p>
                                    </div>
                                    <div style={{fontSize : '0.7rem',fontFamily :['Roboto', 'sans-serif'],fontWeight :'regular'}}>solved on LeetCode</div>

                            </CircularProgressbarWithChildren>
                            
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Badgefolio