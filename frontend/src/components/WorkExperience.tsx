import { useTranslation } from "../Utils/language";

export const WorkExperience = ({ data }: { data: WorkItem }) => {
  const { t, lang } = useTranslation();

  return (
    <div className="flex flex-col items-start h-full workExperience">
      <div className="flex items-center justify-between w-full">
        <span className="uppercase weight-700 positionText">
          {data?.position}
        </span>
        <span className="uppercase weight-700 size-14">{`${data?.from} - ${data?.to}`}</span>
      </div>
      <span className="text-gray italic">{data?.company}</span>
      <div className="flex flex-col gap-05 projectsBlock">
        {(data.projects ?? []).map((project) => (
          <div
            key={project._id}
            className="flex flex-col items-start text-left"
          >
            <div>
              <span className="positionText bold pr-10">{t("project")}:</span>
              <span className="positionText">{project.name}</span>
            </div>
            <span>{project?.description?.[lang]}</span>
            {project.link && (
              <div>
                <span className="text-gray bold techText">Link: </span>
                <span className="text-gray techText">{project.link}</span>
              </div>
            )}
            <div>
              <span className="text-gray techText bold">TechStack: </span>
              <span className="text-gray techText">
                {project.tech_stack.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
