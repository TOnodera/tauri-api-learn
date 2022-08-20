import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Link } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";

interface Props {
  menus: { name: string; path: string }[];
}

export default function SwipeableTemporaryDrawer(props: Props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const anchor = "left";

  return (
    <div>
      <Button onClick={toggleDrawer(anchor, true)}>
        <MenuIcon fontSize="small" />
      </Button>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        <List>
          {props.menus.map((menu) => (
            <ListItem key={menu.name} disablePadding>
              <ListItemButton>
                <Link to={menu.path}>
                  <ListItemIcon>
                    <AdjustIcon />
                  </ListItemIcon>
                  <ListItemText primary={menu.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </div>
  );
}
