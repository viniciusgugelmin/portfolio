import { FC, PropsWithChildren } from "react";

interface IContextProviderProps extends PropsWithChildren {
  providers: FC<PropsWithChildren>[];
}

const ComposerFragment: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => <> {children} </>;

const providerReducer =
  (
    ParentProvider: FC<PropsWithChildren>,
    ChildProvider: FC<PropsWithChildren>
  ) =>
  ({ children }: PropsWithChildren): JSX.Element =>
    (
      <ParentProvider>
        <ChildProvider>{children}</ChildProvider>
      </ParentProvider>
    );

function ContextProvider({ children, providers }: IContextProviderProps) {
  const Providers = providers.reduce(providerReducer, ComposerFragment);

  return <Providers>{children}</Providers>;
}

export { ContextProvider };
