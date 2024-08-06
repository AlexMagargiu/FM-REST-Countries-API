type ThemeChangeListener = (isDark: boolean) => void;

let darkMode: boolean;
let listeners: Set<ThemeChangeListener> = new Set();

const getInitialMode = (): boolean => {
  return (
    localStorage.getItem("darkMode") === "true" ||
    (!("darkMode" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
};

const applyTheme = (): void => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  }
  notifyListeners();
};

const notifyListeners = (): void => {
  listeners.forEach((listener) => listener(darkMode));
};

const init = (): void => {
  darkMode = getInitialMode();
  applyTheme();
};

export const isDarkMode = (): boolean => darkMode;

export const toggleTheme = (): void => {
  darkMode = !darkMode;
  applyTheme();
};

export const subscribe = (listener: ThemeChangeListener): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

init();
