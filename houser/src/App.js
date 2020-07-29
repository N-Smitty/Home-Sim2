import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
import './App.css';
import Header from './Components/Header/Header';

function App(props) {
    
      return (
        <HashRouter>
          <div>
            <Header/>
            {routes}
          </div>

        </HashRouter>

      )
    } 

export default App;


//no state, no methods