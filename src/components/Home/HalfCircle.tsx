import { IconItem } from "./IconItem.tsx";
import TypescriptIcon from "../../assets/icons/typescript.svg";
import NextIcon from "../../assets/icons/next.svg";
import ReactIcon from "../../assets/icons/react.svg";
import HtmlIcon from "../../assets/icons/html.svg";

export const HalfCircle = () => {
  return (
    <div className={`flex flex-col pt-20 justify-center items-center`}>
      <div
        className=" relative flex justify-center items-end h-[500px] w-[1050px] border-2 bg-gradient-to-t from-gray-200 to-gray-300
            rounded-tl-[800px] rounded-tr-[800px]"
      >
        <div
          className="h-[495px] w-[1040px] border-2 bg-gray-200
            rounded-tl-[800px] rounded-tr-[800px]"
        ></div>
      </div>
      <IconItem icon={TypescriptIcon} position={"mt-44 mr-[1000px]"} />
      <IconItem icon={NextIcon} position={"mb-72 mr-[650px]"} />
      <IconItem icon={ReactIcon} position={"mb-40 ml-[770px]"} />
      <IconItem icon={HtmlIcon} position={" ml-[1030px] mt-80 w-16"} />
    </div>
  );
};
