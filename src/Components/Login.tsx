import { SketchPicker } from 'react-color';

type Props = {};

export const Login = (props: Props) => {
  return (
    <form>
      <input type="text" name="username" />
      <SketchPicker />
    </form>
  );
};
