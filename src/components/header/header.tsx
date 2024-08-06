import { ThemeSwitcher } from "../theme-switcher";

export function Header() {
  return (
    <header className="flex justify-between bg-elements px-4 py-8 shadow-md">
      <p className="font-bold">Where in the world?</p>
      <ThemeSwitcher />
    </header>
  );
}
