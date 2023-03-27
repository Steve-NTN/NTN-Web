import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { TemplateApi } from "../../service/django";
import BlogPreview from "../BlogPreview";

const BlogPreviews = () => {
  const { category_id } = useParams();
  const [discussions, setDiscussions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    TemplateApi({
      url: "posts/",
      method: "post",
      data: { category_slug: category_id },
    })
      ?.then((res) => {
        setLoading(false);
        setDiscussions(res?.data?.list || []);
      })
      ?.catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [category_id]);
  return (
    <>
      {!loading &&
        discussions?.map((discussion, idx) => (
          <Box key={idx}>
            <BlogPreview {...{ discussion }} />
            {discussions?.length - 1 > idx && <Divider sx={{ my: 4 }} />}
          </Box>
        ))}
      {!loading && discussions?.length < 1 && (
        <Typography fontWeight={600} align="center" sx={{ mt: 4 }}>
          Chưa có bài viết nào
        </Typography>
      )}
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
