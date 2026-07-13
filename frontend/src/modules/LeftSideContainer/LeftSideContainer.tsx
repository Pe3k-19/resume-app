import { Photo } from "../../components/Photo";
import { Triangle } from "../../components/Triangle";
import { LeftSideContent } from "./components/LeftSideContent";

export const LeftSideContainer = ({ data }: { data?: MeItem }) => (
  <div className="relative bg-dark h-full resume-left-block">
    <div className="h-full absolute character-block">
      <div className="h-full bg-gray character-line" />
    </div>
    <Triangle isBig />
    <Photo />
    <LeftSideContent data={data} />
  </div>
);
