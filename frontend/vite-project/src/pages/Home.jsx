import About from "../components/About";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Rsection from "../components/Rsection";
import Herosection from "../components/Herosection";
import "../styles/global.css"
const Home = () => {
  return (
    <>
      <Header />
      <Herosection />
      <About />
      <Rsection />
      <Gallery />
      <Contact />
    </>
  )
}

export default Home;
