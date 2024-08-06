import { observer } from "mobx-react-lite";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { themeStore } from "../../stores/theme";

export const ThemeSwitcher = observer(() => {
  const { darkMode, toggleTheme } = themeStore;

  return (
    <div
      onClick={toggleTheme}
      className="flex cursor-pointer items-center justify-center gap-1"
    >
      {darkMode ? <IoMoonSharp /> : <IoMoonOutline />}
      <p className="text-sm">Dark Mode</p>
    </div>
  );
});
