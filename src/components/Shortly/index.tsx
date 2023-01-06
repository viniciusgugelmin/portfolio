import { PropsWithChildren, useEffect, useRef, useState } from "react";
import texts from "../../data/texts.json";
import { useLanguageContext } from "../../context/Language";

interface ShortlyProps extends PropsWithChildren {
  isStarted: boolean;
  setIsStarted: (isStarted: boolean) => void;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

function Shortly({
  isStarted,
  setIsStarted,
  open,
  setOpen,
  children,
}: ShortlyProps): JSX.Element {
  const shortly = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const { language } = useLanguageContext();

  const contentStyle = isStarted ? { maxHeight: open ? maxHeight : 200 } : {};
  const buttonText = open
    ? texts["see-less"][language]
    : texts["see-more"][language];

  useEffect(() => {
    if (isStarted) return;

    setMaxHeight((shortly.current as unknown as HTMLElement).offsetHeight);
    setIsStarted(true);
  }, []);

  return (
    <>
      <div
        ref={shortly}
        className={`shortly${open ? ` shortly-open` : ""}`}
        style={contentStyle}
      >
        {children}
      </div>
      <button className="shortly-button" onClick={() => setOpen(!open)}>
        {buttonText}
      </button>
    </>
  );
}

export { Shortly };
