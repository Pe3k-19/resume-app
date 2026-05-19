export const ProgressBar = ({
  label,
  progress,
  isSmall,
}: {
  label: string;
  progress: number;
  isSmall?: boolean;
}) => (
  <div className={`flex flex-col items-start w-full ${!isSmall && "gap-07"}`}>
    <span className={`${isSmall && "progress-bar-small"}`}>{label}</span>
    <div
      className={`flex w-full bg-gray progress-bar ${isSmall ? "h-5" : "h-10"}`}
    >
      <div
        className={`bg-accent progress-bar ${isSmall ? "h-5" : "h-10"}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);
