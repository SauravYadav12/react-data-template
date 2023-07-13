import axios from 'axios';
import { BASE_URL } from '../helpers/constant/contant';

export const makePostReq = async (type, tokenStr = null, slug, body = null) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Beareres${tokenStr}`
    }
  };
  const url = `${BASE_URL}/${slug}`;
  let output = null;
  if (type === 'POST') {
    let { data: res } = await axios.post(url, body, headers);
    output = res;
  }

  if (type === 'PUT') {
    let { data: res } = await axios.post(url, body, headers);
    output = res;
  }
  if (type === 'DELETE') {
    const { data: res } = await axios.delete(url, headers);
    output = res;
  }
  return output;
};
