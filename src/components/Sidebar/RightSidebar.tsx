import {
  InsertLink,
  MoreHoriz,
  Add,
  People,
  Adjust,
} from "@mui/icons-material";
import {
  Grid,
  Box,
  Stack,
  Button,
  IconButton,
  Typography,
  Avatar,
  Chip,
  AvatarGroup,
} from "@mui/material";
import { data, avatarData } from "../../data/data";
import { CombinationForJanuary } from "../extraComponents/CombinationForJanuary";

export function RightSidebar() {
  return (
    <>
      <Grid size={3.5} sx={{ height: "93vh", backgroundColor: "#aeaeae17" }}>
        <Box sx={{ margin: "30px 50px" }}>
          <Stack spacing={2}>
            <Stack direction="row">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#b5b2b253",
                  color: "black",
                  fontWeight: "600",
                  marginRight: "10px",
                  boxShadow: 0,
                }}
              >
                Following
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#b5b2b253",
                  color: "black",
                  fontWeight: "600",
                  marginRight: "10px",
                  boxShadow: 0,
                }}
              >
                Share
              </Button>
              <IconButton sx={{ height: "35px" }}>
                <InsertLink
                  sx={{ transform: "rotate(135deg)", margin: "5px" }}
                />
              </IconButton>
              <IconButton sx={{ height: "35px" }}>
                <MoreHoriz sx={{ margin: "5px" }} />
              </IconButton>
            </Stack>
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            <Stack>
              <Typography fontWeight={600}>Status</Typography>
              {CombinationForJanuary()}
            </Stack>
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            <Stack spacing={1}>
              <Typography fontWeight={600}>Owner</Typography>
              <Stack direction="row" gap={1}>
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9H0OeqNz2Rp6vcS8oNz7BPezEtzE1lIvR7afSgXANJwL28SfzEa5n4jCh-X1gXO52jo&usqp=CAU"></Avatar>
                <Typography marginTop={1}>Blair</Typography>
              </Stack>
            </Stack>
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            <Stack spacing={1}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                display="flex"
                spacing={1}
              >
                <Stack direction="row" spacing={1}>
                  <Typography fontWeight={600}>Contributors</Typography>
                  <Chip label="5" size="small" />
                </Stack>
                <IconButton>
                  <Add />
                </IconButton>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Avatar src="/profile.jpg" alt="Christina Bell">
                  <People />
                </Avatar>
                <Stack>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    fontSize={14}
                  >
                    iOS engineering
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    5 member
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Stack spacing={1} marginLeft={4}>
                  {data.map((member, index) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      key={index}
                    >
                      <Avatar src={member.src} alt={member.name}>
                        <People />
                      </Avatar>
                      <Stack>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          fontSize={14}
                        >
                          {member.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {member.position}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                  <Stack
                    marginLeft={5}
                    marginTop={2}
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Avatar>
                      <Add />
                    </Avatar>
                    <Typography sx={{ fontWeight: "600", color: "grey" }}>
                      Add team member
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            <Stack spacing={1}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                display="flex"
                spacing={1}
              >
                <Stack direction="row" spacing={1}>
                  <Typography fontWeight={600}>Followers</Typography>

                  <Chip label="10" size="small" />
                </Stack>
                <IconButton>
                  <Add />
                </IconButton>
              </Stack>
              <Stack
                sx={{
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <AvatarGroup max={10}>
                  {avatarData.map((item, index) => (
                    <Avatar key={index} alt={item.alt} src={item.src} />
                  ))}
                </AvatarGroup>
              </Stack>
            </Stack>
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            <Stack spacing={1}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                display="flex"
                spacing={1}
              >
                <Stack direction="row" spacing={2}>
                  <Typography fontWeight={600}>
                    What goals does this contribute to?
                  </Typography>
                </Stack>
                <IconButton>
                  <Add />
                </IconButton>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Adjust
                  sx={{ color: "orange", backgroundColor: "#fff3acff" }}
                />
                <Stack>
                  <Typography fontWeight={600} color="grey">
                    Expand AlpacaTravel market share
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </>
  );
}
