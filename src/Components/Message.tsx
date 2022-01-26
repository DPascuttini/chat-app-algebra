import { useCustomMember } from '../Hooks/CurrentMemberContext';
import { MessageType } from '../Types/Message';

type Props = { message: MessageType };

export const Message = (props: Props) => {
  const { message } = props;
  const { member, text } = message;
  const currentMember = useCustomMember();
  const messageFromMe = member.id === currentMember.id;
  const className = messageFromMe
    ? 'Messages-message currentMember'
    : 'Messages-message';
  return (
    <li className={className}>
      <span
        className="avatar"
        style={{ backgroundColor: member.clientData.color }}
      />
      <div className="Message-content">
        <div className="username">{member.clientData.username}</div>
        <div className="text">{text}</div>
      </div>
    </li>
  );
};
