import axios from 'axios';
import { api } from '../../configs';

const apiTemplate = async (endpoint, method='GET', data, handleSuccess, handleFail) => {
  await (method === 'POST'? axios.post(`${api.DOMAIN_API}${endpoint}`, data):
  axios.get(`${api.DOMAIN_API}${endpoint}`, data))
  .then(res => {
    handleSuccess(res.data);
  })
  .catch(error => {
    handleFail(error)
  })
}

export default apiTemplate;