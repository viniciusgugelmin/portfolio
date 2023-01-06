import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

const defaultContext = {
  loading: true,
  setLoading: (loading: boolean | ((currValue: boolean) => boolean)): void => {
    console.log("setLoading", loading);
  },
};

const LoadingContext = createContext({ ...defaultContext });
const useLoadingContext = () => useContext(LoadingContext);

interface LoadingProviderProps extends PropsWithChildren {}

function LoadingContextProvider({
  children,
}: LoadingProviderProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(defaultContext.loading);

  const contextReturn = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading]
  );

  return (
    <LoadingContext.Provider value={contextReturn}>
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContextProvider, useLoadingContext };
