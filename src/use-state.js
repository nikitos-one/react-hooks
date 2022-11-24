import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  )
}

const HookSwitcher = () => {

  const [ color, setColor ] = useState('white');
  const [ fontSize, setFontSize ] = useState(14);

  return (
    <div style={{
      padding: '10px',
      backgroundColor: color,
      fontSize: `${fontSize}px`
    }}>
      <div>Hello World</div>
      <button onClick={ () => setColor('gray') }>Dark</button>
      <button onClick={ () => setColor('white') }>Light</button>
      <button onClick={ () => setFontSize((prevState) => prevState + 2) }>+</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
