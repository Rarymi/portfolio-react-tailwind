import Logo from "../../assets/logo.png";
import { DotSeparator } from "../DotSeparator";
import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage.tsx";
import { HeaderItem } from "./HeaderItem.tsx";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header
      className={`flex flex-row justify-center w-screen items-center px-14 pt-2`}
    >
      <div className={` w-1/4`}>
        <img src={Logo} alt={"Logo"} className={`w-36`} />
      </div>
      <ul
        className={`flex flex-row text-md items-center gap-6 w-2/4 font-semibold text-indigo-950 justify-center`}
      >
        <HeaderItem title={t("home.title")} />
        <DotSeparator />
        <HeaderItem title={t("about.title")} />
        <DotSeparator />
        <HeaderItem title={t("habilities.title")} />
        <DotSeparator />
        <HeaderItem title={t("projects.title")} />
        <DotSeparator />
        <HeaderItem title={t("contact.title")} />
      </ul>
      <div className={` w-1/4`}>
        <ChangeLanguage />
      </div>
    </header>
  );
};
