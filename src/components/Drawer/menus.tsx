import { Box, Button, ButtonGroup, Divider, Drawer, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AnimatedButton, BtnWrap } from "../styles/navbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DataType } from "../types/maintp";
import { Data } from "../mock/mockDatail";
import { Navlink } from "../styles/LINK";

import React, { useEffect, useMemo, useState } from "react";
import { Buttones } from "../Navbar/dropodownstyle";
import { baseAPI } from "../../utils/constanst";
import { useNavigate } from "react-router-dom";
import { Data2 } from "../Navbar/dropdownTS";

type Anchor = "left" | "right";

export default function Menus_Icon() {
  const [data, setData] = React.useState<DataType[]>([]);
  const navigate = useNavigate();
  const [BackendData, setBackendData] = useState<any[]>([]);
  const [isFiltered, setIsFiltered] = useState<string | null>(null);

  // Backend ma'lumotlarini olish
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${baseAPI}/product/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resData = await response.json();
      setBackendData(resData.data || []);
    } catch (error: any) {
      console.error("Ma'lumotlarni olishda xato:", error.message || error);
    }
  };

  // Data2 va BackendData ni birlashtirish va guruhlash
  const mergeAndSortData = (backendData: any[], Data2: any[]) => {
    return Data2.map((item: any) => {
      const matchingBackend = backendData.filter(
        (backendItem: any) =>
          backendItem.types === item.label || backendItem.types !== item.label
      );

      return {
        types: item.types,
        _id: item._id,
        id: item.id,
        label: item.label,
        values: [item.value1, item.value2, item.value3],
        backend: matchingBackend.map((b) => ({
          SubCategories: b.SubCategories,
          _id: b._id,
        })),
      };
    });
  };

  const sortedDatas = useMemo(
    () => mergeAndSortData(BackendData, Data2),
    [BackendData]
  );

  useEffect(() => {
    fetchData();
  }, []);

  const handleEnter = (item: any) => {
    if (!item) {
      console.warn("🚨 Warning: handleEnter ga noto'g'ri item kelyapti:", item);
      return;
    }
  };

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
          {sortedDatas.map((group, ind) => (
            <Navlink
              to={`/Test/${group.label}/${group?._id || group._id}`}
              key={ind}
            >
              <BtnWrap
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "200px",
                }}
              >
                <AnimatedButton>
                  {group?.label}
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
