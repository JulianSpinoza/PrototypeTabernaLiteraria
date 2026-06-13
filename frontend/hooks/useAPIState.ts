import { useState } from "react";

export function useAPIState() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startLoading = () => {
    setError(null);
    setLoading(true);
  }

  const handleError = (err:any) => {
    console.error(err.message);
    setError(err.message || "Unexpected error");
  };

  const approvedOperation = () => {
    setLoading(false);
  }

  return {
    loading,
    error,
    approvedOperation,
    startLoading,
    handleError,
  };
}
