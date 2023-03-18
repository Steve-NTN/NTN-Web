import { Box, Divider } from "@mui/material";
import React from "react";
import { GqlTemplateApi } from "../../service/gql";
import { discussionsBody } from "../../service/gqlBody";
import BlogPreview from "../BlogPreview";

const BlogPreviews = () => {

  const [discussions, setDiscussions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    GqlTemplateApi(discussionsBody)
      ?.then((res) => {
        setLoading(false);
        setDiscussions(res?.data?.data?.repository?.discussions?.nodes || []);
      })
      ?.catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <>
      {!loading &&
        discussions?.map((discussion, idx) => (
          <Box key={idx}>
            <BlogPreview {...{ discussion }} />
            {discussions?.length - 1 > idx && <Divider sx={{ my: 4 }} />}
          </Box>
        ))}
      {loading &&
        Array.from(Array(2).keys())?.map((_, idx) => (
          <Box key={idx} mb={4}>
            <BlogPreview loading />
            {1 > idx && <Divider sx={{ my: 4 }} />}
          </Box>
        ))}
    </>
  );
};

export default BlogPreviews;
