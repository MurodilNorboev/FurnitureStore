import { Box, Button, ButtonGroup, Divider, Drawer, List } from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AnimatedButton, BtnWrap } from "../styles/navbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DataType } from "../types/maintp";
import { Data } from "../mock/mockDatail";
import { Navlink } from "../styles/LINK";

type Anchor = "left" | "right";

export default function Menus_Icon() {
  const [data, setData] = React.useState<DataType[]>([]);
  React.useEffect(() => {
    const filterdata = Data.filter((i: DataType) => {
      switch (i.label) {
        case "new in":
          return i.id === 1;
        case "sofas":
          return i.id === 10;
        case "table":
          return i.id === 28;
        case "beds":
          return i.id === 46;
        case "linghting":
          return i.id === 55;
        case "kitchen":
          return i.id === 82;
        case "storage":
          return i.id === 127;
        default:
          return false;
      }
    });
    setData(filterdata);
  }, []);

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: "240px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {data.length > 0 ? (
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          {data.map((val, ind) => (
            <Navlink to={`/menu-datail/${val.id && val.label}`} key={ind}>
              <BtnWrap>
                <AnimatedButton>
                  {val.label}
                  <KeyboardArrowDownIcon className="icon" />
                </AnimatedButton>
              </BtnWrap>
            </Navlink>
          ))}
        </List>
      ) : (
        <p>Loading...</p>
      )}

      <Divider />
    </Box>
  );

  return (
    <>
      <div>
        <ButtonGroup variant="outlined">
          {(["right"] as const).map((anchor) => (
            <Button
              key={anchor}
              onClick={toggleDrawer(anchor, true)}
              sx={{
                border: "none",
                color: "black",
                "@media (max-width: 500px)": {
                  display: "none",
                },
              }}
            >
              <MenuIcon />
            </Button>
          ))}
        </ButtonGroup>

        {(["right"] as const).map((anchor) => (
          <Drawer
            key={anchor}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        ))}
      </div>

      <div>
        <ButtonGroup variant="outlined">
          {(["left"] as const).map((anchor) => (
            <Button
              key={anchor}
              onClick={toggleDrawer(anchor, true)}
              sx={{
                border: "none",
                color: "black",
                "@media (max-width: 1500px)": { display: "none" },
                "@media (max-width: 500px)": { display: "flex" },
              }}
            >
              <MenuIcon />
            </Button>
          ))}
        </ButtonGroup>

        {(["left"] as const).map((anchor) => (
          <Drawer
            key={anchor}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        ))}
      </div>
    </>
  );
}
