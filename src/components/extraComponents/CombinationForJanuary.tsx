import { Brightness1, CalendarMonth } from "@mui/icons-material";
import { Box, Chip, Typography, Stack } from "@mui/material";

export function CombinationForJanuary() {
  return (
    <>
      <Box display="flex" alignItems="center" gap={1}>
        <Chip
          icon={
            <Brightness1
              sx={{ fontSize: 14, height: "10px" }}
              color="success"
            />
          }
          label="On track"
          sx={{
            bgcolor: "#b3ffdf84",
            color: "black",
            fontWeight: 600,
            borderRadius: "8px",
          }}
        />

        <Typography variant="body2">for</Typography>
        <Chip
          icon={<CalendarMonth sx={{ fontSize: 14 }} />}
          label="January"
          sx={{
            bgcolor: "#b5b2b253",
            color: "black",
            fontWeight: 600,
            borderRadius: "8px",
          }}
        />
      </Box>
    </>
  );
}
