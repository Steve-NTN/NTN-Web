const getConfigs = () => {
  let apiUrl = "https://api.github.com/graphql";
  let gqlApiKey = process.env.REACT_APP_GQL_API_KEY;

  return {
    APIURL: apiUrl,
    GQLAPIKEY: gqlApiKey,
  };
};

export default getConfigs;
