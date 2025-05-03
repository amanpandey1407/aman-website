import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const Homepage = () => {
    return (
      <main>
        <Navbar/>
        <Home/>
        <About />
        <Projects />
        <Contact />
        {/* Add more sections here like <Services />, <Experience />, etc. */}
      </main>
    );
  };
  
  export default Homepage;