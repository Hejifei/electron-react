import React from 'react';
import logo from './logo.svg';
import './App.css';
// const { ipcRenderer } = require('electron')

const ipcRenderer = window.require("electron").ipcRenderer;



// 异步回复
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(`main Process says: ${arg}`) // prints "pong"
})

// 同步发送信息
ipcRenderer.send('asynchronous-message', 'hi')

function App() {
  const sendMessage = () => {
    console.log(`main process repeat: 
      ${ipcRenderer.sendSync('synchronous-message', 'Hey, are you main process?')}
    `) // prints "pong"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, boy!
        </p>
        <button label="close" onClick={sendMessage} >
          call main process
        </button>
      </header>
    </div>
  );
}

export default App;
