import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "../data/portfolio";

const CountUp: React.FC<{ target: number; suffix?: string }> = ({
  target,
  suffix = "",
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const Stats: React.FC = () => (
  <section className="mx-auto max-w-6xl px-6 lg:px-8">
    <div className="card grid grid-cols-2 gap-4 p-6 sm:p-8 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="gradient-text text-4xl font-extrabold sm:text-5xl">
            <CountUp target={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-2 text-sm text-muted">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
