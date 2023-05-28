import React from 'react';
import { AllBoard } from './components/pages/allBoard';
import { Routes, Route } from "react-router-dom";
import { CreateThread } from './components/pages/createThread';
import { ThreadDetails } from './components/pages/threadDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        掲示板
      </header>
      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={ <AllBoard /> } />
        <Route path="/thread/new" element={ <CreateThread /> } />
        <Route path="/thread/:thread_id" element={ <ThreadDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
