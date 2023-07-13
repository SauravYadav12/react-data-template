import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../helpers/constant/contant';
import { toast } from 'react-toastify';

const useFetchData = (type, tokenStr = null, slug) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenStr}`
    }
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fn = async () => {
    try {
      const url = `${BASE_URL}/${slug}`;
      let response = null;
      if (type === 'GET') {
        let { data: res } = await axios.get(url, headers);
        response = res;
      } else setData(response);
    } catch (e) {
      toast.error('Please check your connection', {
        position: toast.POSITION.TOP_CENTER
      });
    }
    setLoading(false);
  };

  useEffect(() => fn(), []);

  return {
    data,
    loading
  };
};
export default useFetchData;
