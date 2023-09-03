import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Badgefolio from './components/Badgefolio/Badgefolio'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className='flex flex-col w-full items-center'>
      <Header/>
      <Hero/>
      <Skills/>
      <Badgefolio/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
