import { Card, CardContent, Stack, Avatar, Typography, Box, Paper, Link } from "@mui/material";
import { CombinationForJanuary } from "./CombinationForJanuary";

export function CardForLastWeek() {
  return (
    <>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 1,
          border: "1px solid #e0e0e0",
          maxWidth: "100%",
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Stack direction="row" spacing={2}>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXq5qGKw0V-doQphkM0sAEemGQG0SU6l6ww&s"
                alt="Christina Bell"
              />
              <Stack>
                <Typography variant="subtitle1" fontWeight={600}>
                  Christina Bell
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  4 days ago · 21 people viewed
                </Typography>
              </Stack>
            </Stack>

            {CombinationForJanuary()}
          </Stack>

          <Box mt={2} component="ul">
            <Typography variant="subtitle2" fontWeight={600} mb={1}>
              Shipped:
            </Typography>

            <Box component="ul">
              <Box component="li" mb={1}>
                <Paper
                  sx={{ padding: "2px", display: "inline", color: "blue" }}
                >
                  Stay on top of your org in Atlas – filter projects and goals
                </Paper>
              </Box>
              <Box component="li" mb={1}>
                <Paper
                  sx={{ padding: "2px", display: "inline", color: "blue" }}
                >
                  TC-3314: Add some personality to the "Add comment..." text box
                </Paper>
              </Box>
              <Box component="li" mb={1}>
                Soft delete for workspaces (video demo)
              </Box>
              <Box component="li">MS Teams app rename is live</Box>
            </Box>

            <Typography variant="subtitle2" fontWeight={600} mt={2} mb={1}>
              Read:
            </Typography>
            <Box component="ul" style={{ margin: 0, paddingLeft: "1.5rem" }}>
              <Box component="li">
                Product group leadership check-in:{" "}
                <Link href="#">Atlas pre-GA check-in, June 2022</Link>
              </Box>
            </Box>
          </Box>

          <Box
            mt={2}
            p={2}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              bgcolor: "#fafafa",
            }}
          >
            <Typography variant="body2">📊 Weekly Growth charts</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
