export const ColoredX = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_23_560)">
        <g filter="url(#filter1_d_23_560)">
          <path
            d="M55.9406 45.4062L77.7966 20H72.6169L53.64 42.0594L38.4825 20H21L43.9209 53.3581L21 80H26.1797L46.2206 56.7045L62.2275 80H79.71L55.9392 45.4062H55.9406ZM48.8466 53.6516L46.5239 50.33L28.0458 23.8991H36.0014L50.9128 45.23L53.235 48.5516L72.6192 76.2781H64.6645L48.8466 53.653V53.6516Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_23_560"
          x="-4"
          y="-4"
          width="108"
          height="108"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_23_560"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_23_560"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_23_560"
          x="6"
          y="5"
          width="88.71"
          height="90"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_23_560"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_23_560"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
