import { apiClient } from "../lib/axios";

export async function createIdea(payload) {
  const response = await apiClient.post("/idea", payload);
  return response.data;
}

export async function fetchIdeas() {
  const response = await apiClient.get("/idea");
  return response.data;
}

export async function fetchIdeaById(ideaId) {
  const response = await apiClient.get(`/idea/${ideaId}`);
  return response.data;
}

export async function removeIdea(ideaId) {
  const response = await apiClient.delete(`/idea/${ideaId}`);
  return response.data;
}
