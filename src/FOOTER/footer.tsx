import React, { useState } from "react";
import una from "../assets/Logo.svg";
import CircleBtn from "../assets/CircleBtn.svg";
import FSBK from "../assets/facebook.svg";
import TwTr from "../assets/twitter.svg";
import Circle2 from "../assets/CircleBtn2.svg";
import { FooterCon } from "../components/styles/footer";
import { IconButton } from "@mui/material";
import { AnimatedButton, BtnWrap } from "../components/styles/navbar";
import { Navlink } from "../components/styles/LINK";
import emailjs from "emailjs-com";
import { Box } from "@mui/joy";
import toast from "react-hot-toast";

const FooterComponent = () => {
  const [email, setEmail] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m4t5v1d",
        "template_ahjdy59",
        {
          user_email: email,
        },
        "jSN7HYs8ebbzEF7Ox"
      )
      .then(
        (result) => {
          toast.success(result.text);
          setEmail("");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    //// BtnWrap
    <>
      <FooterCon>
        <div className="footer_0">
          <div className="footer_menus_0">
            <img src={una} alt="" />
          </div>
          <div className="footer_menus_01">
            <Navlink to={"/about"}>
              <div className="tt">
                <AnimatedButton>
                  <h5>about</h5>
                </AnimatedButton>
              </div>
            </Navlink>

            <Navlink to={"/blog"}>
              <div className="tt">
                <AnimatedButton>
                  <h5>blog</h5>
                </AnimatedButton>
              </div>
            </Navlink>

            <Navlink to={"/discount"}>
              <div className="tt">
                <AnimatedButton>
                  <h5>discounts</h5>
                </AnimatedButton>
              </div>
            </Navlink>

            <Navlink to={"/for_partners"}>
              <div className="tt">
                <AnimatedButton>
                  <h5>for partners</h5>
                </AnimatedButton>
              </div>
            </Navlink>

            <Navlink to={"/contacts"}>
              <div className="tt">
                <AnimatedButton>
                  <h5>contacts</h5>
                </AnimatedButton>
              </div>
            </Navlink>
          </div>
        </div>

        <div className="footer_2">
          <div className="footer_3">
            <div className="footer_three">
              <h5>information</h5>
              <a href="/contacts">
                <h6>Shipping</h6>
              </a>
              <a href="/contacts">
                <h6>Payment options</h6>
              </a>
              <a href="/about">
                <h6>Terms and Conditions</h6>
              </a>
              <a href="/blog">
                <h6>FAQ</h6>
              </a>
            </div>

            <div className="footer_three">
              <div className="footer_menus_2">
                <h5>schedule</h5>
                <a href="/contacts">
                  <h6>
                    We accept orders <br /> from 9:00 to 22:00
                  </h6>
                </a>
              </div>
              <div className="footer_menus_2" style={{ marginTop: "20px" }}>
                <h5>Shipping orders</h5>
                <a href="/contacts">
                  <h6>
                    Mon-Sat – 9:00-19:00 <br /> Sun – weekend
                  </h6>
                </a>
              </div>
            </div>

            <div className="footer_three a">
              <h5>stay in touch</h5>
              <h6>siteemail@gmail.com</h6>
              <a href="/contacts">
                <h6>(406) 555-0120</h6>
              </a>
              <a href="/contacts">
                <h6>(480) 555-0103</h6>
              </a>
              <div className="imglar">
                <img src={FSBK} alt="facebook" />
                <img src={TwTr} alt="twitter" />
              </div>
            </div>
          </div>

          <div className="booter4_wrap">
            <div className="footer_4">
              <h5>SUBSCRIBE</h5>
              <h6>
                Get the latest news and promotions <br /> on your inbox
              </h6>
              <Box className="box" component="form" onSubmit={handleSend}>
                <div className="input_wrap">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <IconButton className="buttons" type="submit">
                    <img src={Circle2} alt="Btn_img" />
                  </IconButton>
                </div>
              </Box>
            </div>
            <div className="footer_three b">
              <h5>stay in touch</h5>
              <h6>siteemail@gmail.com</h6>
              <h6>(406) 555-0120</h6>
              <h6>(480) 555-0103</h6>
              <div className="imglar">
                <img src={FSBK} alt="facebook" />
                <img src={TwTr} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="bottom">
            <h6>2022©All rights reserved</h6>
          </div>
          <div className="bottom">
            <a href={"#"}>
              <IconButton>
                <img src={CircleBtn} alt="" />
              </IconButton>
            </a>
          </div>
        </div>
      </FooterCon>
    </>
  );
};
export default FooterComponent;
