import React, { FC } from "react";

interface YearMarkerProps {
  year: string;
}

const YearMarker: FC<YearMarkerProps> = ({ year }) => {
  return (
    <div className="flex items-baseline gap-4 mb-8 relative">
      <span
        aria-hidden="true"
        className="absolute -top-10 -left-1 md:-left-2 text-8xl md:text-9xl font-black text-[#f0f0f0] select-none leading-none -z-10"
      >
        {year}
      </span>
      <h3 className="relative z-10 text-sm font-medium tracking-wide text-[#a1a4aa]">
        {year}
      </h3>
      <div className="relative z-10 h-px flex-1 bg-gray-200" />
    </div>
  );
};

export default YearMarker;
