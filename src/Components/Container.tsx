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
  const [drone] = useDroneContext();
  const [member, setMember] = useCurrentMemberContext();
  const [messages, setMessages] = useMessagesContext();

  if (drone) {
    if (!member?.id) {
      drone.on('open', (error: any) => {
        if (error) {
          return console.error(error);
        }
        //@ts-ignore
        setMember({ ...member, id: drone.clientId });
      });
    }

    const room = drone.subscribe(myRoom);
    //@ts-ignore
    room.on('data', (data) => {
      setMessages([...messages, { ...data }]);
    });
  }

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
