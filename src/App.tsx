import ListPossessions from "./possessions/ListPossessions";
import MainAppBar from "./MainAppBar";
import SideDrawer from "./SideDrawer";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const drawerWidth = 240;

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="App">
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <MainAppBar onHamburgerClick={toggleDrawer} />
        <Toolbar />
        <SideDrawer open={drawerOpen} width={drawerWidth} />
        <MainView open={drawerOpen}>
          <Paper>
            <ListPossessions />
          </Paper>
        </MainView>
      </LocalizationProvider>
    </div>
  );
}

export default App;

const MainView = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 10,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
