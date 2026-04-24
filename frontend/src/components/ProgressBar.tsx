export const ProgressBar = ({
  label,
  progress,
  isSmall,
}: {
  label: string;
  progress: number;
  isSmall?: boolean;
}) => (
  <div className="progressBarContainer">
    <div className="text">{label}</div>
    <div className={`progressBarBase ${isSmall ? "h-5" : "h-10"}`}>
      <div
        className={`progressBar ${isSmall ? "h-5" : "h-10"}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);
