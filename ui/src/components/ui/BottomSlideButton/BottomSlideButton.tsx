import React, { useEffect, useRef, useState } from "react";
import styles from "./BottomSlideButton.module.scss";

type BottomSlideButtonProps = {
  children: React.ReactNode;
  offset?: number;
  startVisible?: boolean
};

export const BottomSlideButton = ({
  children,
  offset = 10,
  startVisible = false

}: BottomSlideButtonProps) => {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(startVisible);

  useEffect(() => {
    const root = container.current?.getRootNode();
    const host = root instanceof ShadowRoot ? root.host : null;
    const scrollY = () => window.scrollY + (host?.scrollTop ?? 0);
    let lastScrollY = scrollY();

    const handleScroll = () => {
      const currentScrollY = scrollY();

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > offset
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [offset]);

  return (
    <div ref={container}
      className={`${styles.container} ${
        visible ? styles.visible : ""
      }`}
    >
      {children}
    </div>
  );
};