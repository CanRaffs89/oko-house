import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Designs from "./pages/Designs";
import Design from "./pages/Design";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
      </div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/designs' exact component={Designs}/>
        <Route path='/designs/:designId'component={Design}/>
        <Route path='/gallery' exact component={Gallery}/>
        <Route path='/faq' exact component={Faq}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
      <div className="container">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
