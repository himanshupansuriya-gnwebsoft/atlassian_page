import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu, { type MenuProps } from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/MoreVert";
import AppsIcon from "@mui/icons-material/Apps";
import img1 from "../../assets/img/images.jpg";
import {
  Tabs,
  Tab,
  Button,
  Divider,
  Stack,
  Grid,
  Avatar,
  Breadcrumbs,
  Link,
  TextField,
  Card,
  CardContent,
  Chip,
  Stepper,
  Step,
  StepLabel,
  AvatarGroup,
} from "@mui/material";
import {
  Add,
  Adjust,
  Archive,
  CorporateFare,
  Edit,
  FileCopy,
  HelpOutline,
  InsertLink,
  KeyboardArrowDown,
  MoreHoriz,
  Notifications,
  People,
  Settings,
} from "@mui/icons-material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { green } from "@mui/material/colors";

const steps = [
  "27 Apr – 3 May",
  "4–10 May",
  "11–17 May",
  "8–14 Jun",
  "15–21 Jun",
  "29 Jun – 4 Jul",
  "Last week",
  "This week",
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles("dark", {
          color: "inherit",
        }),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

function CustomizedMenus(
  title: string,
  color?: string,
  backgroundColor?: string
) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
        sx={{
          backgroundColor: backgroundColor,
          color: color,
          fontWeight: "600",
        }}
      >
        {title}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        slotProps={{
          list: {
            "aria-labelledby": "demo-customized-button",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Edit />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopy />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <Archive />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHoriz />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
function BasicTabs1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
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
          <Tab
            label="Topics"
            {...a11yProps(4)}
            sx={{ fontWeight: "600", marginRight: "20px" }}
          />
        </Tabs>
      </Box>
    </Box>
  );
}

function BasicTabs2() {
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
          marginTop: "30px",
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <AppsIcon />
            </IconButton>
            <Stack direction="row" gap={1}>
              <Icon
                icon="mdi:atlassian"
                width="24"
                height="24"
                color="#1976d2"
              />
              <Typography
                variant="h6"
                noWrap
                color="primary"
                fontWeight={600}
                component="div"
                sx={{
                  display: { xs: "none", sm: "block", marginRight: "2.5rem" },
                }}
              >
                ATLASSIAN
              </Typography>
            </Stack>
            {BasicTabs1()}
            {CustomizedMenus("create")}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#b5b2b253",
                color: "black",
                fontWeight: "600",
                marginX: "10px",
                boxShadow: 0,
              }}
            >
              Give Feedback
            </Button>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box sx={{ width: "400px", height: "40px" }}>
                <Search
                  sx={{
                    borderRadius: "8px",
                    border: "2px solid grey",
                    marginTop: "10px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>

              <IconButton size="large" color="inherit">
                <Notifications sx={{ transform: "rotate(45deg)" }} />
              </IconButton>
              <IconButton size="large" color="inherit">
                <CorporateFare sx={{ transform: "translateX(0)" }} />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <HelpOutline />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Settings />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar alt="Travis Howard" src={img1} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

      <Grid container>
        <Grid size={8} sx={{ border: "1px solid grey", height: "93vh" }}>
          <Box sx={{ margin: "30px 50px" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {/* ---------------------------------------------------------------------------------------------------------------- */}
              <Box borderRadius={{}}>
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
              <Box sx={{ width: "100%" }}>
                <Stepper activeStep={1} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label} sx={{ color: green }}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
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

                    <Chip
                      label="On track for January"
                      color="success"
                      size="small"
                    />
                  </Stack>

                  <Box mt={2} component="ul">
                    <Typography variant="subtitle2" fontWeight={600} mb={1}>
                      Shipped:
                    </Typography>

                    <Box component="ul">
                      <Box component="li">
                        <Link href="#">
                          Stay on top of your org in Atlas – filter projects and
                          goals
                        </Link>
                      </Box>
                      <Box component="li">
                        <Link href="#">
                          TC-3314: Add some personality to the "Add comment..."
                          text box
                        </Link>
                      </Box>
                      <Box component="li">
                        Soft delete for workspaces (video demo)
                      </Box>
                      <Box component="li">MS Teams app rename is live</Box>
                    </Box>

                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      mt={2}
                      mb={1}
                    >
                      Read:
                    </Typography>
                    <Box
                      component="ul"
                      style={{ margin: 0, paddingLeft: "1.5rem" }}
                    >
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
                    <Typography variant="body2">
                      📊 Weekly Growth charts
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
              {/* ---------------------------------------------------------------------------------------------------------------- */}
            </Stack>
          </Box>
        </Grid>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <Grid size={4} sx={{ border: "1px solid grey", height: "93vh" }}>
          <Box sx={{ margin: "30px 50px" }}>
            <Stack spacing={3}>
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
                <InsertLink
                  sx={{ transform: "rotate(135deg)", margin: "5px" }}
                />
                <MoreHoriz sx={{ margin: "5px" }} />
              </Stack>
              {/* ---------------------------------------------------------------------------------------------------------------- */}
              <Stack>
                <Typography fontWeight={600}>Status</Typography>
                <Typography>On track for January</Typography>
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

                    <Box
                      sx={{
                        backgroundColor: "#635d5d48",
                        height: "20px",
                        width: "20px",
                        paddingLeft: "px",
                        borderRadius: "15px ",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography>5</Typography>
                    </Box>
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
                  </Stack>
                  <Stack
                    marginLeft={5}
                    marginTop={2}
                    direction="row"
                    spacing={1}
                  >
                    <Add
                      sx={{
                        backgroundColor: "#cec2c25e",
                        borderRadius: "20px",
                      }}
                    />
                    <Typography sx={{ fontWeight: "600", color: "grey" }}>
                      Add team member
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              {/* ---------------------------------------------------------------------------------------------------------------- */}
              <Stack spacing={1}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Stack direction="row" spacing={1}>
                    <Typography fontWeight={600}>Followers</Typography>
                    <Box
                      sx={{
                        backgroundColor: "#635d5d48",
                        height: "22px",
                        width: "22px",
                        paddingLeft: "px",
                        borderRadius: "15px ",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography>10</Typography>
                    </Box>
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
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8P6POnmXE2YJlFMqlJ-b2F_t8bdqTq4CAb-mQWDeI813MCCXefNOg9RjN2AQZwPzy3Y&usqp=CAU"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAcqQaIXxPkXQd4JHTakfT_dqmaE4EiDaqAi1eFd2-yBUyrFn7KndEW6y_qWcxejD7kA&usqp=CAU"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU"
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlTTH6ot0muPMul3PQQS4xem2weT9HIRTZX7t7iaiL5M2ShQIeSaS-Kn_7Av-OxfMvNM&usqp=CAU"
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegbILcbmF5GKm--MgJueO-zn7bSM6xcl8YroeNQL3MlOdOco2pmg0iUrslYtmEMlu6w0&usqp=CAU"
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tpixLG6wOW_rMBrCtmX0AI9AOaQoOE5gQMctLBznSSecombgvPYimJPWMZIp9QSkYcE&usqp=CAU"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9H0OeqNz2Rp6vcS8oNz7BPezEtzE1lIvR7afSgXANJwL28SfzEa5n4jCh-X1gXO52jo&usqp=CAU"
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXq5qGKw0V-doQphkM0sAEemGQG0SU6l6ww&s"
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&s"
                    />
                  </AvatarGroup>
                </Stack>
              </Stack>
              {/* ---------------------------------------------------------------------------------------------------------------- */}
              <Stack spacing={1}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
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
      </Grid>
    </>
  );
}

const data = [
  {
    name: "Blair",
    position: "Senior Developer",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9H0OeqNz2Rp6vcS8oNz7BPezEtzE1lIvR7afSgXANJwL28SfzEa5n4jCh-X1gXO52jo&usqp=CAU",
  },
  {
    name: "Alvin",
    position: "Senior Developer",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU",
  },
  {
    name: "Norah",
    position: "Product Manager",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU",
  },
  {
    name: "Eliot",
    position: "Developer",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAcqQaIXxPkXQd4JHTakfT_dqmaE4EiDaqAi1eFd2-yBUyrFn7KndEW6y_qWcxejD7kA&usqp=CAU",
  },
  {
    name: "Maribel",
    position: "Product Marketing Manager",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXq5qGKw0V-doQphkM0sAEemGQG0SU6l6ww&s",
  },
];
