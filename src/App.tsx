import { useState } from 'react';

import './App.css';
import { Messages } from './Components/Messages';
import { currentMemberContext } from './Hooks/CurrentMemberContext';
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
    <currentMemberContext.Provider value={{ id: '1' }}>
      <div className="App">Algebra Chat App</div>
      <Messages messages={messages} />
    </currentMemberContext.Provider>
  );
}

export default App;
