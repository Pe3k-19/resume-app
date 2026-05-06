export const Triangle = ({ isBig }: { isBig?: boolean }) => {
  if (isBig) {
    return <div className="absolute h-420 triangle-big" />;
  }
  return <div className="absolute h-150 triangle-small" />;
};
