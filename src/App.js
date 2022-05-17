import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#112B3C';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#F2F2F2';
    }
  }

  return (
    <div className="App">
      <Navbar title="Text-Magic" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter text to analyze..." />
      </div>
    </div>
  );
}

export default App;
