import getConfigs from "../configs";
import axios from "axios";

const configs = getConfigs();

export const TemplateApi = async (props) => {
  return axios({
    method: props?.method || "post",
    url: `${configs?.APIURL}/api/${props?.url || ""}`,
    data: props?.data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
