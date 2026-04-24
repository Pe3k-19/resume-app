import { IconTextComponent } from "../../components/IconTextComponent";
import { RowComponent } from "../../components/RowComponent";
import { Triangle } from "../../components/Triangle";
import { ContentData } from "../../data/contentData";
import { Header } from "./components/Header";

const contentComponents = ContentData.map((item) => (
  <RowComponent
    key={item.text} // TEMP
    component={
      <IconTextComponent
        icon={item.icon}
        text={item.text}
        isSection={item.isSection}
        isGold
      />
    }
    styles={{ height: item.height, marginTop: item.marginTop ?? "" }}
  />
));

export const RightSideContainer = () => (
  <div className="resume-right-container">
    <div className="character-block">
      <div className="character-line" />
    </div>
    <div className="content">
      <Header />
      {contentComponents}
    </div>
    <Triangle />
    {/* <RightSideContent /> */}
  </div>
);
