import { PagesName } from "../../../main.all_categorie/catalog.page/catalog";
import {
  Chescout_Bottom,
  Chescout_Top,
  Chescout_containerWrapper,
  Chescout_one,
  Container_Chescout,
  Containre_Chescout_Content,
  Content,
  Content_chesckout,
  Datails,
  Imag,
  LeftDiv,
  Right_Container,
} from "./checkoutt";
import home from "../../../../assets/home.svg";
import { Bottom_Container, DatailCart, Top_Container } from "../datail";
import Checkbox from "@mui/joy/Checkbox";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { baseAPI } from "../../../../utils/constanst";
import { useNavigate } from "react-router-dom";
interface NameT {
  name: string;
}

const Checkout = (Props: NameT) => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    userId: "603d9f3f494f1c3a9c4f2345",
    deliveryAddress: {
      country: "",
      city: "",
      street: "",
      Appartment: "",
      zip_code: "",
      comment: "",
    },
    userinfo: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
    },
  });
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<any[]>([]);
  const [set, setSet] = useState<any[]>([]);
  const [setb, setsetb] = useState<any[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Agar name 'deliveryAddress.' bilan boshlasa, deliveryAddressni yangilaymiz
    if (name.startsWith("deliveryAddress.")) {
      const key = name.split(".")[1]; // deliveryAddress.country kabi
      setFormdata((prev) => ({
        ...prev,
        deliveryAddress: {
          ...prev.deliveryAddress,
          [key]: value, // yangi qiymatni yangilash
        },
      }));
    }
    // Agar name 'userinfo.' bilan boshlasa, userinfo ni yangilaymiz
    else if (name.startsWith("userinfo.")) {
      const key = name.split(".")[1]; // userinfo.first_name kabi
      setFormdata((prev) => ({
        ...prev,
        userinfo: {
          ...prev.userinfo,
          [key]: value, // yangi qiymatni yangilash
        },
      }));
    }
    // Boshqa umumiy inputlar uchun
    else {
      setFormdata((prev) => ({ ...prev, [name]: value })); // formning boshqa qismlarini yangilash
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseAPI}/payment/create-order`,
        formdata
      );
      if (response.data.success) {
        toast.success("Order created successfully!");
        setTimeout(() => {
          navigate("/payment");
        }, 1000);
      } else {
        toast.error("Failed to create order!");
      }
    } catch (error: any) {
      toast.error("Error creating order: " + error.message);
    }
  };

  useEffect(() => {
    const userId1 = "603d9f3f494f1c3a9c4f2345";
    const fetchCreatedData = async (userId: string, orderId: string) => {
      try {
        const res = await fetch(`${baseAPI}/payment/cart/${userId1}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        const filter = data.cart;
        const filter2 = filter.items;
        const uniqueItems = filter2.filter(
          (value: any, index: any, self: any) =>
            index === self.findIndex((t: any) => t.product._id === value.product._id)
        );
  
        const totalCostSum = uniqueItems.reduce((acc: number, val: any) => acc + val.totalCost, 0);
        const a: any = data.cart.totalCost;
        const costs: any = a === a ? a : a - 15;
        const costs2: any = a - costs;

        setData(uniqueItems);
        setSet(a);
        setsetb(totalCostSum);
        setTotal(costs2);
  
      } catch (error: any) {
        toast.error("Error fetching order data: " + error.message);
      }
    };
  
    fetchCreatedData(userId1, "645d9f3f494f1c3a9c4f2345");
  }, []);

  return (
    <Container_Chescout>
      <Toaster position="top-right" />

      <DatailCart>
        <PagesName style={{ marginLeft: "15px" }}>
          <h3>Home</h3>
          <img src={home} alt="img" />
          <h4>{Props.name}</h4>
        </PagesName>

        <Chescout_containerWrapper
          onSubmit={handleSubmit}
          className="Chescout_containerWrapper"
        >
          <Containre_Chescout_Content className="Containre_Chescout_Content">
            <Content_chesckout>
              <div className="h22">
                <h2>personal info</h2>
              </div>

              <Chescout_Top className="Chescout_Top">
                <Chescout_one className="Chescout_one">
                  <div className="LasName_Con d">
                    <label htmlFor="first name">first name</label>
                    <input
                      type="text"
                      name="userinfo.first_name"
                      placeholder="Johnathan"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="LasName_Con d">
                    <label htmlFor="phone">phone</label>
                    <input
                      type="text"
                      placeholder="+4 098 677 67 26"
                      name="userinfo.phone_number"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Chescout_one>
                <Chescout_one className="Chescout_one">
                  <div className="LasName_Con d">
                    <label htmlFor="last name">last name</label>
                    <input
                      type="text"
                      name="userinfo.last_name"
                      placeholder="Doeherty"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="LasName_Con d">
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="userinfo.email"
                      placeholder="customer_1995@gmail.com"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Chescout_one>
              </Chescout_Top>

              <Chescout_Bottom>
                <Checkbox label="Warning" color="warning" />
                <h4>don’t call me</h4>
              </Chescout_Bottom>

              <div className="tr"></div>

              <div className="h22">
                <h2>delivery</h2>
              </div>

              <Chescout_Top className="Chescout_Top">
                <Chescout_one className="Chescout_one">
                  <div className="LasName_Con">
                    <select
                      className="Accordion"
                      name="deliveryAddress.country"
                      onChange={handleChange}
                      value={formdata.deliveryAddress.country}
                      required
                    >
                      <option value="Uzbekiston">Uzbekiston</option>
                      <option value="South Korea">South Korea</option>
                    </select>
                  </div>
                  <div className="LasName_Con">
                    <input
                      type="text"
                      name="deliveryAddress.street"
                      placeholder="Street name*"
                      onChange={handleChange}
                      value={formdata.deliveryAddress.street}
                      required
                    />
                  </div>
                </Chescout_one>
                <Chescout_one className="Chescout_one">
                  <div className="LasName_Con">
                    <select
                      className="Accordion"
                      name="deliveryAddress.city"
                      onChange={handleChange}
                      value={formdata.deliveryAddress.city}
                      required
                    >
                      <option value="Tashkent">Tashkent</option>
                      <option value="Seoul">Seoul</option>
                    </select>
                  </div>
                  <div className="LasName_Con_code">
                    <input
                      type="text"
                      name="deliveryAddress.Appartment"
                      placeholder="Appartment"
                      onChange={handleChange}
                      value={formdata.deliveryAddress.Appartment}
                    />
                    <input
                      type="text"
                      name="deliveryAddress.zip_code"
                      placeholder="ZIP Code"
                      onChange={handleChange}
                      value={formdata.deliveryAddress.zip_code}
                    />
                  </div>
                </Chescout_one>
              </Chescout_Top>

              <Chescout_Bottom>
                <input
                  type="text"
                  name="deliveryAddress.comment"
                  placeholder="Your comment"
                  onChange={handleChange}
                />
              </Chescout_Bottom>
            </Content_chesckout>
          </Containre_Chescout_Content>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Right_Container className="Right_Container">
              <div className="nn">
                <Top_Container>
                  <h2>Cart totals</h2>
                </Top_Container>

                <div style={{ maxHeight: "230px", overflowY: "scroll" }}>
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((val, ind) => (
                      <Content key={ind}>
                        <Datails>
                          <Imag
                            src={val.product.image}
                            alt={val.product.discount}
                          />
                          <LeftDiv>
                            <div className="item1">
                              <h4>{val.product.types}</h4>
                              <h6>{val.product.Color}</h6>
                              <h6 className="nni">
                                {val.product.Width} x {val.product.Hight}
                              </h6>
                            </div>
                            <div className="item2">
                              <h6>x{val.quantity}</h6> 
                            </div>
                            <div className="item3">
                              <h6>${val.totalCost}</h6> 
                            </div>
                          </LeftDiv>
                        </Datails>
                      </Content>
                    ))
                  ) : (
                    <div>No data</div>
                  )}
                </div>

                <Bottom_Container className="Bottom_Container">
                  <div className="bottom_wrape">
                    <div className="cost">
                      <h5>Delivery (Self Pickup)</h5>
                      <h5>${total}</h5>
                    </div>
                    <div className="cost">
                      <h5>Delivery (Self Pickup)</h5>
                      <h5>${setb}</h5>
                    </div>
                    <div className="cost">
                      <h4>total</h4>
                      <h4>${set}</h4>
                    </div>

                    <div className="btn_wrape">
                      <button type="submit">
                        place order
                        <img src="" alt="" />
                      </button>
                    </div>
                  </div>
                </Bottom_Container>
              </div>
            </Right_Container>
          </div>
        </Chescout_containerWrapper>
      </DatailCart>
    </Container_Chescout>
  );
};

export default Checkout;
