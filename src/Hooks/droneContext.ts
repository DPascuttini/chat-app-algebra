import { createStateContext } from '../utils/createStateContext';

const [useDroneContext, DroneProvider] = createStateContext<any | null>(null);
export { useDroneContext, DroneProvider };
