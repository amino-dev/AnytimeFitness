
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './components/views/Home';
import Contact from './components/views/contact';
import About from './components/views/about';
import Coach from './components/views/coachs';

function App() {
  return (
    <div className="">
     <BrowserRouter>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/a-propos"><About/></Route>
          <Route exact path="/nos-coachs"><Coach/></Route>
          <Route exact path="/contact"><Contact/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
