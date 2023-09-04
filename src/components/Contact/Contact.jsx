import { React, useState, useEffect } from 'react'
import './Contact.css'
import { motion } from 'framer-motion'

const style = {
    container : "mx-[0.75rem] mb-[20rem] max-w-[1800px] w-full px-[1rem] 800:px-[3rem] 1000:px-[4rem]  1800:pb-[14rem]",
    title : "text-[1.5rem] font-code text-purple mb-[12rem] 800:text-[2rem] 1800:pb-[10rem]",
    highlight : " text-orange ",
    contact_div : "text-center",
    text : "text-[2rem] mb-[2rem] 800:text-[2.5rem] 1000:text-[3rem] 1000:pt-[6rem]",
    email : "font-code text-[1.25rem] 800:text-[1.5rem] 1000:text-[2rem] cursor-pointer"
}

    
function Contact(props) {

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
        <div className={style.container} id='contact'>
            <motion.div className={style.title}
              initial={{opacity:0,x:-50}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:1}}
              viewport={{once:true}}
            > &lt;<span className={style.highlight}>Contact</span>/&gt;
            
            </motion.div>

            <motion.div className={style.contact_div}
            initial={{opacity : 0, y : 100}}
            whileInView={{opacity:1,y:0}}
              transition={{duration:1}}
              viewport={{once:true}}
            >
                <p className={style.text}>
                Don’t be a stranger, Let’s <span className={style.highlight}>connect</span>
                </p>

            {

                screenSize.width <= 800 ?
                <motion.div className={style.email}
                    whileHover={{
                        color : "#F96900",
                        duration : 0.75,
                        y : -5,
                        transition: {
                            duration: 0.5, // Duration for view animation (e.g., 1.5 seconds)
                        }
                    }}
    
                    initial={{opacity : 0, y : 100}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1.75}}
                    viewport={{once:true}}
                    >
                        sitanshuhallad@gmail.com
                    </motion.div>
                    
                :
                    
                    <motion.a className={style.email} href='https://mail.google.com/mail/?view=cm&fs=1&to=sitanshuhallad@gmail.com' target="_blank" rel="noopener noreferrer"
                    whileHover={{
                        color : "#F96900",
                        duration : 0.75,
                        y : -5,
                        transition: {
                            duration: 0.5, // Duration for view animation (e.g., 1.5 seconds)
                        }
                    }}

                    initial={{opacity : 0, y : 100}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1.75}}
                    viewport={{once:true}}
                    >
                        sitanshuhallad@gmail.com
                    </motion.a>
                

               

            }
            </motion.div>

        </div>
    )
}

export default Contact