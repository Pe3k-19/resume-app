import { useEffect, useState } from "preact/compat";
import { Photo } from "../../components/Photo";
import { LeftSideContainer } from "../LeftSideContainer/LeftSideContainer";
import { HeaderMobile } from "../Mobile/components/HeaderMobile";
import { RightSideContainer } from "../RightSideContainer/RightSideContainer";
import { apiFetch } from "../../Utils/api";
import { ContentMobile } from "../Mobile/components/ContentMobile";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";

export const Layout = () => {
  const [data, setData] = useState<MeItem>();

  useEffect(() => {
    apiFetch("/me").then(setData).catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center m-hidden">
        <LanguageSwitcher />
        <div className="flex resume-container">
          <LeftSideContainer />
          <RightSideContainer />
        </div>
      </div>
      <div className="flex flex-col resume-mobile-container">
        <div className="absolute rectangle" />
        <LanguageSwitcher />
        <Photo />
        <HeaderMobile data={data} />
        <ContentMobile data={data} />
      </div>
    </div>
  );
};
