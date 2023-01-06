type DelayDTO = {
  ms: number;
};

function delay({ ms }: DelayDTO): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { delay };