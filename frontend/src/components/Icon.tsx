export const Icon = ({
  icon,
  isBig = false,
  isGold = false,
  customSizeImage,
}: {
  icon: IconType;
  isBig?: boolean;
  isGold?: boolean;
  customSizeImage?: number;
}) => {
  const IconComp = icon;

  return (
    <div
      className={`flex items-center justify-center icon ${isBig ? "big-icon" : "small-icon"} ${isGold ? "bg-accent" : "bg-white"}`}
    >
      <IconComp color="#333333" />
    </div>
  );
};
