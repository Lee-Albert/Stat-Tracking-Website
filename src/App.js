import React from 'react';
import './App.css';
import TableComponent from './TableComponent';
import LeagueData from './LeagueData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LeagueData></LeagueData>
      </header>
    </div>
  );
}

export default App;
