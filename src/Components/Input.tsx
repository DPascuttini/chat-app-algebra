import { useState } from 'react';

import { useCurrentMemberContext } from '../Hooks/CurrentMemberContext';
import { MessageType } from '../Types/Message';

type Props = {
  onSubmit: (m: MessageType) => void;
};

export const Input = (props: Props) => {
  const { onSubmit } = props;
  const [member] = useCurrentMemberContext();
  const [message, setMessage] = useState('');
  return (
    <div className="Input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (member) {
            onSubmit({
              text: message,
              member: member,
            });
            setMessage('');
          }
        }}
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="Enter your message and press ENTER"
        />
        <button>Send</button>
      </form>
    </div>
  );
};
