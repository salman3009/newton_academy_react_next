import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states on url change
    setData(null);
    setLoading(true);
    setError(null);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
export default useFetch;