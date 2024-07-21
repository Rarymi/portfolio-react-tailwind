import { useContext } from "react";
import ThemeLayoutContext from "../context/ThemeLayoutContext.tsx";

export const useThemeLayout = () => useContext(ThemeLayoutContext);
