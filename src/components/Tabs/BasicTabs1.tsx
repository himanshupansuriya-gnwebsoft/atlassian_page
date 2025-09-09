import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import CustomizedMenus from "../customizedMenus/CutomizeMenu";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} sx={{ fontWeight: "600" }} />
            <Tab
              sx={{ padding: "0px" }}
              label={CustomizedMenus("Projects", "#00000099", "white")}
              {...a11yProps(1)}
            />
            <Tab
              sx={{ padding: "0px" }}
              label={CustomizedMenus("Goals", "#00000099", "white")}
              {...a11yProps(2)}
            />
            <Tab
              sx={{ padding: "0px" }}
              label={CustomizedMenus("Teams", "#00000099", "white")}
              {...a11yProps(3)}
            />
            <Tab label="Topics" {...a11yProps(4)} sx={{ fontWeight: "600" }} />
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
