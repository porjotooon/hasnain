import React from 'react'
import About from './pages/About'

import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/work">
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}



export default App;
