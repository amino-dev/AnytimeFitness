
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './components/views/pages/home';
import Contact from './components/views/pages/contact';
import About from './components/views/pages/about'
import Coachs from './components/views/pages/coachs';
import Coach from './components/views/pages/coach';
import Connection from './components/views/pages/connection';
import RegisterUser from './components/views/pages/register-user';
import RegisterCoach from './components/views/pages/register-coach';

function App() {
  return (
    <div className="">
     <BrowserRouter>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/anytimeFitness/a-propos"><About/></Route>
          <Route exact path="/anytimeFitness/nos-coachs"><Coachs/></Route>
          <Route exact path="/anytimeFitness/coach"><Coach/></Route>
          <Route exact path="/anytimeFitness/contact"><Contact/></Route>
          <Route exact path="/anytimeFitness/connexion"><Connection/></Route>
          <Route exact path="/anytimeFitness/inscri-utilisateur"><RegisterUser/></Route>
          <Route exact path="/anytimeFitness/inscri-coach"><RegisterCoach/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
