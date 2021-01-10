import Header from './components/Header';
// import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListView from './components/ListView'

import './App.css';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path="/ListView" compontent={ListView} />
      </Switch>
    </Router>
    </>
   
  );
}

export default App;
