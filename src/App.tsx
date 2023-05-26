import React from 'react';
import { AllBoard } from './components/pages/allBoard';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        掲示板
      </header>
      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={ <AllBoard /> } />
      </Routes>
    </div>
  );
}

export default App;
