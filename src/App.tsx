import React from 'react';
import { AllBoard } from './components/pages/allBoard';
import { Routes, Route } from "react-router-dom";
import { CreateThread } from './components/pages/createThread';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        掲示板
      </header>
      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={ <AllBoard /> } />
        <Route path="/thread/new" element={ <CreateThread /> } />
      </Routes>
    </div>
  );
}

export default App;
