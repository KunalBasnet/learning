import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router, Link} from 'react-router-dom'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserEffectApi from './UserEffectApi';
import reportWebVitals from './reportWebVitals';
import Pie from './Pie'


ReactDOM.render(
<React.StrictMode>
  <h1 className="text-center">PROJECT</h1>
  <div className="text-center"><Router>
  <button className="btn btn-sm"><Link exact to="/page2">NEXT PAGE</Link></button>
  <Route exact path="/" component={UserEffectApi}></Route>
 
  <Route exact path="/page2" component={Pie}></Route>
  </Router></div>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
