import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

function webPage() {
  return (
    <div className="container">
      <Navbar />
      <App />
    </div>
  );
}

root.render(webPage());
