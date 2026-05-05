export const ProgressBar = ({
  label,
  progress,
  isSmall,
}: {
  label: string;
  progress: number;
  isSmall?: boolean;
}) => (
  <div className={`progressBarContainer ${!isSmall && "gap-07"}`}>
    <span className={`${isSmall && "size-14 bold uppercase"}`}>{label}</span>
    <div className={`progressBarBase ${isSmall ? "h-5" : "h-10"}`}>
      <div
        className={`progressBar ${isSmall ? "h-5" : "h-10"}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);
