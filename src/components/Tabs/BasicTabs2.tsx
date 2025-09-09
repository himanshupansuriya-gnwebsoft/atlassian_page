import { Box, Tabs, Tab } from "@mui/material";
import React from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          marginTop: "15px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="About" {...a11yProps(0)} sx={{ fontWeight: "600" }} />
          <Tab label="Updates" {...a11yProps(1)} sx={{ fontWeight: "600" }} />
          <Tab label="Learnings" {...a11yProps(2)} sx={{ fontWeight: "600" }} />
          <Tab label="Risks" {...a11yProps(3)} sx={{ fontWeight: "600" }} />
          <Tab label="Decisions" {...a11yProps(4)} sx={{ fontWeight: "600" }} />
        </Tabs>
      </Box>
    </Box>
  );
}
