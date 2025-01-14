import React from "react";
import { PagesName } from "../../../main.all_categorie/catalog.page/catalog";
import { Tname } from "../../../types/maintp";
import home from "../../../../assets/home.svg";
import {
  ErrorCon,
  ErrorContent,
  ErrorMidl,
  OrderChesckout,
} from "./orederStyle";
import { Navlink } from "../../../styles/LINK";
import { BtnWrap4 } from "../../../styles/main";
import circle from "../../../../assets/circlewhite.svg";

const OrderComponent = (Props: Tname) => {
  return (
    <div>
      <PagesName style={{ marginLeft: "15px" }}>
        <h3>Home</h3>
        <img src={home} alt="img" />
        <h3>Checkout</h3>
        <img src={home} alt="img" />
        <h4>{Props.name}</h4>
      </PagesName>

      <OrderChesckout>
        <ErrorContent>
          <ErrorCon>
            <ErrorMidl>
              <h5>id 4567</h5>
              <h2>
                Thank you! Your order <br /> has placed succesfully
              </h2>
              <p>
                An order confirmation email has been sent to your e-mail address{" "}
                <br /> alexinfo@gmail.com. Expect further messages
              </p>
              <Navlink to={"/"}>
                <BtnWrap4>
                  <div className="wrapper">
                    <button>
                      check mailbox
                      <img src={circle} alt="" />
                    </button>
                  </div>
                </BtnWrap4>
              </Navlink>
            </ErrorMidl>
          </ErrorCon>
        </ErrorContent>
      </OrderChesckout>
    </div>
  );
};

export default OrderComponent;
