export const Icon = ({
  icon,
  isBig = false,
  isOnRight = false,
  customSizeImage,
  ...rest
}: {
  icon: IconType;
  isBig?: boolean;
  isOnRight?: boolean;
  customSizeImage?: number;
}) => {
  const IconComp = icon;

  return (
    <div
      className={`icon ${isBig ? "big-icon" : "small-icon"}`}
      style={{
        ...rest,
      }}
    >
      <IconComp
        width={customSizeImage ? customSizeImage : isBig ? 28 : 20}
        height={customSizeImage ? customSizeImage : isBig ? 28 : 20}
        color="#333333"
      />
    </div>
  );
};
