import getConfigs from "../configs";
import axios from "axios";

const configs = getConfigs();

export const GqlTemplateApi = async (data) => {
  return axios.post(
    configs?.APIURL,
    { query: data },
    {
      headers: {
        Authorization: `token ${configs?.GQLAPIKEY}`,
        "Content-Type": "application/json",
      },
    }
  );
};
