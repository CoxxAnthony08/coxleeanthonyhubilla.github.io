import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Projects from './projects'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
}

export default App;
