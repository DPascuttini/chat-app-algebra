import { useCurrentMemberContext } from '../Hooks/CurrentMemberContext';
import { useMessagesContext } from '../Hooks/messagesContext';
import { MessageType } from '../Types/Message';
import { Input } from './Input';
import { Login } from './Login';
import { Messages } from './Messages';

type Props = {};

export const Container = (props: Props) => {
  const [member] = useCurrentMemberContext();
  const [messages, setMessages] = useMessagesContext();

  return member ? (
    <>
      <Messages messages={messages} />
      <Input
        onSubmit={(message: MessageType) => setMessages([...messages, message])}
      />
    </>
  ) : (
    <Login />
  );
};
