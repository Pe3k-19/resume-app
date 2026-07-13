import { useEffect, useState } from "preact/hooks";
import { apiFetch } from "../Utils/api";
import { DivideDataIntoColumns } from "../Utils/data";

export function useResumeData() {
  const [data, setData] = useState<ResumeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      apiFetch("/me"),
      apiFetch("/abouts"),
      apiFetch("/works"),
      apiFetch("/skills/?results=20"),
    ])
      .then(([me, about, works, skills]) =>
        setData({
          me,
          about,
          works,
          skills: DivideDataIntoColumns(skills, 7, "React"),
        }),
      )
      .catch((e) => {
        console.error(e);
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}
