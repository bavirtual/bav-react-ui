import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
  type UIEvent,
} from "react";
import { cx } from "../utils/cx";
import styles from "./ScrollFade.module.css";

export interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  onScroll?: (e: UIEvent<HTMLDivElement>) => void;
}

export const ScrollFade = forwardRef<HTMLDivElement, ScrollFadeProps>(
  ({ children, className, onScroll }, ref) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => scrollRef.current!, []);

    const [topFade, setTopFade] = useState(false);
    const [bottomFade, setBottomFade] = useState(false);

    const update = useCallback(() => {
      const el = scrollRef.current;
      if (!el) return;
      const overflowing = el.scrollHeight > el.clientHeight + 1;
      setTopFade(el.scrollTop > 4);
      setBottomFade(overflowing && el.scrollTop + el.clientHeight < el.scrollHeight - 4);
    }, []);

    useEffect(() => {
      const el = scrollRef.current;
      if (!el) return;
      update();
      const ro = new ResizeObserver(update);
      ro.observe(el);
      const mo = new MutationObserver(update);
      mo.observe(el, { childList: true, subtree: true });
      window.addEventListener("resize", update);
      return () => {
        ro.disconnect();
        mo.disconnect();
        window.removeEventListener("resize", update);
      };
    }, [update]);

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
      update();
      onScroll?.(e);
    };

    return (
      <div className={cx(styles.wrap, topFade && styles.fadeTop, bottomFade && styles.fadeBottom)}>
        <div ref={scrollRef} className={cx(styles.scroll, className)} onScroll={handleScroll}>
          {children}
        </div>
      </div>
    );
  },
);

ScrollFade.displayName = "ScrollFade";
