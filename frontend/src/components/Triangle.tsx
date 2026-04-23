export const Triangle = ({ isBig }: { isBig?: boolean }) => {
  if (isBig) {
    return <div className="triangle-big" />;
  }
  return <div className="triangle-small" />;
};
