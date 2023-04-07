import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/Login';
import {useStateValue} from "./StateProvider"
import Signup from './components/Signup';
import Home from './components/Home';
import Main from './components/Main';
import Renter from './components/Renter';
import Rider from './components/Rider';
import Rented from './components/Rented';
import HomeMain from './components/HomeMain';
import Available from './components/Available';
import Accept from './components/Accept';
import Donate from './components/Donate';
import Donation from './components/Donation';
import Request from './components/Request';
import Requested from './components/Requested';
import Policy from './components/Policy';
function App() {
  // const [user,setuser]=useState(null); 
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  const [{user},dispatch]=useStateValue();
  return (
    //BEM naming convention 
    <div className="App">
    <Router>
      <Switch>
    <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/:username/main">
          <Main></Main>
        </Route>
        <Route path="/available">
          {/* <h1>Available</h1> */}
          <Available></Available>
        </Route>
        <Route path="/:username/donate">
          <Donate></Donate>
        </Route>
        <Route path="/:username/accept">
          <Accept></Accept>
        </Route>
        <Route path="/policy">
          <Policy></Policy>
        </Route>
        <Route path="/:username/request">
          <Request></Request>
        </Route>
        <Route path="/:username/donation">
          <Donation></Donation>
        </Route>
        <Route path="/:username/requested">
          <Requested></Requested>
        </Route>
      </Switch>
  </Router>
     
    </div>
  );
}

export default App;
