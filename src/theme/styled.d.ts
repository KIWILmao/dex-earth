import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components';

export type Color = string;

export interface ColorsNewTheme {
  // base
  white: Color;
  black: Color;

  // text
  text1: Color;
  text2: Color;
  text3: Color;
  text4: Color;
  text5: Color;
  text6: Color;
  textPrimary: Color;
  textSecondary: Color;

  // backgrounds / greys
  bg1: Color;
  bg2: Color;
  bg3: Color;
  bg4: Color;
  bg5: Color;
  bg6: Color;
  bg7: Color;
  bg8: Color;
  bg9: Color;
  bg10: Color;
  bg11: Color;

  //specialty colors
  modalBG: Color;

  border: Color;
  border2: Color;
  border3: Color;
  border4: Color;

  //primary colors
  primary1: Color;
  primary2: Color;

  // other
  error: Color;
  warning: Color;
  blue: Color;
  teal: Color;
}
export interface Colors {
  // base
  white: Color;
  black: Color;

  // text
  text1: Color;
  text2: Color;
  text3: Color;
  text4: Color;
  text5: Color;

  // backgrounds / greys
  bg1: Color;
  bg2: Color;
  bg3: Color;
  bg4: Color;
  bg5: Color;

  modalBG: Color;
  advancedBG: Color;

  //blues
  primary1: Color;
  primary2: Color;
  primary3: Color;
  primary4: Color;
  primary5: Color;

  primaryText1: Color;

  // pinks
  secondary1: Color;
  secondary2: Color;
  secondary3: Color;

  // other
  red1: Color;
  red2: Color;
  red3: Color;
  green1: Color;
  yellow1: Color;
  yellow2: Color;
  blue1: Color;

  newTheme: ColorsNewTheme;
}

export interface Grids {
  sm: number;
  md: number;
  lg: number;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    grids: Grids;

    // shadows
    shadow1: string;

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>;
      upToSmall: ThemedCssFunction<DefaultTheme>;
      upToMedium: ThemedCssFunction<DefaultTheme>;
      upToLarge: ThemedCssFunction<DefaultTheme>;
    };

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation;
    flexRowNoWrap: FlattenSimpleInterpolation;
  }
}
