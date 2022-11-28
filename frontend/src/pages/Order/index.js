import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "../../layouts";
import { Cart, Header, Product } from "./components";
import { Home } from "./components";

const Order = () => {


  return (
    <>
      <Header />
      <Box minHeight="50%" width="100%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};

export default Order;
