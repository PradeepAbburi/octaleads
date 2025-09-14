import React from 'react';

// Animated tech/design shapes for homepage background
const AnimatedTechShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Example: Moving circuit lines */}
      <svg className="absolute top-10 left-10 animate-moveX" width="120" height="40" viewBox="0 0 120 40" fill="none">
        <rect x="0" y="18" width="120" height="4" rx="2" fill="#60A5FA" opacity="0.2" />
        <circle cx="20" cy="20" r="6" fill="#2563EB" opacity="0.3" />
        <circle cx="100" cy="20" r="6" fill="#2563EB" opacity="0.3" />
      </svg>
      {/* Example: Floating design shapes */}
      <svg className="absolute bottom-20 right-20 animate-moveY" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="10" y="10" width="40" height="40" rx="12" fill="#6366F1" opacity="0.15" />
        <circle cx="30" cy="30" r="18" fill="#0EA5E9" opacity="0.15" />
      </svg>
      {/* Example: Rotating gear */}
      <svg className="absolute top-1/2 left-1/4 animate-spin-slow" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#38BDF8" strokeWidth="4" opacity="0.18" />
        <path d="M24 8v8M24 32v8M8 24h8M32 24h8" stroke="#2563EB" strokeWidth="2" opacity="0.25" />
      </svg>
    </div>
  );
};

export default AnimatedTechShapes;
