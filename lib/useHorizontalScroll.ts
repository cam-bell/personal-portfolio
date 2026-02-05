import { useCallback, useEffect, useState } from "react";
import type React from "react";

type UseHorizontalScroll = (ref: React.RefObject<HTMLElement>) => {
  canPrev: boolean;
  canNext: boolean;
  scrollNext: () => void;
  scrollPrev: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  update: () => void;
};

const useHorizontalScroll: UseHorizontalScroll = (ref) => {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, update]);

  const scrollBy = useCallback(
    (distance: number) => {
      const el = ref.current;
      if (!el) return;
      el.scrollBy({ left: distance, behavior: "smooth" });
    },
    [ref],
  );

  const scrollNext = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    scrollBy(el.clientWidth * 0.8);
  }, [ref, scrollBy]);

  const scrollPrev = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    scrollBy(-el.clientWidth * 0.8);
  }, [ref, scrollBy]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      }
    },
    [scrollNext, scrollPrev],
  );

  return { canPrev, canNext, scrollNext, scrollPrev, onKeyDown, update };
};

export default useHorizontalScroll;
