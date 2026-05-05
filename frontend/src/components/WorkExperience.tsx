import { useTranslation } from "../Utils/language";

export const WorkExperience = ({ data }: { data: WorkItem }) => {
  const { t, lang } = useTranslation();

  return (
    <div className="workExperience">
      <div className="flex align-center space-between width-100">
        <span className="positionText">{data?.position}</span>
        <span className="dateText">{`${data?.from} - ${data?.to}`}</span>
      </div>
      <span className="companyText">{data?.company}</span>
      <div className="projectsBlock">
        {(data.projects ?? []).map((project) => (
          <div key={project._id} className="projectBlock">
            <div>
              <span className="projectText bold pr-10">{t("project")}:</span>
              <span className="projectText">{project.name}</span>
            </div>
            <span>{project?.description?.[lang]}</span>
            {project.link && (
              <div>
                <span className="techText bold">Link: </span>
                <span className="techText">{project.link}</span>
              </div>
            )}
            <div>
              <span className="techText bold">TechStack: </span>
              <span className="techText">{project.tech_stack.join(", ")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
