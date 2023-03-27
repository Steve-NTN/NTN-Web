import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { CustomSkeleton } from "../../../../components";
import { styled } from "@mui/system";
import { formatImageUrl, validateCommon } from "../../../../helpers";
import { TemplateApi } from "../../service/django";

const BlogDetail = () => {
  const [blogDetail, setBlogDetail] = useState();
  const [loading, setLoading] = React.useState(false);
  // const nav = useNavigate();

  const { category_id, post_id } = useParams();
  const HTMLBody = styled(Box)({
    "& img": {
      maxHeight: 350,
      maxWidth: "100%",
    },
  });

  const preImg = {
    width: "100%",
    maxHeight: 200,
    objectFit: "cover",
    marginTop: 8,
  };

  React.useEffect(() => {
    setLoading(true);

    TemplateApi({
      url: "post-detail/",
      data: { category_slug: category_id, post_slug: post_id },
    })
      ?.then((res) => {
        setLoading(false);
        setBlogDetail(res?.data);
      })
      ?.catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [category_id, post_id]);

  // const handleClickBack = () => {
  //   nav(-1);
  // };

  return (
    <Box pr={{ xs: 0, md: 2 }}>
      {loading && <CustomSkeleton width="60%" height={35} />}
      {!loading && (
        <Box>
          <Typography fontWeight={600} variant="h6">
            {blogDetail?.title}
          </Typography>
          <Typography variant="caption">
            {validateCommon("formatCreation", blogDetail?.created_on, "T")}
          </Typography>

          <img
            style={preImg}
            src={formatImageUrl(blogDetail?.preview_img)}
            alt="img"
          />
        </Box>
      )}

      {!loading && (
        <HTMLBody>
          <Markdown>{blogDetail?.content || ""}</Markdown>
        </HTMLBody>
      )}
      {loading && <CustomSkeleton width="60%" height={350} />}
    </Box>
  );
};

export default BlogDetail;
