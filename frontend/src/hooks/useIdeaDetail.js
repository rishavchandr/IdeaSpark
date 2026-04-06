import { useEffect } from "react";
import { fetchIdeaById } from "../services/ideaService";
import { useAsync } from "./useAsync";

export function useIdeaDetail(ideaId) {
  const detailState = useAsync();

  useEffect(() => {
    if (!ideaId) return;

    detailState.run(async () => {
      const response = await fetchIdeaById(ideaId);
      return response.data;
    }).catch(() => {});
  }, [ideaId]);

  return detailState;
}
