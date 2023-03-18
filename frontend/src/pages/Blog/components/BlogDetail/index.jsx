import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { GqlTemplateApi } from "../../service/gql";
import { discussionDetail } from "../../service/gqlBody";
import { CustomSkeleton } from "../../../../components";
import { styled } from "@mui/system";
import { validateCommon } from "../../../../helpers";

const BlogDetail = () => {
  const [blogDetail, setBlogDetail] = useState();
  const [loading, setLoading] = React.useState(false);
  const nav = useNavigate();

  const { blog_id } = useParams();
  const HTMLBody = styled(Box)({
    "& img": {
      maxHeight: 350,
    },
  });

  const BackBox = styled(Stack)({
    alignItems: "center",
    width: "fit-content",
    cursor: "pointer",
  });

  React.useEffect(() => {
    setLoading(true);

    GqlTemplateApi(discussionDetail(blog_id))
      ?.then((res) => {
        setLoading(false);
        setBlogDetail(res?.data?.data?.repository?.discussion);
      })
      ?.catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [blog_id]);

  const handleClickBack = () => {
    nav(-1);
  };

  return (
    <Box pr={{ xs: 0, md: 2 }}>
      <BackBox direction="row" sx={{ mb: 2 }} onClick={handleClickBack}>
        <IconButton>
          <ArrowBackIcon sx={{ width: 20 }} />
        </IconButton>
        <Typography fontWeight={500}>Quay lại</Typography>
      </BackBox>
      {loading && <CustomSkeleton width="60%" height={35} />}
      {!loading && (
        <Box>
          <Typography fontWeight={600} variant="h6">
            {blogDetail?.title}
          </Typography>
          <Typography variant="caption">
            {validateCommon("formatCreation", blogDetail?.createdAt, "T")}
          </Typography>
        </Box>
      )}

      {!loading && <HTMLBody>{parse(blogDetail?.bodyHTML || "")}</HTMLBody>}
      {loading && <CustomSkeleton width="60%" height={350} />}
    </Box>
  );
};

export default BlogDetail;
