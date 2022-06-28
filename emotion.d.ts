import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      gun_metal: string;
      white: string;
      grey: string;
      primary:string;
    };
    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
