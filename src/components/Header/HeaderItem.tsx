import "./style.css";

interface HeaderItemProps {
  title: string;
}

export const HeaderItem = ({ title }: HeaderItemProps) => {
  return <li className={`item`}>{title}</li>;
};
