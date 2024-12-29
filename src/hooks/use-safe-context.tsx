import { Context, useContext } from "react";

const useSafeContext = <T,>(context: Context<T>): NonNullable<T> => {
  const contextState = useContext(context);
  if (contextState == null) {
    throw Error(`The context's Provider is not in the parent`);
  }
  return contextState as NonNullable<T>;
};

export default useSafeContext;
