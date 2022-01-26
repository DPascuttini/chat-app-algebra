import { memberType } from '../Hooks/CurrentMemberContext';

export type MessageType = {
  member: memberType;
  text: string;
};
