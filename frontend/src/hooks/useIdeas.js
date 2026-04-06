import { useEffect } from "react";
import { fetchIdeas } from "../services/ideaService";
import { useAsync } from "./useAsync";

export function useIdeas() {
  const ideasState = useAsync({ data: [] });

  useEffect(() => {
    ideasState.run(async () => {
      const response = await fetchIdeas();
      return response.data || [];
    }).catch(() => {});
  }, []);

  return ideasState;
}
