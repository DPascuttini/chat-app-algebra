import { GithubPicker } from 'react-color';

import { useCurrentMemberContext } from '../Hooks/CurrentMemberContext';
import { useDroneContext } from '../Hooks/droneContext';

type Props = {};

export const Login = (props: Props) => {
  const a = import.meta.env.VITE_CHANNEL_ID;
  const [member, setMember] = useCurrentMemberContext();
  const [drone, setDrone] = useDroneContext();
  return (
    <div className="login-box">
      <h2>Login</h2>

      <div className="user-box">
        <input
          type="text"
          name=""
          onChange={(e) => {
            setMember({
              clientData: {
                ...member?.clientData,
                username: e.target.value,
              },
            });
          }}
        />
        <label>Username</label>
      </div>
      <div className="color-picker">
        <GithubPicker
          onChangeComplete={(color) => {
            setMember({
              clientData: {
                ...member?.clientData,
                color: color.hex,
              },
            });
          }}
        />
      </div>
      <button
        className="submit"
        onClick={async (e) => {
          if (member?.clientData.username && member.clientData.color) {
            setDrone(
              //@ts-ignore
              await new Scaledrone(a, {
                data: member.clientData,
              })
            );
            //@ts-ignore
            drone.on('open', (error) => {
              if (error) {
                return console.error(error);
              }

              setMember({ ...member, id: drone.clientId });
              console.log(member);
            });
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};
