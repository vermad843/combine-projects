import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
       <Switch>
         <Route path = "/Drum">
            <Header/> 
            <h1>Drum</h1>
           <Footer/>
         </Route>
         <Route path = "/">
           <Header/>
           <Main/>
           <Footer/>
         </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;