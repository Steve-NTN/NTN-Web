const getConfigs = () => {
  let gqlApiUrl = "https://api.github.com/graphql";
  let apiUrl = "http://localhost:8000";
  let gqlApiKey = process.env.REACT_APP_GQL_API_KEY;

  return {
    GQLAPIURL: gqlApiUrl,
    GQLAPIKEY: gqlApiKey,
    APIURL: apiUrl,
  };
};

export default getConfigs;
