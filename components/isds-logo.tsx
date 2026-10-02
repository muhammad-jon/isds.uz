import React from "react";

interface IsdsLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function IsdsLogo({ className, ...props }: IsdsLogoProps) {
  return (
    <svg
      viewBox="0 0 75 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Triangle 1: Top (points right) */}
      <polygon
        id="isds-triangle-1"
        points="0,0 75,43.3 0,86.6"
        fill="rgb(34, 68, 143)"
      />

      {/* Triangle 2: Second (points left) */}
      <polygon
        id="isds-triangle-2"
        points="75,56.6 0,99.9 75,143.2"
        fill="rgb(67, 96, 158)"
      />

      {/* Triangle 3: Third (points right) */}
      <polygon
        id="isds-triangle-3"
        points="0,113.2 75,156.5 0,199.8"
        fill="rgb(8, 115, 182)"
      />

      {/* Triangle 4: Bottom (points left) */}
      <polygon
        id="isds-triangle-4"
        points="75,169.8 0,213.1 75,256.4"
        fill="rgb(137, 168, 214)"
      />
    </svg>
  );
}
