import { Chip, Stack } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { CustomSkeleton } from "../../../../components";
import { GqlTemplateApi } from "../../service/gql";
import { discussionsCategoriesBody } from "../../service/gqlBody";

const BlogCategories = () => {
  const [loading, setLoading] = React.useState(false);
  const [categories, setcategories] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    GqlTemplateApi(discussionsCategoriesBody)
      ?.then((res) => {
        setLoading(false);
        setcategories(
          res?.data?.data?.repository?.discussionCategories?.nodes || []
        );
      })
      ?.catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const CustomChip = styled(Chip) ({
    fontSize: 10
  });

  return (
    <>
      {!loading &&
        categories?.map((category, index) => (
          <CustomChip key={index} label={category?.name} sx={{ mr: 1, mb: 1 }} />
        ))}

      {loading && (
        <Stack direction="row" flexWrap="wrap">
          {Array.from(Array(4).keys())?.map((_, index) => (
            <CustomSkeleton key={index} width={55} height={35} sx={{ mr: 1 }} />
          ))}
        </Stack>
      )}
    </>
  );
};

export default BlogCategories;
