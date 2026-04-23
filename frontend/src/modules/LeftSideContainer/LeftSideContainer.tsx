import { Photo } from "../../components/Photo";
import { Triangle } from "../../components/Triangle";
import { LeftSideContent } from "./components/LeftSideContent";

export const LeftSideContainer = () => (
  <div className="resume-left-container">
    <div className="character-block">
      <div className="character-line" />
    </div>
    <Triangle isBig />
    <Photo />
    <LeftSideContent />
  </div>
);
