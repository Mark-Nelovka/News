import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      fonts: {
          main: string,
      },
      fontWeight: {
          reqular: number,
          semiBold: number,
          bold: number
      },
      fontStyle: {
          normal: string,
      },
    palette: {
        white: string,
        black: string
        text: string,
        placeholder: string
    },
  }
}