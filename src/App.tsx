import React from 'react';
import { AllBoard } from './components/pages/allBoard';
import { Routes, Route } from "react-router-dom";
import { CreateThread } from './components/pages/createThread';
import { ThreadDetails } from './components/pages/threadDetails';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="py-4 bg-slate-50 shadow-sm text-lg font-bold ml-10">
        <Link to="/">
        掲示板
        </Link>
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
