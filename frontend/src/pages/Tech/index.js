import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

import { Header } from "../../layouts";
import { AsynAwait, UI } from "./components";
import useStyles from "./styles";

const Tech = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Box>
      <Header />
      <Box className={classes.content} px={4}>
        <Tabs
          value={selectedTab}
          onChange={(e, newValue) => setSelectedTab(newValue)}
        >
          <Tab label="AsynAwait" />
          <Tab label="UseMemo" />
          <Tab label="UI" />
        </Tabs>

        <CurrentTab value={selectedTab} />
      </Box>
    </Box>
  );
};

const CurrentTab = ({ value }) => {
  console.log(value);
  switch (value) {
    case 0:
      return <AsynAwait />;

    case 1:
      return <h1>UseMemo</h1>;

    case 2:
      return <UI />;
    default:
      break;
  }
};

export default Tech;
