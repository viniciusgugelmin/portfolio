import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const defaultContext = {
  width: 0,
  height: 0,
  isSmall: false,
  isMedium: false,
  isLarge: true,
};

const WindowSizeContext = createContext({ ...defaultContext });
const useWindowSizeContext = () => useContext(WindowSizeContext);

interface IWindowSizeProviderProps extends PropsWithChildren {}

function WindowSizeContextProvider({
  children,
}: IWindowSizeProviderProps): JSX.Element {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: defaultContext.width,
    height: defaultContext.height,
  });
  const [isSmall, setIsSmall] = useState<boolean>(defaultContext.isSmall);
  const [isMedium, setIsMedium] = useState<boolean>(defaultContext.isMedium);
  const [isLarge, setIsLarge] = useState<boolean>(defaultContext.isLarge);
  const contextReturn = useMemo(
    () => ({
      ...windowSize,
      setWindowSize,
      isSmall,
      isMedium,
      isLarge,
    }),
    [windowSize, setWindowSize, isSmall, isMedium, isLarge]
  );

  function handleResize(): void {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setIsSmall(window.innerWidth < 768);
    setIsMedium(window.innerWidth >= 768 && window.innerWidth < 1024);
    setIsLarge(window.innerWidth >= 1024);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={contextReturn}>
      {children}
    </WindowSizeContext.Provider>
  );
}

export { WindowSizeContextProvider, useWindowSizeContext };
