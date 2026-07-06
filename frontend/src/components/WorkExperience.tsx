import { FormatDate } from "../Utils/formatDate";
import { useTranslation } from "../Utils/language";

export const WorkExperience = ({ data }: { data: WorkItem }) => {
  const { t, lang } = useTranslation();

  return (
    <div className="flex flex-col items-start h-full work-experience">
      <div className="flex items-center justify-between w-full">
        <span className="uppercase weight-700 position-text">
          {data?.position}
        </span>
        <span className="uppercase weight-700 date-text m-hidden">{`${FormatDate(data?.from)} - ${FormatDate(data?.to)}`}</span>
      </div>
      <span className="text-gray italic">{data?.company}</span>
      <span className="uppercase weight-700 date-text d-hidden">{`${FormatDate(data?.from)} - ${FormatDate(data?.to)}`}</span>
      <div className="flex flex-col gap-05 projects-block">
        {(data.projects ?? []).map((project) => (
          <div
            key={project._id}
            className="flex flex-col items-start text-left"
          >
            <div>
              <span className="position-text bold pr-10">{t("project")}:</span>
              <span className="position-text">{project.name}</span>
            </div>
            <span>{project?.description?.[lang]}</span>
            {project.link && (
              <div>
                <span className="text-gray bold tech-text">Link: </span>
                <span className="text-gray tech-text">{project.link}</span>
              </div>
            )}
            <div>
              <span className="text-gray tech-text bold">TechStack: </span>
              <span className="text-gray tech-text">
                {project.tech_stack.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
