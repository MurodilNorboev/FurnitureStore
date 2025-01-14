import React, { useState, useEffect, useRef } from "react";
import { baseAPI } from "../../../../utils/constanst";
import axios from "axios";
import { Container } from "./style";
import { PagesName } from "../../../main.all_categorie/catalog.page/catalog";
import home from "../../../../assets/home.svg";
import delet from "../../../../assets/remove.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../Redux/store";
import {
  setCarts,
  setItemCosts,
  updateCartItemCount,
} from "../../../Redux/cartsSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import toast, { Toaster } from "react-hot-toast";

const Payment = () => {

  return (
    <Container>
      <PagesName style={{ marginLeft: "15px" }}>
        <h3>Home</h3>
        <img src={home} alt="img" />
        <h4>Profile</h4>
      </PagesName>
      <Toaster position="top-right" />

      <h1>Payment</h1>
    </Container>
  );
};

export default Payment;
