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
    <span className={`${isSmall && "size-14 bold uppercase"}`}>{label}</span>
    <div
      className={`flex w-full bg-gray progressBar ${isSmall ? "h-5" : "h-10"}`}
    >
      <div
        className={`bg-accent progressBar ${isSmall ? "h-5" : "h-10"}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);
