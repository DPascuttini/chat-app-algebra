// stole from https://github.com/streamich/react-use/blob/master/src/factory/createStateContext.ts#L1
import {
  Attributes,
  createContext,
  createElement,
  Dispatch,
  ProviderProps,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export const createStateContext = <T>(defaultInitialValue: T) => {
  const context = createContext<
    [T, React.Dispatch<React.SetStateAction<T>>] | undefined
  >(undefined);
  const providerFactory = (
    props:
      | (Attributes &
          ProviderProps<[T, Dispatch<SetStateAction<T>>] | undefined>)
      | null
      | undefined,
    children: {} | null | undefined
  ) => createElement(context.Provider, props, children);

  const StateProvider: React.FC<{ initialValue?: T }> = ({
    children,
    initialValue,
  }) => {
    const state = useState<T>(
      initialValue !== undefined ? initialValue : defaultInitialValue
    );
    return providerFactory({ value: state }, children);
  };

  const useStateContext = () => {
    const state = useContext(context);
    if (state == null) {
      throw new Error(`useStateContext must be used inside a StateProvider.`);
    }
    return state;
  };

  return [useStateContext, StateProvider, context] as const;
};
