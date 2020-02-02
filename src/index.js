import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV !== 'production') {
  // Import axe and warn
  (async () => {
    const axe = await import('react-axe');
    axe.default(React, ReactDOM, 1000);
  })();
}
