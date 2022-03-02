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
          <header className="App-header">Algebra Chat App</header>
          <div className="container">
            <Container />
          </div>
        </MessagesContextProvider>
      </CurrentMemberProvider>
    </DroneProvider>
  );
}

export default App;
