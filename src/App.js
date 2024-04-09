import React from 'react';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import About from './components/About.js';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark mode has been enabled!', 'success');
      document.title = 'TextEditor - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // or use a specific gray shade like '#808080'
      showAlert('Light mode has been enabled!', 'success');
      document.title = 'TextEditor - Light Mode';
    }
  };

  return (
    <div>
      <Router>
        <Navbar title="TextEditor - Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 mb-2">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
