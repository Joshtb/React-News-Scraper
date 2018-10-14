import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container} from './components/Grid'


import Main from "./pages/Main";



class App extends Component { 
  render() {
    return (
      <Router>
      <Container >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
         
        </Switch>
      </Container>
    </Router>
    );
  }
}

export default App;
