type ScrollToDTO = {
  elementId: `${string}`;
  targetId: `${string}`;
  duration?: number;
};

function scrollTo({ elementId, targetId, duration = 200 }: ScrollToDTO): void {
  const element = document.getElementById(elementId);
  const target = document.getElementById(targetId);

  if (!element || !target) return;

  const start = element.scrollTop;
  const change = target.offsetTop - start;
  const increment = 20;
  let currentTime = 0;
  const animateScroll = () => {
    currentTime += increment;
    window.scrollTo(0, easeInOutQuad({ currentTime, start, change, duration }));

    if (currentTime >= duration) return;

    setTimeout(animateScroll, increment);
  };
  animateScroll();
}

type EaseInOutQuadDTO = {
  currentTime: number;
  start: number;
  change: number;
  duration: number;
};

function easeInOutQuad({
  currentTime,
  start,
  change,
  duration,
}: EaseInOutQuadDTO): number {
  currentTime /= duration / 2;

  if (currentTime < 1) return (change / 2) * currentTime * currentTime + start;
  currentTime--;

  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
}

export { scrollTo };
