export interface ITheme {
  background: string;
  foreground: string;
  color: string;
}

export interface IThemeCollection {
  default: ITheme;
  bright: ITheme;
}
