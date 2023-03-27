import {
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import BlogCategories from "../BlogCategories";
import { CustomSkeleton } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import BlogPreviews from "../BlogPreviews";
import BlogDetail from "../BlogDetail";
import { TemplateApi } from "../../service/django";

const Main = () => {
  console.log("render");

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <LeftMain />
        </Grid>

        <Grid item container xs={12} md={3}>
          <RightMain />
        </Grid>
      </Grid>
    </Container>
  );
};

const LeftMain = () => {
  const nav = useNavigate();
  const { category_id, post_id } = useParams();
  const inputRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [categories, setcategories] = React.useState([]);
  const [showSearchInput, setshowSearchInput] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    TemplateApi({ url: "post-categories/", method: "get" })
      ?.then((res) => {
        setLoading(false);
        setcategories(res?.data?.list || []);
      })
      ?.catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const currentCategory = React.useMemo(() => {
    return categories?.find((category) => category?.slug === category_id);
  }, [categories, category_id]);

  const handleClickTitle = (category) => {
    nav(`/blog/${category?.slug}`);
  };

  const handleClickShowSearch = () => {
    inputRef?.current.focus();
    setshowSearchInput(!showSearchInput);
  };

  return (
    <Box height="100%">
      <HeaderBox
        direction="row"
        spacing={2}
        sx={{ position: { xs: "initial", md: "sticky" } }}
      >
        {/* Thanh loại blog */}
        <CategoriesBox
          sx={{ maxWidth: `calc(100% - ${showSearchInput ? 150 : 50}px)` }}
        >
          <CategoryTabs
            variant="scrollable"
            allowScrollButtonsMobile
            value={category_id || ""}
          >
            {!loading &&
              categories?.map((category, index) => (
                <Tab
                  value={category?.slug}
                  key={index}
                  onClick={() => handleClickTitle(category)}
                  sx={{
                    fontWeight: category?.id === category_id ? 600 : "initial",
                  }}
                  label={category?.title}
                />
              ))}
            {loading && (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                {Array.from(Array(4).keys())?.map((_, idx) => (
                  <CustomSkeleton width={50} height={35} key={idx} />
                ))}
              </Stack>
            )}
          </CategoryTabs>
        </CategoriesBox>

        {/* Thanh tìm kiếm */}
        <SearchBox>
          <InputBase
            inputRef={inputRef}
            placeholder="Tìm kiếm bài viết"
            sx={{ width: showSearchInput ? "initial" : 0 }}
          />
          <IconButton onClick={handleClickShowSearch}>
            <SearchIcon />
          </IconButton>
        </SearchBox>
      </HeaderBox>

      {!category_id && <BlogPreviews />}
      {category_id && !post_id && (
        <>
          <Typography fontWeight={600} sx={{ mb: 2 }}>
            Danh sách bài viết thuộc {currentCategory?.title}
          </Typography>
          <BlogPreviews />
        </>
      )}
      {category_id && post_id && <BlogDetail />}
    </Box>
  );
};

const RightMain = () => {
  return (
    <>
      <Stack height="100%" direction="row" mt={2}>
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
    </>
  );
};

const HeaderBox = styled(Stack)({
  top: 75,
  padding: "16px 0",
  backgroundColor: "#fff",
  zIndex: 1,
});

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme?.palette?.background?.main,
  borderRadius: 4,
  maxWidth: "40%",
  justifyContent: "space-between",
  "& input": {
    padding: "0 8px",
  },
  "& .MuiInputBase-root": {
    transition: "width 2s",
  },
}));

const CategoriesBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme?.palette?.background?.main,
  borderRadius: 4,
  width: "100%",
}));

const CategoryTabs = styled(Tabs)(({ theme }) => ({
  minHeight: "40px",
  "& .MuiButtonBase-root": {
    textTransform: "initial",
    minHeight: "32px",
    padding: "12px 8px",
  },
  "& .MuiTabScrollButton-root": {
    width: "32px",
  },
  "& .Mui-selected": {
    color: `${theme.palette.secondary.main} !important`,
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default Main;
