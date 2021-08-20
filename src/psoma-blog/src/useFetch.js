import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect() runs every time we rerender
  useEffect( () => {
    setTimeout( () => {
      fetch(url)
      .then(res => {
        if(!res.ok)
        {
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
        setIsPending(false);
        setError(err.message);
      });
    }, 1000); 
  }, [url]); // dependency array, only run useEffect on first render (refresh) and for changes in state of dep objs in array

  return {data,isPending,error}
}

export default useFetch;