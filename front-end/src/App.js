
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
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
import { isAdminLoggedIn } from './redux/actions/adminAuthActions';
import UserRoute from "./PrivateRoutes/userRoute";
import CoachRoute from "./PrivateRoutes/coachRoute";
import AdminRoute from "./PrivateRoutes/adminRoute";
import ClientSpace from './components/views/pages/client-space';
import CoachConnection from './components/views/pages/coach-connection';
import AdminConnection from './components/views/pages/admin-connection'
import DashboardCoach from './components/views/pages/dashboard-coach';
import DashboardAdmin from './components/views/pages/dashboard-admin';

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

  const adminAuth = useSelector(state =>state.adminAuth)
  useEffect(()=>{
    if(!adminAuth.authenticate)
   { dispatch(isAdminLoggedIn())}
    },[adminAuth.authenticate])
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/anytimeFitness/a-propos" component={About}/>
          <Route exact path="/anytimeFitness/nos-coachs" component={Coachs}/>
          <Route exact path="/coach/:id" component={Coach}/>
          <Route exact path="/anytimeFitness/contact" component={Contact}/>
          <Route exact path="/anytimeFitness/connexion-coach" component={CoachConnection} />
          <Route exact path="/anytimeFitness/connexion-client" component={Connection}/>
          <Route exact path="/anytimeFitness/connexion-admin" component={AdminConnection}/>
          <Route exact path="/anytimeFitness/inscri-utilisateur" component={RegisterUser}/>
          <Route exact path="/anytimeFitness/inscri-coach" component={RegisterCoach}/>
          <AdminRoute path="/anytimeFitness/dashboard-admin" exact component={DashboardAdmin}/>
          <UserRoute path="/anytimeFitness/espace-client" exact component={ClientSpace} />
          <CoachRoute path="/anytimeFitness/dashboard-coach" exact component={DashboardCoach} />
        </Switch>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
