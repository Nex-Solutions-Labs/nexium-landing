import React from 'react';

export const HeroBackground: React.FC = () => (
  <svg
    viewBox="0 0 1920 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -1,
    }}
  >
    <rect width="1920" height="1080" fill="#0a0a0a" />
    <g filter="url(#filter0_f)">
      <circle cx="960" cy="540" r="300" fill="url(#grad1)" fillOpacity="0.15" />
    </g>
    <g filter="url(#filter1_f)">
      <ellipse cx="960" cy="540" rx="400" ry="200" fill="url(#grad2)" fillOpacity="0.1" />
    </g>
    <defs>
      <filter id="filter0_f" x="460" y="40" width="1000" height="1000" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
      </filter>
      <filter id="filter1_f" x="360" y="140" width="1200" height="800" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient id="grad1" x1="660" y1="240" x2="1260" y2="840" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00f2ff" />
        <stop offset="1" stopColor="#7000ff" />
      </linearGradient>
      <linearGradient id="grad2" x1="560" y1="340" x2="1360" y2="740" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7000ff" />
        <stop offset="1" stopColor="#00f2ff" />
      </linearGradient>
    </defs>
  </svg>
);

export const ProductBackground: React.FC = () => (
  <svg
    viewBox="0 0 1920 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -1,
    }}
  >
    <rect width="1920" height="1080" fill="#0a0a0a" />
    <g filter="url(#filter2_f)">
      <path
        d="M960 340 L1260 640 L960 940 L660 640 Z"
        fill="url(#grad3)"
        fillOpacity="0.15"
      />
    </g>
    <defs>
      <filter id="filter2_f" x="460" y="140" width="1000" height="1000" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient id="grad3" x1="660" y1="340" x2="1260" y2="940" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00f2ff" />
        <stop offset="1" stopColor="#7000ff" />
      </linearGradient>
    </defs>
  </svg>
); 