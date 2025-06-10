export default function animateClearedRows(rowCount, containerRef) {
  if (!containerRef.current || rowCount === 0) return;

  const container = containerRef.current;
  const pop = document.createElement('div');
  pop.className = `row-clear-pop pop-${rowCount}`;
  pop.innerText = `+${rowCount}`;
  container.appendChild(pop);

  setTimeout(() => {
    container.removeChild(pop);
  }, 600); // match with CSS animation duration
}
