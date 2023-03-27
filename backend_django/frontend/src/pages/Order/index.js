import { Box, Stack } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "../../layouts";
import { About, Cart, Header, Product } from "./components";
import { Home } from "./components";

const Order = () => {
  return (
    <Stack justifyContent="space-between" minHeight="100vh">
      <Header />
      <Box minHeight="50%" width="100%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
      <Footer />
    </Stack>
  );
};

export default Order;
