import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Stack,
  Grid,
  Avatar,
  Breadcrumbs,
  Link,
  TextField,
} from "@mui/material";
import ProjectTimeline from "../timeline/ProjectTimeline";
import { CardForLastWeek } from "../extraComponents/CardForLastWeek";
import { RightSidebar } from "../Sidebar/RightSidebar";
import BasicTabs2 from "../Tabs/BasicTabs2";
import PrimarySearchAppBar from "../header/PrimarySearchAppBar";

export default function DashboardScreen() {
  return (
    <>
      {PrimarySearchAppBar()}

      <Grid container>
        <Grid size={9} sx={{ height: "93vh" }}>
          <Box sx={{ margin: "30px 50px" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {/* ---------------------------------------------------------------------------------------------------------------- */}
              <Box>
                <img src="src/assets/img/images.jpg" width={"50px"} />
              </Box>

              <Stack>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    Projects
                  </Link>
                  <Typography sx={{ color: "text.primary" }}>
                    BNC-123
                  </Typography>
                </Breadcrumbs>
                <Typography variant="h5" fontWeight={"600"}>
                  Customer acquisition via email marketing campaign
                </Typography>
              </Stack>
            </Stack>
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            <Stack spacing={2.2}>
              {BasicTabs2()}

              {/* ---------------------------------------------------------------------------------------------------------------- */}
              <Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight={600}>Project History</Typography>
                  <Typography fontWeight={600} color="grey">
                    Last updated 5 days ago
                  </Typography>
                </Stack>
              </Stack>
              {/* ---------------------------------------------------------------------------------------------------------------- */}
              {ProjectTimeline()}
              {/* ---------------------------------------------------------------------------------------------------------------- */}
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" gap={1}>
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9H0OeqNz2Rp6vcS8oNz7BPezEtzE1lIvR7afSgXANJwL28SfzEa5n4jCh-X1gXO52jo&usqp=CAU"></Avatar>
                  <Typography marginTop={1}>Blair Sandoval</Typography>
                </Stack>
                <Typography marginTop={1}>Next update due in 1 day</Typography>
              </Stack>
              {/* ---------------------------------------------------------------------------------------------------------------- */}
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={2}
                placeholder="Post your update"
              />
              <Typography color="grey" fontWeight={600}>
                Last week
              </Typography>
              {CardForLastWeek()}
              {/* ---------------------------------------------------------------------------------------------------------------- */}
            </Stack>
          </Box>
        </Grid>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        {RightSidebar()}
      </Grid>
    </>
  );
}
