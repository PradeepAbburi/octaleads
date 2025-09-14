import React from 'react';

// Animated SVG shapes for interactive footer background
const FooterAnimatedBg: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Example: Floating code brackets */}
      <svg className="absolute left-10 top-8 animate-moveX" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <text x="10" y="40" fontSize="40" fill="#fbbf24" opacity="0.18">{'<>'}</text>
      </svg>
      {/* Example: Rotating pen tool icon */}
      <svg className="absolute right-20 top-16 animate-spin-slow" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#fbbf24" strokeWidth="4" opacity="0.12" />
        <rect x="20" y="12" width="8" height="24" rx="4" fill="#fbbf24" opacity="0.18" />
      </svg>
      {/* Example: Moving grid dots */}
      <svg className="absolute left-1/2 bottom-10 animate-moveY" width="80" height="20" viewBox="0 0 80 20" fill="none">
        <circle cx="10" cy="10" r="3" fill="#fbbf24" opacity="0.15" />
        <circle cx="30" cy="10" r="3" fill="#fbbf24" opacity="0.15" />
        <circle cx="50" cy="10" r="3" fill="#fbbf24" opacity="0.15" />
        <circle cx="70" cy="10" r="3" fill="#fbbf24" opacity="0.15" />
      </svg>
    </div>
  );
};

export default FooterAnimatedBg;
