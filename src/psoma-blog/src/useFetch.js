import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  // useEffect() runs every time we rerender
  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch data for resource');
          }
          console.log(res);
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          }
          else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // return a cleanup function
    return () => abortController.abort();
  }, [url]); // dependency array, only run useEffect on first render (refresh) and for changes in state of dep objs in array

  return { data, isPending, error }
}

export default useFetch;