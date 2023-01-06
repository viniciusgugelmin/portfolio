import { PropsWithChildren } from "react";

interface MainProps extends PropsWithChildren {}

function Main({ children }: MainProps): JSX.Element {
  return <main className="px-5 lg:px-12 -mt-28">{children}</main>;
}

export { Main };
