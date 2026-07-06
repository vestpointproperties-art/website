import React from 'react';

interface VestpointLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds (dark text), 'dark' is for dark backgrounds (light text)
  showText?: boolean;
}

export const VestpointLogo: React.FC<VestpointLogoProps> = ({
  className = 'h-12 w-auto',
  variant = 'light',
  showText = true,
}) => {
  // Determine colors based on the variant
  const textColorGrey = variant === 'light' ? 'fill-[#7D838A]' : 'fill-[#E5E7EB]';
  const textColorOrange = 'fill-[#F97316]'; // Premium real-estate orange
  const logoOrange = '#F97316';

  return (
    <div className={`flex items-center gap-3 ${className}`} id="vestpoint-brand-logo">
      <svg
        viewBox="0 0 520 380"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="vestpoint-svg-icon"
      >
        {/* GRAPHIC ICON SECTION */}
        <g id="logo-icon-graphics">
          {/* 1. Curved Tapered Baseline at the Bottom of houses */}
          <path
            d="M 120,240 C 200,234 320,234 400,240 C 320,243 200,243 120,240"
            fill={logoOrange}
          />

          {/* 2. Left Rooftop Outline & Chimney */}
          {/* Chimney on the left */}
          <path
            d="M 165,190 L 165,160 L 175,160 L 175,180 Z"
            fill={logoOrange}
          />
          {/* Thick Left Roof */}
          <path
            d="M 138,230 L 205,155 L 240,195 L 230,205 L 205,175 L 152,235 Z"
            fill={logoOrange}
          />
          {/* 4 Windows for Left House */}
          <rect x="187" y="195" width="7" height="7" fill={logoOrange} />
          <rect x="197" y="195" width="7" height="7" fill={logoOrange} />
          <rect x="187" y="205" width="7" height="7" fill={logoOrange} />
          <rect x="197" y="205" width="7" height="7" fill={logoOrange} />

          {/* 3. Main Center/Right Rooftop Outline */}
          {/* Overlapping main roof */}
          <path
            d="M 210,232 L 270,165 L 348,232 L 334,232 L 270,178 L 224,232 Z"
            fill={logoOrange}
          />
          {/* 4 Windows for Center House */}
          <rect x="261" y="198" width="7" height="7" fill={logoOrange} />
          <rect x="271" y="198" width="7" height="7" fill={logoOrange} />
          <rect x="261" y="208" width="7" height="7" fill={logoOrange} />
          <rect x="271" y="208" width="7" height="7" fill={logoOrange} />

          {/* 4. Background Rooftop that transitions into growing bars and the Upward Growth Arrow */}
          {/* Back roof slice */}
          <path
            d="M 230,170 L 268,130 L 298,160 L 285,170 L 268,148 L 242,174 Z"
            fill={logoOrange}
          />
          {/* Vertical growth bars of the chart behind the house */}
          {/* Bar 1 */}
          <rect x="286" y="160" width="6" height="35" fill={logoOrange} />
          {/* Bar 2 */}
          <rect x="296" y="145" width="6" height="48" fill={logoOrange} />
          {/* Bar 3 */}
          <rect x="306" y="130" width="6" height="60" fill={logoOrange} />
          {/* Bar 4 */}
          <rect x="316" y="112" width="6" height="70" fill={logoOrange} />

          {/* Upward Growth Arrow swooshing up and to the right */}
          <path
            d="M 270,185 C 295,175 320,150 338,105 L 348,118 L 352,90 L 324,98 L 334,108 C 316,145 292,168 270,175 Z"
            fill={logoOrange}
          />
        </g>

        {/* TEXT BRANDING SECTION */}
        {showText && (
          <g id="logo-text-branding">
            {/* VEST POINT Primary Branding */}
            {/* "VEST" in Grey */}
            <text
              className={`${textColorGrey} font-display font-bold`}
              x="260"
              y="295"
              fontSize="52"
              letterSpacing="2"
              textAnchor="end"
            >
              VEST
            </text>
            
            {/* "POINT" in Orange */}
            <text
              className={`${textColorOrange} font-display font-extrabold`}
              x="270"
              y="295"
              fontSize="52"
              letterSpacing="2"
              textAnchor="start"
            >
              POINT
            </text>

            {/* "PROPERTIES LIMITED" Subtitle in Grey */}
            <text
              className={textColorGrey}
              x="260"
              y="335"
              fontSize="16.5"
              letterSpacing="11.5"
              textAnchor="middle"
              fontWeight="600"
              fontFamily="monospace"
            >
              PROPERTIES LIMITED
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
