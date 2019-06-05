import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Navbar from './components/Navbar'
import AdminLogin from './components/AdminLogin'
import AddArticle from './components/AddArticle.js'
import Articles from "./components/Articles"
import registerServiceWorker from './registerServiceWorker';

const Root = ()=>{
  return(
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={AdminLogin}/>
            <Route exact path='/admin' component={Articles}/>
            <Route exact path='/add' component={AddArticle}/>
          </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<Root/>,document.getElementById('root'));
registerServiceWorker();
