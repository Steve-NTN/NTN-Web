import axios from 'axios';
import { domain } from '../../configs';

const apiTemplate = async (endpoint, method='GET', data, handleSuccess, handleFail) => {
  await (method === 'POST'? axios.post(`${domain.DOMAIN_API}${endpoint}`, data):
  axios.get(`${domain.DOMAIN_API}${endpoint}`, data))
  .then(res => {
    handleSuccess(res.data);
  })
  .catch(error => {
    handleFail(error)
  })
}

export default apiTemplate;