import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>This is a hat page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatPage} />
    </div>
  );
}

export default App;
