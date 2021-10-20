import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MiComponente from './vistas/formulario/MiComponente';
import OtroComponente from './vistas/OtroComponente';
import PersonaMaterial from './vistas/PersonaMaterial';


function App() {


  function Navbar() {
    return (
      <nav className="topnav">
        <Link to="/otro">Integrantes</Link>
        <Link to="/personas">Personas</Link>
        {/* <Link to="/personas2">Persona 2</Link> */}
        
      </nav>
    )
  }

  return (
    <Router>
       <Navbar />
    <Switch>
      <Route  path="/otro" component={OtroComponente} />
      <Route path="/personas" component={MiComponente} />
      <Route path="/personas2" component={PersonaMaterial} />
    </Switch>
  </Router>
  );

}

export default App;
