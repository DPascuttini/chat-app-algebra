import { createStateContext } from 'react-use';

import { MessageType } from './../Types/Message';

export type memberType = {
  id: string;
  clientData: { color: string; username: string };
};
const [useMessagesContext, MessagesContextProvider] = createStateContext<
  MessageType[]
>([]);
export { useMessagesContext, MessagesContextProvider };
