import UNA from "../../assets/Logo.svg";
import { AnimatedButton, BtnWrap, NavbarCon } from "../styles/navbar";
import userimg from "../../assets/user.svg";
import Menus_Icon from "../Drawer/menus";
import MultiCarousel from "../Navbar/Cart/Search/lupa";
import BasicMenu from "../Navbar/Cart/hovercart/cart";
import Tajriba from "../Navbar/dropdownmenus";
import { Navlink } from "../styles/LINK";
import axios from "axios";
import { baseAPI } from "../../utils/constanst";
import React, { useState, useEffect } from "react";
import IconCheckboxes from "../Likes/like";

const NavbareComponent = () => {
  const [profile, setProfile] = useState<any>(null);
  const [message, setMessage] = useState("");

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage("copied!");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      setMessage("Failed to copy text");
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${baseAPI}/userFur/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <NavbarCon>
      <div className="leftCon_wrap">
        <div className="menu_icon_wrap">
          <Menus_Icon />
        </div>

        <Navlink to={"/"}>
          <div>
            <img className="ab" src={UNA} alt="Logo" />
          </div>
        </Navlink>

        <div className="left_menus_wrap">
          <Tajriba />
        </div>
      </div>

      <div className="right_menus_wrap">
        <h5
          className="h5_wrap"
          onClick={() => handleCopy("(8210) 5714-7887")}
          style={{ paddingBottom: "8px", margin: "0px" }}
        >
          (8210) 5714-7887
        </h5>
        {message && (
          <div
            style={{
              color: "gray",
              position: "absolute",
              marginLeft: "165px",
              marginBottom: "30px",
            }}
          >
            {message}
          </div>
        )}

        <div style={{ width: "30px" }}>
          <MultiCarousel />
        </div>

        <Navlink to={profile ? "/profile" : "/login"}>
          <BtnWrap>
            <AnimatedButton>
              <img src={userimg} alt="" style={{ marginBottom: "10px" }} />
            </AnimatedButton>
          </BtnWrap>
        </Navlink>

        <div>
          {/* <Badge
            color="warning"
            badgeContent={
              carts.length === 0 ? null : <YourComponent cartLength={carts.length} />
            }
          > */}
          <BasicMenu />
          {/* </Badge> */}
        </div>

        <div>
          <IconCheckboxes />
        </div>
      </div>
    </NavbarCon>
  );
};

export default NavbareComponent;
