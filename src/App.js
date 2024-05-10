import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-slate-100 scroll-smooth">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
