export type MessageType = {
  member: { id: string; clientData: { color: string; username: string } };
  text: string;
};
