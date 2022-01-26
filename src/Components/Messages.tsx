import { useState } from 'react';

import { MessageType } from '../Types/Message';
import { Message } from './Message';

type Props = { messages: MessageType[] };
export const Messages = (props: Props) => {
  return (
    <ul className="Messages-list">
      {props.messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </ul>
  );
};
