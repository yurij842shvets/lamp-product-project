import { useRef } from "react";

export function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (!ref.current) return;

    isDown.current = true;

    startX.current = e.clientX;
    scrollLeft.current = ref.current.scrollLeft;

    ref.current.setPointerCapture(e.pointerId);
    ref.current.style.cursor = "grabbing";
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDown.current || !ref.current) return;

    e.preventDefault(); 

    const x = e.clientX;
    const walk = (x - startX.current) * 100;

    ref.current.scrollLeft = scrollLeft.current - walk;
  }

  function stop() {
    isDown.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  }

  function onPointerUp() {
    stop();
  }

  function onPointerCancel() {
    stop();
  }

  return {
    ref,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
  };
}