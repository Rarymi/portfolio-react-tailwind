import { useThemeLayout } from "../hooks/useThemeLayout.ts";
import { Content } from "./Content.tsx";
import { Header } from "../components/Header";

interface ILayout {
  children?: any;
}

export const Layout = ({ children }: ILayout) => {
  const { theme } = useThemeLayout();

  return (
    // <AuthGuard>
    <div className={`${theme}  flex-row h-screen`}>
      <Header />
      <div className={`flex  flex-col w-full   dark:bg-gray-800 `}>
        {/*<Topbar title={title} subtitle={subtitle} />*/}
        <Content>{children}</Content>
      </div>
    </div>
    // </AuthGuard>
  );
};
