import { createContext, useEffect, useState } from "react";

interface IThemeLayoutContext {
  theme: string;
  handleTheme?: () => void;
}

const ThemeLayoutContext = createContext<IThemeLayoutContext>({ theme: "" });

export function ThemeLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>("");
  const handleTheme = () => {
    const newTheme = theme === "" ? "dark" : "";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const themeSalved = localStorage.getItem("theme") ?? "";
    setTheme(themeSalved);
  }, []);

  return (
    <ThemeLayoutContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeLayoutContext.Provider>
  );
}

export default ThemeLayoutContext;
