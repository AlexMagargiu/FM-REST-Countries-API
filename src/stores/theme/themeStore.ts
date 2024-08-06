// themeStore.ts
import { makeAutoObservable } from "mobx";
import * as themeManager from "../../utils/theme";

export class ThemeStore {
  private _darkMode: boolean;

  constructor() {
    this._darkMode = themeManager.isDarkMode();
    makeAutoObservable(this);
    themeManager.subscribe(this.updateDarkMode);
  }

  private updateDarkMode = (isDark: boolean) => {
    this._darkMode = isDark;
  };

  get darkMode(): boolean {
    return this._darkMode;
  }

  toggleTheme = (): void => {
    themeManager.toggleTheme();
  };
}

export const themeStore = new ThemeStore();
