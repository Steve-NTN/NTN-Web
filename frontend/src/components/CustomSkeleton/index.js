import { Skeleton } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const CustomSkeleton = (props) => {
  const MySkeleton = styled(Skeleton)({});

  return <MySkeleton animation="wave" {...props} />;
};

export default CustomSkeleton;
