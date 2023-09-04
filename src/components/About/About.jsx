import {React,useState,useEffect} from 'react'
import './About.css'
import car from '../../assets/car.png'
import {motion} from 'framer-motion'

const style = {
    container : "mx-[0.75rem] mb-[4rem] w-full max-w-[1800px] px-[1rem] 800:px-[3rem] 1000:px-[4rem]",
    title : "text-[1.5rem] font-code text-purple mb-[3rem] 800:text-[2rem]",
    highlight : " text-orange",
    main_div : "flex flex-col min-[1000px]:flex-row justify-evenly",
    content_div : "pl-[1rem] pr-[1rem] relative z-10 max-[1000px]:max-w-[700px] min-[1000px]:w-[80%] min-[1000px]:max-w-[1000px]",
    content1: "text-[1.1rem] font-roboto mb-[1rem] 550:text-[1.325rem] min-[1500px]:text-[1.5rem] opacity-[80%]",
    content2: "text-[1.1rem] font-roboto mb-[1rem] 550:text-[1.325rem] min-[1500px]:text-[1.5rem] opacity-[80%]",
    image_div :"z-0 w-full max-w-[600px] relative self-end grow min-[1000px]:max-w-[1000px]",
    image : "blur-[4px] mt-[-6rem] right-0 w-full min-[900px]:blur-[0] "

}
    
function About(props) {

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

  let content1,content2;



   if(screenSize.width <= 700){
    content1 = "Technology and engineering have always fascinated me, from social networks to RC cars. This fascination introduced me to the world of computer science, where I wish to find gaps in societies and industries that can be bridged with software."
    content2 = "I love to be engaged in every step of building a product, from design to launch and the business of it all. I'm always the lookout for the next challenge that can improve my skillset and abilities."
   }
   else{
    content1 = 'Technology and engineering have always fascinated me, from social networks to RC cars. I was especially captivated by the attention to detail in components that, when put together, seem so "smart". This fascination introduced me to the world of computer science, where I wish to find gaps in societies and industries that can be bridged with software.'
    content2 = "I love to be engaged in every step of building a product, from design to launch and the business of it all. I'm always open to leadership opportunities and on the lookout for the next challenge that can improve my skillset and abilities."
   }

    return (
        <div className={style.container} id="about">
            <motion.div className={style.title}  
             initial={{opacity : 0, translateX : -50}}
            whileInView={{opacity:1 , translateX:0}}
            transition={{duration : 1}}
            viewport={{ once: true }}
            > &lt;<span className={style.highlight}>About</span>/&gt;</motion.div>

            <div className={style.main_div}>
                
                <motion.div className={style.content_div}
                initial={{opacity : 0, translateX : -50}}
                whileInView={{opacity:1 , translateX:0}}
                viewport={{ once: true }}
                transition={{duration : 1}}
                >
                    <p className={style.content1}>
                        {content1}
                    </p>
                    <p className={style.content2}>
                        {content2}
                    </p>
                </motion.div>
                <motion.div className={style.image_div}
                initial={{opacity : 0, translateX : 10}}
                whileInView={{opacity:1 , translateX:0}}
                transition={{duration : 2}}
                viewport={{ once: true }}
                >
                    <img src={car} alt="" className={style.image} />
                </motion.div>

            </div>
        </div>
    )
}

export default About