import React from 'react';
import './App.css';
import './components/Home';
import particlesConfig from './particles/particles.json';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
//Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Contact from './components/Contact'
function App(props) {
  
  React.useEffect(() => {
    /*Create the element for the canvas that will be appended by particles function */
    let body = document.getElementsByTagName('body')[0];
    let particlesElem = document.createElement('div');
    particlesElem.id = 'particles-js';
    body.append(particlesElem);

    /*Add configurtion file to canvas here*/
    //grab the function
    const particlesJS = window.particlesJS;
    ///apply the function with config
    particlesJS(particlesConfig);
  }, []);
  
React.useEffect(()=>{
  const navItem = document.querySelectorAll('.navItem');
  const currentPathname = window.location.pathname.replace('/','');
  navItem.forEach((item)=>{
    if(item.id === currentPathname){
      item.classList.add('withBorder')
    }
    if(item.id !== currentPathname){
      item.classList.remove('withBorder')
    }
  })
},[])
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/play" component={Game} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
