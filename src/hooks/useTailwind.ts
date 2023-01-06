function useTailwind() {
  const use = async () => {
    // @ts-ignore
    (await import("tw-elements")).default;
  };
  use();

  return null;
}

export { useTailwind };