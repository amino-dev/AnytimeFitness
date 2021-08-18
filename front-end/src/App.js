
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './components/views/pages/home';
import Contact from './components/views/pages/contact';
import About from './components/views/pages/about'
import Coachs from './components/views/pages/coachs';
import Coach from './components/views/pages/coach';
import Connection from './components/views/pages/user-connection';
import RegisterUser from './components/views/pages/register-user';
import RegisterCoach from './components/views/pages/register-coach';
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import { isUserLoggedIn } from './redux/actions/userAuthActions';
import { isCoachLoggedIn } from './redux/actions/coachAuthActions';
import PrivatetRoute from "./HOC/privateRoute";
import ClientSpace from './components/views/pages/client-space';
import CoachConnection from './components/views/pages/coach-connection';
import DashboardCoach from './components/views/pages/dashboard-coach';

function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state =>state.auth)

  useEffect(()=>{
    if(!auth.authenticate)
   { dispatch(isUserLoggedIn())}
    },[auth.authenticate])

  const coachAuth = useSelector(state =>state.coachAuth)
  useEffect(()=>{
    if(!coachAuth.authenticate)
   { dispatch(isCoachLoggedIn())}
    },[coachAuth.authenticate])
  return (
    <div className="">
     <BrowserRouter>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/anytimeFitness/a-propos"><About/></Route>
          <Route exact path="/anytimeFitness/nos-coachs"><Coachs/></Route>
          <Route exact path="/anytimeFitness/coach"><Coach/></Route>
          <Route exact path="/anytimeFitness/contact"><Contact/></Route>
          <Route exact path="/anytimeFitness/connexion-coach"><CoachConnection/></Route>
          <Route exact path="/anytimeFitness/connexion-client"><Connection/></Route>
          <Route exact path="/anytimeFitness/inscri-utilisateur"><RegisterUser/></Route>
          <Route exact path="/anytimeFitness/inscri-coach"><RegisterCoach/></Route>
          <PrivatetRoute path="/anytimeFitness/espace-client" exact component={ClientSpace} />
          <PrivatetRoute path="/anytimeFitness/dashboard-coach" exact component={DashboardCoach} />
      </BrowserRouter>
    </div>
  );
}

export default App;
