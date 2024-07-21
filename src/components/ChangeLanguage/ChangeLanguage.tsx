import { useTranslation } from "react-i18next";

import brazilFlag from "../../assets/icons/brazilFlagIcon.svg";
import usaFlag from "../../assets/icons/usaFlagIcon.svg";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    console.log("funcao");
    return await i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex justify-end items-center gap-6`}>
      <div className={`cursor-pointer`} onClick={() => changeLanguage("pt-BR")}>
        <img src={brazilFlag} alt={"Bandeira Brasil"} width={40} height={40} />
      </div>
      <div
        className={` cursor-pointer`}
        onClick={() => changeLanguage("en-US")}
      >
        <img
          src={usaFlag}
          alt={"Bandeira Estados Unidos"}
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};
