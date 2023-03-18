import {
  Box,
  Collapse,
  Container,
  Divider,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import { GqlTemplateApi } from "../../service/gql";
import { discussionsCategoriesBody } from "../../service/gqlBody";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import BlogCategories from "../BlogCategories";
import { CustomSkeleton } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import BlogPreviews from "../BlogPreviews";
import BlogDetail from "../BlogDetail";

const Main = () => {
  console.log("render");

  return (
    <Container maxWidth="lg" sx={{ my: 2 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={2}
          height="fit-content"
          sx={{ position: { xs: "initial", md: "sticky" }, top: 75 }}
        >
          <LeftMain />
        </Grid>

        <Grid item container xs={12} md={10}>
          <RightMain />
        </Grid>
      </Grid>
    </Container>
  );
};

const LeftMain = () => {
  const nav = useNavigate();
  const { category_id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [categories, setcategories] = React.useState([]);
  const [showFullCategories, setShowFullcategories] = React.useState(true);

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

  const SearchBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: theme?.palette?.background?.main,
    borderRadius: 4,
    width: "100%",
    justifyContent: "space-between",
    "& input": {
      padding: "0 8px",
    },
  }));

  const CategoriesBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme?.palette?.background?.main,
    borderRadius: 4,
  }));

  const CategoryText = styled(Typography)({
    cursor: "pointer",
    marginTop: 16,
    width: "fit-content",
  });

  const handleClickTitle = (category) => {
    nav(`/blog/${category?.id}`);
  };

  return (
    <Box height="100%">
      {/* Thanh tìm kiếm */}
      <SearchBox>
        <InputBase placeholder="Tìm kiếm bài viết" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </SearchBox>

      {/* Thanh loại blog */}
      <CategoriesBox mt={2} p={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontWeight="bold" variant="h6">
            Danh mục
          </Typography>
          <IconButton
            onClick={() => setShowFullcategories(!showFullCategories)}
          >
            <KeyboardArrowDownIcon
              sx={{
                transform: `rotate(${showFullCategories ? "180deg" : "0"})`,
                transition: "rotate 1s ease",
              }}
            />
          </IconButton>
        </Stack>
        <Collapse in={showFullCategories}>
          {!loading &&
            categories?.map((category, index) => (
              <CategoryText
                key={index}
                onClick={() => handleClickTitle(category)}
                sx={{
                  fontWeight: category?.id === category_id ? 600 : "initial",
                }}
              >
                {category?.name}
              </CategoryText>
            ))}
          {loading &&
            Array.from(Array(4).keys())?.map((_, idx) => (
              <CustomSkeleton width="60%" height={35} key={idx} />
            ))}
        </Collapse>
      </CategoriesBox>
    </Box>
  );
};

const RightMain = () => {
  const { category_id, blog_id } = useParams();
  return (
    <>
      <Grid item xs={12} md={9} spacing={2}>
        {!category_id && <BlogPreviews />}
        {category_id && !blog_id && <h1>Blog Category</h1>}
        {category_id && blog_id && <BlogDetail />}
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack height="100%" direction="row">
          <Hidden mdDown>
            <Divider orientation="vertical" />
          </Hidden>
          <Box ml={2} flex={1}>
            <Typography fontWeight={600} variant="h6" mb={2}>
              Tags
            </Typography>
            <BlogCategories />
          </Box>
        </Stack>
      </Grid>
    </>
  );
};

export default Main;
