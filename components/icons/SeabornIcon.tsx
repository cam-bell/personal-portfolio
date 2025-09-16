import React from "react";

interface SeabornIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const SeabornIcon: React.FC<SeabornIconProps> = ({
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
      {/* Seaborn logo - circular design with waves and bars */}
      <circle cx="12" cy="12" r="10" fill="#4a7c7e" />

      {/* Wave layers */}
      <path
        d="M2 12 Q6 8 10 12 T18 12 T22 12"
        stroke="#7fb3d3"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M2 14 Q6 10 10 14 T18 14 T22 14"
        stroke="#5a9fd4"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M2 16 Q6 12 10 16 T18 16 T22 16"
        stroke="#4a7c7e"
        strokeWidth="2"
        fill="none"
      />

      {/* Dots/bubbles pattern */}
      <circle cx="6" cy="8" r="1" fill="#b8d4e3" opacity="0.8" />
      <circle cx="10" cy="7" r="0.8" fill="#b8d4e3" opacity="0.6" />
      <circle cx="14" cy="8" r="1.2" fill="#b8d4e3" opacity="0.7" />
      <circle cx="18" cy="7" r="0.9" fill="#b8d4e3" opacity="0.5" />

      {/* Bar chart at bottom */}
      <rect x="4" y="18" width="2" height="4" fill="#2c5f5f" />
      <rect x="7" y="17" width="2" height="5" fill="#2c5f5f" />
      <rect x="10" y="19" width="2" height="3" fill="#2c5f5f" />
      <rect x="13" y="16" width="2" height="6" fill="#2c5f5f" />
      <rect x="16" y="18" width="2" height="4" fill="#2c5f5f" />
      <rect x="19" y="17" width="2" height="5" fill="#2c5f5f" />
    </svg>
  );
};
