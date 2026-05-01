"use client";

import BubbleCursor from "@/components/BubbleCursor";
import IntroLoader from "@/components/IntroLoader";
import { ReactNode, useEffect, useState } from "react";

type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <IntroLoader done={done} />
      <BubbleCursor />
      {done && children}
    </>
  );
};

export default Provider;
