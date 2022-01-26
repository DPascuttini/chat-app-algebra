import React, { useContext } from 'react';

type currentMemberType = { id: string };
export const currentMemberContext = React.createContext<currentMemberType>({
  id: '1',
});

export const useCustomMember = () => useContext(currentMemberContext);
