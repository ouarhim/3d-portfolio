import {
  About,
  Contact,
  Experience,
  School,
  Project,
  Hero,
  Tech,
  Navbar,
  StarsCanvas,
  Footer,
} from '../components'
const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>   
      <div className="relative z-0">
      <About />
      <School />
      <Experience />
      <Tech />  
      <Project />
      <Contact />
      <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default App
