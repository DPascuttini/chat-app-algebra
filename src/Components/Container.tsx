import { useEffect } from 'react';

import { useCurrentMemberContext } from '../Hooks/CurrentMemberContext';
import { useDroneContext } from '../Hooks/droneContext';
import { useMessagesContext } from '../Hooks/messagesContext';
import { MessageType } from '../Types/Message';
import { Input } from './Input';
import { Login } from './Login';
import { Messages } from './Messages';

type Props = {};
const myRoom = 'PaskisRoom';
export const Container = (props: Props) => {
  const [drone, setDrone] = useDroneContext();
  const [member] = useCurrentMemberContext();
  const [messages, setMessages] = useMessagesContext();

  useEffect(() => {
    if (drone) {
      const room = drone.subscribe(myRoom);
      //@ts-ignore
      room.on('data', (data, member) => {
        setMessages([...messages, { member, text: data }]);
      });
    }
  }, [drone]);

  return member?.id ? (
    <>
      <Messages messages={messages} />
      <Input
        onSubmit={(message: MessageType) => {
          drone.publish({
            room: myRoom,
            message,
          });
        }}
      />
    </>
  ) : (
    <Login />
  );
};
