import { useEffect, useState } from "preact/hooks";
import { apiFetch } from "../../Utils/api";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Triangle } from "../../components/Triangle";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";

export const RightSideContainer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apiFetch("/abouts").then(setData).catch(console.error);
  }, []);

  return (
    <div className="relative h-full bg-white text-dark resume-right-container">
      <div className="absolute w-full bg-light gray-line" />
      <div className="h-full absolute character-block">
        <div className="h-full bg-gray character-line" />
      </div>
      <div className="flex flex-col gap-1 content">
        <Header data={data} />
        <AboutSection data={data} />
        <WorkSection />
        <Skills />
      </div>
      <Triangle />
    </div>
  );
};
