interface IconItemProps {
  icon: string;
  position?: string;
}

export const IconItem = ({ icon, position }: IconItemProps) => {
  return (
    <div
      className={` absolute bg-white p-3 rounded-full border-2 border-gray-200 ${position}`}
    >
      <img src={icon} alt={"Logo ReactJS"} />
    </div>
  );
};
