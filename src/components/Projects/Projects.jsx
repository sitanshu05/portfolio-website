import React from 'react'
import './Projects.css'
import Projcard from './components/Projcard/Projcard'
import reactcli from '../../assets/CLI.png'
import paper from '../../assets/paper.png'
import detweb from '../../assets/detwebsite.png'
import elpdi from '../../assets/elpdi.png'
import { motion} from 'framer-motion'
const style = {
    container : "mx-[0.75rem] mb-[5rem] w-full max-w-[1800px] px-[1rem] 800:px-[3rem] 1000:px-[4rem]",
    title : "text-[1.5rem] font-code text-purple mb-[3rem] 800:text-[2rem]",
    highlight : " text-orange",
    cards : "flex flex-col justify-center  800:flex-row 800:flex-wrap  "
}



    
function Projects(props) {
    return (
        <div className={style.container} id="projects">
            <motion.div className={style.title}  
             initial={{opacity : 0, translateX : -50}}
            whileInView={{opacity:1 , translateX:0}}
            viewport={{ once: true }}
            transition={{duration : 1}}
            > &lt;<span className={style.highlight}>Projects</span>/&gt;</motion.div>

            <div className={style.cards}>
                <Projcard
                    icon="mdi:github" 
                    image={reactcli}
                    title = "React CLI"
                    description = "A command line interface to help you manage your react project folders and routing, (Thank you Angular)."
                    link = "https://github.com/sitanshu05/react-cli"
                />
                
                <Projcard
                    icon="gg:website" 
                    image={detweb}
                    title = "Website for DET TMC"
                    description = "Led a team of four in developing DET TMC's website, enhancing its online presence and functionality."
                    link = "https://dettoastmasters.org"
                />

                <Projcard
                    icon="teenyicons:pdf-solid" 
                    image={paper}
                    title = "Survey on Filter Pruning"
                    description = "A Survey on Filter Pruning Techniques for Optimization of Deep Neural Networks"
                    link = "https://ieeexplore.ieee.org/abstract/document/9987264?casa_token=t_TKJgeYvB8AAAAA:S2BqCwsxEpOglGoZSUd2Ym-NfqVkfqqIpyLqtchDE-0mJHffG9mMhjcpccyl9d6HA2dqi_H9Gw"
                />

                <Projcard
                    icon="teenyicons:pdf-solid" 
                    image={elpdi}
                    title = "ELPDI"
                    description = "Emsemble learning for pulmonary disease identification using auscultation"
                    link = ""
                />
               
            </div>
        </div>
    )
}

export default Projects