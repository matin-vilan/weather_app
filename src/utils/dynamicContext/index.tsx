import useSafeContext from "@hooks/use-safe-context";
import React from "react";

/**
 * context provider
 */
export const createDynamicContext = <TProps extends object>() => {
  const Context = React.createContext<TProps | null>(null);

  const useContext = () => {
    return useSafeContext(Context);
  };

  const ContextProvider = ({
    children,
    ...props
  }: { children: React.ReactElement | React.ReactElement[] } & TProps) => (
    <Context.Provider value={props as TProps}>{children}</Context.Provider>
  );

  const withContextProvider = (Component: React.FunctionComponent<TProps>) => {
    const WithContextProvider = (props: TProps) => {
      return (
        <ContextProvider {...props}>
          <Component {...props} />
        </ContextProvider>
      );
    };

    // displayName
    const componentName =
      Component.displayName || Component.name || "Component";
    WithContextProvider.displayName = `withContextProvider(${componentName})`;

    return WithContextProvider;
  };

  return { useContext, Context, ContextProvider, withContextProvider };
};
