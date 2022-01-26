import { createStateContext } from 'react-use';

export type memberType = {
  id: string;
  clientData: { color: string; username: string };
};
const [useCurrentMemberContext, CurrentMemberProvider] =
  createStateContext<memberType | null>(null);
export { useCurrentMemberContext, CurrentMemberProvider };
