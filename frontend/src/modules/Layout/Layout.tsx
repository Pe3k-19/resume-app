import { LanguageButtons } from "../../components/LanguageButtons";
import { LeftSideContainer } from "../LeftSideContainer/LeftSideContainer";
import { RightSideContainer } from "../RightSideContainer/RightSideContainer";

export const Layout = () => (
  <div className="layout">
    <LanguageButtons />
    <div className="flex-center p-40">
      <div className="resume-container">
        <LeftSideContainer />
        <RightSideContainer />
      </div>
    </div>
  </div>
);
