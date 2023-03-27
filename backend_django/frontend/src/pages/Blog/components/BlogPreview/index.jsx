import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

import { CustomSkeleton } from "../../../../components";
import { formatImageUrl } from "../../../../helpers";

const BlogPreview = ({ discussion, loading, ...props }) => {
  const nav = useNavigate();
  const CustomBox = styled(Box)({
    display: "flex",
    "& .img": {
      width: "30%",
      height: 150,
      objectFit: "cover",
      cursor: "pointer",
    },
  });

  const Title = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    marginBottom: 16,
    cursor: "pointer",
    width: "fit-content",
    "&:hover": {
      color: theme?.palette?.secondary?.main,
    },
  }));

  const handleClickTitle = () => {
    nav(`/blog/${discussion?.category_slug}/${discussion?.slug}`);
  };

  return (
    <CustomBox {...props}>
      {loading ? (
        <CustomSkeleton variant="rounded" className="img" />
      ) : (
        <img
          src={formatImageUrl(discussion?.preview_img)}
          alt="img"
          className="img"
          onClick={handleClickTitle}
        />
      )}
      <Box px={2} flex={1}>
        {loading ? (
          <>
            <CustomSkeleton height={16} width="85%" />
            <CustomSkeleton height={16} width="40%" />
            <CustomSkeleton height={16} width="40%" />
          </>
        ) : (
          <>
            <Title variant="h6" onClick={handleClickTitle}>
              {discussion?.title}
            </Title>
            {(discussion?.content || "")?.substring(0, 150)} ...
          </>
        )}
      </Box>
    </CustomBox>
  );
};

export default BlogPreview;
