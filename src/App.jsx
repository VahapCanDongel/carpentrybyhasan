import Navigation from "./components/Navigation"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Projects from "./sections/Projects"
import Services from "./sections/Services"
import Testimonials from "./sections/Testimonials"
import Welcome from "./sections/Welcome"

function App() {


  return (
    <div className="flex flex-col w-full items-center sm:w-full">
      <div className="flex flex-col w-full items-center  sm:w-full">
        <Navigation />
        <Welcome />
        <About />
        <Services />
        <Testimonials />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
