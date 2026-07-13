import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Triangle } from "../../components/Triangle";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";

export const RightSideContainer = ({
  about,
  works,
  skills,
}: {
  about?: AboutItem;
  works?: WorkItem[];
  skills?: SkillsGroup;
}) => (
  <div className="relative h-full bg-white text-dark resume-right-container">
    <div className="absolute w-full bg-light gray-line" />
    <div className="h-full absolute character-block">
      <div className="h-full bg-gray character-line" />
    </div>
    <div className="flex flex-col gap-1 content">
      <Header data={about} />
      <AboutSection data={about} />
      <WorkSection data={works} />
      <Skills data={skills} />
    </div>
    <Triangle />
  </div>
);
