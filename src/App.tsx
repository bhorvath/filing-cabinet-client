import ListPossessions from "./possessions/ListPossessions";
import MainAppBar from "./MainAppBar";
import SideDrawer from "./SideDrawer";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

function App(props: any) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="App">
      <CssBaseline />
      <MainAppBar onHamburgerClick={handleDrawerOpen} />
      <Toolbar />
      <SideDrawer open={drawerOpen} onCloseClick={handleDrawerClose} />
      <ListPossessions />
    </div>
  );
}

export default App;
