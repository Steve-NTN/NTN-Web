import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const BoxBg = styled(Box)(({ theme }) => ({
    backgroundColor: theme?.palette?.background?.main,
  }));

  const BoxIcons = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
  }));

  const optionIcons = [
    { icon: <FacebookRoundedIcon />, event: () => console.log("fb") },
    { icon: <TwitterIcon />, event: () => console.log("tw") },
  ];

  const options = [
    { text: "Liên hệ", event: () => console.log("fb") },
    { text: "Địa chỉ", event: () => console.log("tw") },
  ];

  const ScrollBtn = styled(IconButton)(({ theme }) => ({
    position: "fixed",
    bottom: 16,
    right: 16,
    backgroundColor: theme.palette?.secondary?.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette?.secondary?.main,
    },
  }));

  const handleClickUpTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <BoxBg sx={{ flexShrink: 0 }} mt={4}>
      <Container maxWidth="xl" sx={{ pt: 4, mb: 2 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              NTNBLOG
            </Typography>
            <Typography variant="caption">
              Copyright © 2023-{new Date().getFullYear()} Natural Intelligence
              Ltd. All Rights Reserved.
            </Typography>

            <BoxIcons sx={{ my: 2 }}>
              {optionIcons?.map((option, idx) => (
                <IconButton key={idx}>{option?.icon}</IconButton>
              ))}
            </BoxIcons>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={4} mb={2}>
              {options?.map((option, idx) => (
                <Typography
                  fontWeight={600}
                  key={idx}
                  sx={{ cursor: "pointer" }}
                  onClick={option?.event}
                >
                  {option?.text}
                </Typography>
              ))}
            </Stack>
            <Typography fontStyle="italic">
              "Share knowledge with everyone"
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {scrollTop > 100 && (
        <ScrollBtn onClick={handleClickUpTop}>
          <ArrowUpwardIcon />
        </ScrollBtn>
      )}
    </BoxBg>
  );
};

export default Footer;
