import { media, styled } from '@/style';
import * as React from 'react';

const Svg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    z-index: -1;

    ${media.tablet`
      display: block;
      margin: 3vw 3vw 12vw;
      width: 94vw;
  `};
`;

const CardBlob = React.forwardRef((props, ref) =>
    props.left ? (
        <Svg id="card-blob-left" viewBox="0 0 1360 816" ref={ref} fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M60 0C26.863 0 0 26.863 0 60v726c0 16.569 13.431 30 30 30h1300c16.57 0 30-13.431 30-30V30c0-16.569-13.43-30-30-30H60zm85.231 173.715c122.862-93.654 298.936-18.886 357.734 80.989 58.797 99.876 124.132 238.591 45.234 392.803S148.548 748.902 174.205 492.316c5.599-55.998-20.599-102.235-44.448-144.325-34.623-61.106-64.294-113.471 15.474-174.276zm-93.18 396.084c10.908 53.419 90.466 21.411 98.544-60.253.022-75.802-64.055-111.915-108.212-79.877-31.515 22.865-18.677 57.261-4.777 94.5 5.576 14.94 11.323 30.336 14.445 45.63zm23.26-369.501c5.495 14.837-12.144 35.38-22.96 33.377-10.816-2.002-19.903-40.806-4.626-49.164 12.222-6.686 23.277 4.147 27.587 15.787z"
                fill="#FDFFFC"
            />
        </Svg>
    ) : (
        <Svg id="card-blob-right" viewBox="0 0 1281 851" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 60C0 26.863 25.294 0 56.495 0H1252.31c15.6 0 28.24 13.431 28.24 30v756c0 16.569-12.64 30-28.24 30H28.247C12.647 816 0 802.569 0 786v-88.143c49.853 68.65 141.913 40.316 231.289 12.807 76.383-23.509 150.806-46.415 195.248-7.664l7.062-2.5C409.925 531.33 298.06 554.712 186.878 577.952 116.942 592.57 47.275 607.132 0 573.676V60zm1077.17 173c-71.56-87.5-247.395-128.959-345.089-14.5-63.428 74.313-26.98 120.4 15.552 174.18 29.296 37.045 61.478 77.738 65.895 133.82C833.764 783.468 1139.79 777 1186.39 611c46.61-166-37.66-290.5-109.22-378zM583.256 126.829c66.382-42 135.117 3 100.75 43.5-9.84 11.595-18.291 25.363-26.49 38.721-20.438 33.299-39.316 64.055-74.26 52.279-48.962-16.5-57.436-89.5 0-134.5zM702.421 464c10.358 0 23.166-23.412 15.536-37-5.986-10.661-18.078-19.3-28.247-10.5-12.712 11 2.354 47.5 12.711 47.5z"
                fill="#FDFFFC"
            />
            <g filter="url(#card-blob-right_svg__filter0_d)">
                <path
                    d="M433.872 726.653l10.425-3.149 1.975 13.269-6.7 2.023-5.7-12.143z"
                    fill="#535461"
                />
                <path
                    d="M430.332 696.615l.286-.086a5.277 5.277 0 0 1 4.037.413 5.356 5.356 0 0 1 2.575 3.164l7.068 23.398-10.425 3.149-7.068-23.399a5.358 5.358 0 0 1 .394-4.06 5.274 5.274 0 0 1 3.133-2.579z"
                    fill="url(#card-blob-right_svg__paint0_linear)"
                />
                <path
                    d="M459.61 744.483c.396-.2.77-.441 1.117-.717 7.727-6.163.643-29.087.643-29.087l2.586-.781s3.792 9.611 11.589 22.601c7.019 11.687-2.67 26.987-4.684 29.942-.228.33-.356.507-.356.507-14.675-.865-10.895-22.465-10.895-22.465z"
                    fill="#B2E8E1"
                />
                <path
                    opacity={0.2}
                    d="M469.423 766.839c.347.048.702.086 1.073.108l.355-.507c2.014-2.955 11.704-18.256 4.684-29.942-7.797-12.991-11.579-22.601-11.579-22.601l-1.455.44s3.784 9.613 11.589 22.601c6.988 11.632-2.587 26.852-4.667 29.901z"
                    fill="#fff"
                />
                <path
                    d="M415.15 754.737c-.69-15.137-2.864-25.233-2.864-25.233l2.591-.782s7.088 24.053 17.301 23.892c.222 0 .444-.014.664-.042 0 0 15.111 15.894 3.362 24.736 0 0-.163-.059-.463-.18-3.04-1.22-19.958-8.615-20.591-22.391z"
                    fill="#B2E8E1"
                />
                <path
                    opacity={0.1}
                    d="M459.61 744.483c.395-.201.77-.441 1.116-.718a166.618 166.618 0 0 1 10.133 22.672c-.227.33-.355.507-.355.507-14.675-.861-10.894-22.461-10.894-22.461zM435.735 777.126a153.33 153.33 0 0 1-3.565-24.52c.222-.001.444-.015.665-.043 0 0 15.11 15.894 3.361 24.737a8.826 8.826 0 0 1-.461-.174z"
                    fill="#000"
                />
                <path
                    d="M432.458 748.805a185.867 185.867 0 0 1-.138-12.045s3.988-7.819 19.873-6.003c0 0 2.6 3.534 6.177 9.797 7.869 13.769 20.462 40.733 20.523 72.319a112.61 112.61 0 0 1-3.443 28.14s-9.995-6.279-20.368-20.943c-10.373-14.664-21.119-37.718-22.624-71.265z"
                    fill="#E3E8F4"
                />
                <path
                    d="M456.3 781.875c-6.444 1.947-10.091 8.748-8.144 15.193 1.946 6.444 8.748 10.09 15.192 8.144 6.445-1.947 10.091-8.749 8.144-15.193-1.946-6.444-8.748-10.09-15.192-8.144z"
                    fill="#B2E8E1"
                />
                <path
                    d="M451.547 796.037a8.642 8.642 0 0 1 2.476-8.91 8.647 8.647 0 0 1 9.111-1.574 8.71 8.71 0 0 1 2.859 1.931 8.635 8.635 0 0 1 2.103 3.554l.059.197a8.655 8.655 0 0 1-3.679 9.594 8.894 8.894 0 0 1-1.902.905l-.248.075a8.647 8.647 0 0 1-6.585-.653 8.64 8.64 0 0 1-4.194-5.119z"
                    fill="#41EAD4"
                />
                <path
                    d="M455.084 820.069c11.324-10.337 23.819-7.194 23.819-7.194a112.638 112.638 0 0 1-3.452 28.138s-9.995-6.279-20.367-20.944zM432.459 748.806a182.515 182.515 0 0 1-.135-12.042s3.988-7.819 19.874-6.002c0 0 .844 1.147 2.238 3.291a138.987 138.987 0 0 1 3.943 6.504s-5.907-.653-13.333 1.59a36.43 36.43 0 0 0-12.587 6.659z"
                    fill="#B2E8E1"
                />
                <path
                    d="M432.282 740.745c-.003-1.311.011-2.638.042-3.981 0 0 3.988-7.818 19.873-6.002 0 0 .844 1.147 2.239 3.291.001 0-15.569.205-22.154 6.692z"
                    fill="#E3E8F4"
                />
                <path
                    opacity={0.2}
                    d="M464.474 800.842l.014-.018 3.667-9.576-.059-.198a8.635 8.635 0 0 0-2.103-3.554l-3.424 14.252 1.905-.906zM460.44 794.417l2.697-8.858a8.784 8.784 0 0 1 2.059 1.214l-3.964 8.066-.792-.422z"
                    fill="#fff"
                />
                <path
                    opacity={0.2}
                    d="M449.051 731.71s2.6 3.536 6.176 9.797c7.869 13.771 20.463 40.735 20.523 72.32a113.014 113.014 0 0 1-2.792 25.39c1.57 1.213 2.497 1.793 2.497 1.793a112.569 112.569 0 0 0 3.447-28.135c-.06-31.585-12.654-58.549-20.523-72.32-3.576-6.261-6.176-9.797-6.176-9.797-6.276-.716-10.694.071-13.744 1.284 2.736-.604 6.212-.831 10.592-.332z"
                    fill="#fff"
                />
            </g>
            <g stroke="#F8F9F9" strokeWidth={4}>
                <path d="M73 647.175c0-8.837-7.163-16-16-16s-16 7.163-16 16v20c0 8.836 7.163 16 16 16s16-7.164 16-16v-20z" />
                <path d="M59 647.636c0-1.359-.895-2.461-2-2.461s-2 1.102-2 2.461v3.077c0 1.36.895 2.462 2 2.462s2-1.102 2-2.462v-3.077z" />
            </g>
            <defs>
                <filter
                    id="card-blob-right_svg__filter0_d"
                    x={375.428}
                    y={654.997}
                    width={161.537}
                    height={219.644}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={-8} />
                    <feGaussianBlur stdDeviation={16} />
                    <feColorMatrix values="0 0 0 0 0.00392157 0 0 0 0 0.0862745 0 0 0 0 0.152941 0 0 0 0.1 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient
                    id="card-blob-right_svg__paint0_linear"
                    x1={439.083}
                    y1={725.079}
                    x2={430.473}
                    y2={696.572}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0E0E0" />
                    <stop offset={0.31} stopColor="#FCCC63" />
                    <stop offset={0.77} stopColor="#F55F44" />
                </linearGradient>
            </defs>
        </Svg>
    )
);

export default CardBlob;
