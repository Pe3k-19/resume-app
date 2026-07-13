import { ErrorIcon } from "./Icons/ErrorIcon";

export const Error = () => (
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center justify-center loading-screen">
      <ErrorIcon width={64} height={64} color="#fca800" />
      <span className="loader-text">Niečo sa pokazilo</span>
    </div>
  </div>
);
