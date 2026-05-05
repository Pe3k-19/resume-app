import { useEffect, useState } from "preact/hooks";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Triangle } from "../../components/Triangle";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";

export const RightSideContainer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/abouts");
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div className="resume-right-container">
      <div className="gray-line" />
      <div className="character-block">
        <div className="character-line" />
      </div>
      <div className="content">
        <Header data={data} />
        <AboutSection data={data} />
        <WorkSection />
        <Skills />
      </div>
      <Triangle />
    </div>
  );
};
