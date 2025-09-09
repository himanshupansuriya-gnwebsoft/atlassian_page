import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function ProjectTimeline() {
  const steps = [
    {
      label: "27 Apr – 3 May",
      status: "done",
      icon: <CheckCircleOutlineIcon />,
    },
    { label: "14–10 May", status: "warning", icon: <WarningAmberIcon /> },
    { label: "11–17 May", status: "warning", icon: null },
    { label: "8–14 Jun", status: "done", icon: <CalendarMonthIcon /> },
    { label: "15–21 Jun", status: "done", icon: null },
    { label: "29 Jun – 4 Jul", status: "warning", icon: null },
    { label: "Last week", status: "warning", icon: <WarningAmberIcon /> },
    { label: "This week", status: "done", icon: <CalendarMonthIcon /> },
  ];

  const getColor = (status: string) => {
    switch (status) {
      case "done":
        return "#1f845a"; // green
      case "active":
        return "#1f845a"; // filled green
      case "warning":
        return "#e2b203"; // yellow
      case "pending":
      default:
        return "#c1c7d0"; // g
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Stack direction="row" alignItems="center" spacing={0.2}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                bgcolor:
                  step.status === "active" ? getColor(step.status) : "white",
                border: `5px solid ${getColor(step.status)}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color:
                  step.status === "active" ? "white" : getColor(step.status),
                fontSize: 14,
              }}
            >
              {step.icon}
            </Box>

            {index !== steps.length && (
              <Box
                sx={{
                  flex: 1,
                  height: "10px",
                  borderRadius: "5px",
                  bgcolor: getColor(step.status),
                  opacity: step.status === "pending" ? 0.4 : 1,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Stack>

      <Stack direction="row" justifyContent="space-between" mt={1}>
        {steps.map((step, index) => (
          <Typography
            key={index}
            variant="caption"
            sx={{
              color: "grey",
              fontWeight: 600,
              textAlign: "center",
              flex: 1,
            }}
          >
            {step.label}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
