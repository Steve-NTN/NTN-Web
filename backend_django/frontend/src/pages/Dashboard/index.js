import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../layouts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import useStyles from "./styles";

const Dashboard = () => {
  const nav = useNavigate();
  const classes = useStyles;
  const features = [
    { label: "Order", icon: <ShoppingCartIcon />, link: "order" },
    { label: "Blog", icon: <NewspaperIcon />, link: "blog" },
    { label: "Chat", icon: <QuestionAnswerIcon />, link: "chat" },
    { label: "Google map", icon: <TravelExploreIcon />, link: "ggmap" },
  ];

  const handleClickFeature = (feature) => {
    nav(feature?.link);
  };

  return (
    <>
      <Header />
      <Container p={2}>
        <Grid container spacing={2} mt={4}>
          {features?.map((feature, index) => (
            <Grid item xs={6} key={index}>
              <Card
                sx={{ p: 2, ...classes.featureBox }}
                onClick={() => handleClickFeature(feature)}
              >
                {feature?.icon}
                <Typography className="featureName">
                  {feature?.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
