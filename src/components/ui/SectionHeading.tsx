import React from "react";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export const SectionHeading: React.FC<Props> = ({
  index,
  title,
  subtitle,
  align = "left",
}) => (
  <Reveal
    className={`mb-12 ${align === "center" ? "text-center" : ""}`}
  >
    <div
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {align === "left" && (
        <span className="ml-4 hidden h-px flex-1 bg-border sm:block" />
      )}
    </div>
    {subtitle && (
      <p
        className={`mt-4 max-w-2xl text-muted ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {subtitle}
      </p>
    )}
  </Reveal>
);
