import { useRef } from 'react';

export default function RepeatButton({ onClick, children, ...props }) {
  const intervalRef = useRef();

  const handlePointerDown = (e) => {
    e.preventDefault();
    onClick();
    intervalRef.current = setInterval(onClick, 100); // adjust repeat rate as needed
  };

  const clear = () => clearInterval(intervalRef.current);

  return (
    <button
      {...props}
      tabIndex={-1}
      style={{
        userSelect: 'none',
        touchAction: 'manipulation',
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
        ...props.style,
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={clear}
      onPointerLeave={clear}
      onPointerCancel={clear}
      onPointerOut={clear}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
    </button>
  );
}
