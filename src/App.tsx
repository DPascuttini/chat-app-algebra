import { useState } from 'react';

import './App.css';
import { Container } from './Components/Container';
import { CurrentMemberProvider } from './Hooks/CurrentMemberContext';
import { MessagesContextProvider } from './Hooks/messagesContext';
import { MessageType } from './Types/Message';

const testMsgs = [
  {
    member: {
      id: '1',
      clientData: { color: 'red', username: 'debil' },
    },
    text: 'hello',
  },
  {
    member: {
      id: '2',
      clientData: { color: 'pink', username: 'debil' },
    },
    text: 'hello back',
  },
];

function App() {
  const [messages, setMessages] = useState<MessageType[]>(testMsgs);
  return (
    <CurrentMemberProvider>
      <MessagesContextProvider>
        <div className="App">Algebra Chat App</div>
        <Container />
      </MessagesContextProvider>
    </CurrentMemberProvider>
  );
}

export default App;
