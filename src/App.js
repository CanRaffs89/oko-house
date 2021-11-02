import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarToggle from "./components/NavbarToggle";
import Home from "./pages/Home";
import Designs from "./pages/Designs";

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavbarToggle />
        <Navbar />
      </div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/designs' exact component={Designs}/>
      </Switch>
    </Router>
  );
}

export default App;
