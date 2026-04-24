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
      className={`icon ${isBig ? "big-icon" : "small-icon"} ${isGold ? "color-gold" : "color-white"}`}
    >
      <IconComp
        width={customSizeImage ? customSizeImage : isBig ? 28 : 20}
        height={customSizeImage ? customSizeImage : isBig ? 28 : 20}
        color="#333333"
      />
    </div>
  );
};
