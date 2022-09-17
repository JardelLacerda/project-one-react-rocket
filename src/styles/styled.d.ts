import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string,

        colors:{
            purple: string,
            purpleDark: string,
            blue: string,
            blueDark: string,
            gray700: string,
            gray600: string,
            gray500: string,
            gray400: string,
            gray300: string,
            gray200: string,
            gray100: string,
            danger: string,
            white: string
        }
    }
}