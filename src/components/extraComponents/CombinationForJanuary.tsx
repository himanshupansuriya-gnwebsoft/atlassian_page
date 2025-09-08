import { Brightness1, CalendarMonth } from "@mui/icons-material";
import { Box, Chip, Typography, Stack } from "@mui/material";

export function CombinationForJanuary() {
    return(
        <>
        <Box display="flex" alignItems="center" gap={1}>
                      <Chip
                        icon={
                          <Brightness1
                            sx={{ fontSize: 14 }}
                            htmlColor="#1f845a"
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

                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        for
                      </Typography>

                      <Stack
                        direction="row"
                        gap={0.5}
                        paddingX={1}
                        paddingY={0.5}
                        sx={{
                          backgroundColor: "#b5b2b253", 
                          borderRadius: "8px",
                          color: "black", 
                          fontWeight: 600,
                        }}
                      >
                        <CalendarMonth sx={{ fontSize: 18 }} />
                        <Typography>January</Typography>
                      </Stack>
                    </Box>
        </>
    );
}