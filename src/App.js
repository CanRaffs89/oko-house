import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import NavbarToggle from "./components/NavbarToggle";

const App = () => {
  return (
    <>
      <div className="container">
        <NavbarToggle />
        <Navbar />
      </div>
      <Hero />
      <div className="container">
        <Section />
      </div>
    </>
  );
}

export default App;
