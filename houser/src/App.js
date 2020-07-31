import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
import './App.css';
import Header from './Components/Header/Header';
import {connect} from 'react-redux';

function App(props) {
    
      return (
        <HashRouter>
          <div className='App'>
            <Header/>
            {routes}
          </div>

        </HashRouter>

      )
    } 

const mapStateToProps = state => state

export default connect(mapStateToProps)(App);


//no state, no methods