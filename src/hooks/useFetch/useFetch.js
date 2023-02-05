import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const {data: newData} = await axios.get(url);
      setData(newData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return {data, error, loading};
}

export default useFetch;
