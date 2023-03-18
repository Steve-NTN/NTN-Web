import React from "react";
import { Footer, Header, Main } from "./components";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BlogRoute = () => {
  const MainBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  });

  const ContentMainBox = styled(Box)({
    flex: "1 0 auto",
  });

  return (
    <MainBox>
      <Header />
      <ContentMainBox>
        <Routes>
          <Route element={<Main />} path="" />
          <Route element={<Main />} path="/:category_id" />
          <Route element={<Main />} path="/:category_id/:blog_id" />
          <Route element={<h1>News</h1>} path="/news" />
          <Route element={<h1>About us</h1>} path="/about-us" />
        </Routes>
      </ContentMainBox>
      <Footer />
    </MainBox>
  );
};

export default BlogRoute;
