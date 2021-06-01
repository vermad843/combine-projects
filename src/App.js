import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Card from './Card';
import Button from './Button';
import Drums from './Drums';
import Contact from './Contact';
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
         <Route path = "/drum">
            <Header/> 
            <Drums/>
           <Footer/>
         </Route>
         <Route path = "/contact">
            <Header/> 
            <Contact/>
           <Footer/>
         </Route>
         <Route path = "/freedownloads">
            <Header/> 
            <h1>Free Downloads</h1>
           <Footer/>
         </Route>
         <Route path = "/">
           <Header/>
           <Main/>
           <Card/>
           <Button/>
           <Footer/>
         </Route>
       </Switch>
    </div>
  </Router>
  );
}

export default App;