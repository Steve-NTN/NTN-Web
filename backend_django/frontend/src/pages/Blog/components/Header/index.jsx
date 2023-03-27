import {
  Box,
  Container,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useLocation, useNavigate } from "react-router-dom";
import theme from "../../../../themes";

const Header = () => {
  const [showMobileOptions, setshowMobileOptions] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    setshowMobileOptions(false);
  }, [location?.pathname]);

  const handleClickTogger = (e, type) => {
    setshowMobileOptions(type ? false : !showMobileOptions);
  };

  const options = [
    { label: "HOME", path: "/blog" },
    { label: "ABOUT US", path: "/about-us" },
  ];

  const optionIcons = [
    { icon: <FacebookRoundedIcon />, event: handleClickTogger },
    { icon: <TwitterIcon />, event: handleClickTogger },
  ];

  return (
    <>
      <Box sx={{ position: "sticky", top: 0, bgcolor: "#fff", zIndex: 2 }}>
        <Container maxWidth="xl" sx={{ p: 2 }}>
          <StackLine justifyContent="space-between">
            <HomeTitle variant="h4">NTN BLOG</HomeTitle>

            <Hidden mdDown>
              <Options {...{ options }} att={{ flexDirection: "row" }} />
              <StackLine>
                <OptionIcons {...{ optionIcons }} />
                <SearchBox />
              </StackLine>
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={handleClickTogger}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </StackLine>
        </Container>
        <Divider />
      </Box>
      <Drawer
        open={showMobileOptions}
        anchor="right"
        onClose={(e) => handleClickTogger(e, "close")}
      >
        <Box p={4}>
          <StackLine>
            <HomeTitle variant="h6" mr={2}>
              NTN BLOG
            </HomeTitle>
            <IconButton onClick={handleClickTogger}>
              <CloseIcon />
            </IconButton>
          </StackLine>
          <SearchBox att={{ mt: 2 }} />
          <Options {...{ options }} att={{ "& .option": { mt: 2 } }} />
          <OptionIcons {...{ optionIcons }} att={{ mt: 4 }} />
        </Box>
      </Drawer>
    </>
  );
};

const HomeTitle = styled(Typography)({
  fontWeight: 600,
});

const StackLine = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
});

const OptionText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    color: theme?.palette?.secondary?.underMain1,
  },
}));

const Options = ({ options = [], att }) => {
  const nav = useNavigate();
  const location = useLocation();
  const handleNav = (path) => {
    nav(path);
  };

  const getColor = (path) => {
    let splits = location?.pathname?.split("/");
    let splitsLen = splits?.length;

    return (splitsLen > 2 && splits[splitsLen - 1] === path) ||
      (splitsLen === 2 && path === "")
      ? theme?.palette?.secondary?.main
      : "initial";
  };

  return (
    <Stack sx={att}>
      {options?.map((option, index) => (
        <Box key={index} mr={4} className="option">
          <OptionText
            onClick={() => handleNav(option?.path)}
            sx={{ color: getColor(option?.path) }}
          >
            {option?.label}
          </OptionText>
        </Box>
      ))}
    </Stack>
  );
};

const SearchBox = ({ att }) => {
  return (
    <Box sx={att}>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

const OptionIcons = ({ optionIcons = [], att }) => {
  const CustomIconBtn = styled(IconButton)({
    padding: 2,
    marginRight: 8,
  });

  return (
    <StackLine sx={att}>
      {optionIcons?.map((optionIcon, index) => (
        <CustomIconBtn onClick={optionIcon?.event} key={index}>
          {optionIcon?.icon}
        </CustomIconBtn>
      ))}
    </StackLine>
  );
};

export default Header;
