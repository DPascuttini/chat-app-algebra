import React, { useContext } from 'react';

export type memberType = {
  id: string;
  clientData: { color: string; username: string };
};
export const currentMemberContext = React.createContext<memberType | null>({
  clientData: { color: 'red', username: 'pero' },
  id: '1',
});

export const useCustomMember = () => useContext(currentMemberContext);
