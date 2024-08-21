
import '../App.css'
import MainNavbar from '../components/nav/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";


function Home() {

  return (
    <div>
      <ScrollToHashElement />
      <MainNavbar />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default Home