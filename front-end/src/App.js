
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './components/views/pages/home';
import Contact from './components/views/pages/contact';
import About from './components/views/pages/about'
import Coachs from './components/views/pages/coachs';
import Coach from './components/views/pages/coach';

function App() {
  return (
    <div className="">
     <BrowserRouter>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/a-propos"><About/></Route>
          <Route exact path="/nos-coachs"><Coachs/></Route>
          <Route exact path="/coach"><Coach/></Route>
          <Route exact path="/contact"><Contact/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
