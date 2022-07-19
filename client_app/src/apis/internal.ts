import axios from 'axios';

const BASE_URL = `http://localhost:3000`;

export const addDevice = async (payload: object) => {
  const result = await axios
    .get(`${BASE_URL}/command`, payload)
    .then((response) => response.data)
    .catch((err) => err);

  return result;
};
