import { getUserId } from "../utils/userId";


const userId = getUserId()

export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1",
  userId: userId
};
