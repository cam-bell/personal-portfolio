import React from "react";

interface MatplotlibIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const MatplotlibIcon: React.FC<MatplotlibIconProps> = ({
  className,
  style,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="currentColor"
    >
      {/* Matplotlib logo - circular radar chart design */}
      <circle cx="12" cy="12" r="10" fill="#11557c" />
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Radial lines */}
      <line
        x1="12"
        y1="2"
        x2="12"
        y2="22"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <line
        x1="2"
        y1="12"
        x2="22"
        y2="12"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <line
        x1="4.5"
        y1="4.5"
        x2="19.5"
        y2="19.5"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <line
        x1="19.5"
        y1="4.5"
        x2="4.5"
        y2="19.5"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Data segments - radar chart style */}
      <path d="M12 12 L12 4 L16 8 L12 12 Z" fill="#ff7f0e" />
      <path d="M12 12 L16 8 L20 12 L12 12 Z" fill="#ffbb78" />
      <path d="M12 12 L20 12 L16 16 L12 12 Z" fill="#2ca02c" />
      <path d="M12 12 L16 16 L12 20 L12 12 Z" fill="#1f77b4" />
      <path d="M12 12 L12 20 L8 16 L12 12 Z" fill="#d62728" />
      <path d="M12 12 L8 16 L4 12 L12 12 Z" fill="#9467bd" />
      <path d="M12 12 L4 12 L8 8 L12 12 Z" fill="#8c564b" />
      <path d="M12 12 L8 8 L12 4 L12 12 Z" fill="#e377c2" />
    </svg>
  );
};
