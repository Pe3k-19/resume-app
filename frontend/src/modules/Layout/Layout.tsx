import { Photo } from "../../components/Photo";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useResumeData } from "../../hooks/useResumeData";
import { HeaderMobile } from "../Mobile/components/HeaderMobile";
import { ContentMobile } from "../Mobile/components/ContentMobile";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { LeftSideContainer } from "../LeftSideContainer/LeftSideContainer";
import { RightSideContainer } from "../RightSideContainer/RightSideContainer";

export const Layout = () => {
  const { data, loading, error } = useResumeData();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center m-hidden">
        <LanguageSwitcher />
        <div className="flex resume-container">
          <LeftSideContainer data={data?.me} />
          <RightSideContainer
            about={data?.about}
            works={data?.works}
            skills={data?.skills}
          />
        </div>
      </div>
      <div className="flex flex-col resume-mobile-container">
        <div className="absolute rectangle" />
        <LanguageSwitcher />
        <Photo />
        <HeaderMobile data={data?.me} about={data?.about} />
        <ContentMobile
          data={data?.me}
          works={data?.works}
          skills={data?.skills}
        />
      </div>
    </div>
  );
};
