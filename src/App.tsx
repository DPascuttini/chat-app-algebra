import { useState } from 'react';

import './App.css';
import { Container } from './Components/Container';
import { CurrentMemberProvider } from './Hooks/CurrentMemberContext';
import { DroneProvider } from './Hooks/droneContext';
import { MessagesContextProvider } from './Hooks/messagesContext';

function App() {
  return (
    <DroneProvider>
      <CurrentMemberProvider>
        <MessagesContextProvider>
          <div className="App-header">Algebra Chat App</div>
          <Container />
        </MessagesContextProvider>
      </CurrentMemberProvider>
    </DroneProvider>
  );
}

export default App;
