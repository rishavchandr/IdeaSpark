import { useCallback, useState } from "react";

export function useAsync(initialState = {}) {
  const [state, setState] = useState({
    data: null,
    error: "",
    isLoading: false,
    ...initialState,
  });

  const run = useCallback(async (asyncFn) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: "",
    }));

    try {
      const data = await asyncFn();
      setState({
        data,
        error: "",
        isLoading: false,
      });
      return data;
    } catch (error) {
      setState({
        data: null,
        error: error.message || "Request failed",
        isLoading: false,
      });
      throw error;
    }
  }, []);

  const setData = useCallback((updater) => {
    setState((prev) => ({
      ...prev,
      data: typeof updater === "function" ? updater(prev.data) : updater,
    }));
  }, []);

  const resetError = useCallback(() => {
    setState((prev) => ({
      ...prev,
      error: "",
    }));
  }, []);

  return {
    ...state,
    run,
    setData,
    resetError,
  };
}
