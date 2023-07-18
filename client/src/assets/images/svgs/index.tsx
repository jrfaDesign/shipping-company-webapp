import React, { SVGProps } from "react";

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="72" height="72" viewBox="0 0 24 24" fill={props.fill}>
    <path d="M8 20H5a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2ZM3 9a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1Zm16-7h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3Zm-3 10a1 1 0 0 0-1-1h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 1-1Zm5 3a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1Z" />
  </svg>
);

export const HamburgerMenuIconClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={props.fill} width="32" height="32" viewBox="0 0 24 24">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export const HamburgerMenuIconOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={props.fill} width="32" height="32" viewBox="0 0 24 24">
    <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12L21 8.41L19.59 7l-5 5l5 5L21 15.59z" />
  </svg>
);

export const WeightLossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 96 960 960" {...props}>
    <path d="M600 826h320v60H600v-60Zm-420 50V276v600Zm300.5-545q-50.5 0-84.5 34t-34 84.5q0 50.5 34 84t84.5 33.5q50.5 0 84-33.5t33.5-84q0-50.5-33.5-84.5t-84-34ZM417 429q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm63 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm63 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v361h-60V276H180v600h361v60H180Z" />
  </svg>
);

export const WeightGainIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 96 960 960" {...props}>
    <path d="M730 696h60v130h130v60H790v130h-60V886H600v-60h130V696ZM180 876V276v600Zm300.5-545q-50.5 0-84.5 34t-34 84.5q0 50.5 34 84t84.5 33.5q50.5 0 84-33.5t33.5-84q0-50.5-33.5-84.5t-84-34ZM417 429q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm63 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm63 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v361h-60V276H180v600h361v60H180Z" />
  </svg>
);

export const GutHealthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 96 960 960" {...props}>
    <path d="M120 976V736q0-46 32.083-78 32.084-32 77.917-32h80q75 0 102.5-33t27.5-77q0-32-17.25-51T380 446q-24.75 0-42.375-17.625T320 386V176h60v210q2 0 0 0 50 0 85 36.5t35 93.5q0 69-45 119.5T310 686h-80q-21.25 0-35.625 14.375T180 736v240h-60Zm240 0h-60v-80q0-46 32.083-78 32.084-32 77.917-32h160q88 0 149-61t61-149v-40q0-88-66-149t-154-61q-24.75 0-42.375-17.625T500 266v-90h60v90q112 0 196 79t84 191v40q0 112-79 191t-191 79H410q-21.25 0-35.625 14.375T360 896v80Zm-180 0V736q0-21.25 14.375-35.625T230 686h80q100 0 145-50.5T500 516q0-57-35-93.5T377 386l3-210-3 210q53 0 88 36.5t35 93.5q0 69-45 119.5T310 686h-80q-21.25 0-35.625 14.375T180 736v240Z" />
  </svg>
);

export const VeganIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 96 960 960" {...props}>
    <path d="M213 881q-43.594-45-68.297-104Q120 718 120 656q0-73 25.5-133.5T222 411q35-35 87-59t122.5-37.5Q502 301 591 297.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.563T680 873q-51 51-110 77t-126 26q-69 0-126.5-23.5T213 881Zm103 0q25 17 58 26t69.923 9Q497 916 547 894t91-64q27-27 46-70.5t31-103Q727 597 731 522t0-165q-94-2-168.5 2.5T431 376q-57 12-98 30.5T266 452q-42 43-64 91t-22 98q0 48 20.5 100.5T251 826q53-98 127-176t157-123q-87 75-141 162.5T316 881Zm0 0Zm0 0Z" />
  </svg>
);

export const PregnancyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 96 960 960" {...props}>
    <path d="M411 976V796h-91V482q0-50 28-78t77.5-28q49.5 0 76 33t26.5 73q52 6 82 41.5t30 89.5v183H485v180h-74Zm15.08-654q-30.08 0-51.58-21.42-21.5-21.421-21.5-51.5 0-30.08 21.42-51.58 21.421-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.421 21.5 51.5 0 30.08-21.42 51.58-21.421 21.5-51.5 21.5Z" />
  </svg>
);

export const ReeducateFoodIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 96 960 960" {...props}>
    <path d="M285 976V608q-52-11-88.5-52.5T160 456V176h60v280h65V176h60v280h65V176h60v280q0 58-36.5 99.5T345 608v368h-60Zm415 0V656H585V351q0-79 48-127t127-48v800h-60Z" />
  </svg>
);
