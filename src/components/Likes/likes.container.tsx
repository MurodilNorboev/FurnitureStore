import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { baseAPI } from "../../utils/constanst";
import axios from "axios";
import styled from "styled-components";
import { PagesName } from "../main.all_categorie/catalog.page/catalog";
import home from "../../assets/home.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { addLike, removeLike } from "../Redux/Like.Tests/slice";
import { setCarts } from "../Redux/cartsSlice";
import saveIcon from "../../assets/saveIcon.svg";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { useNavigate } from "react-router-dom";
import { Catalog_con, Image, ImageContainer, Imagecontent, ImageGrid, SlaiderContainer } from "./styles";

const LikesDatail = () => {
  const navigate = useNavigate();
  const [user, setUsers] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  // like
  const carts = useSelector((state: RootState) => state.carts.items);
  const dispatch = useDispatch<AppDispatch>();
  const [getLike, setLikes] = useState<any[]>([]);

  // like
  const fetchDataLikes = async () => {
    if (!user || user.length === 0) return user;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${baseAPI}/likes/getlikes/${user}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.success && data.data.length > 0) {
        setLikes(data.data[0].furniture);
      }
    } catch (error: any) {
      toast.error("Yoqtirgan mebellarni olishda xatolik:", error);
    }
  };
  const handleLike = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token mavjud emas!");
      return;
    }

    try {
      const { data } = await axios.post(
        `${baseAPI}/likes/like`,
        { user: user, likeId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchDataLikes();
      setLikes((prevLikes) => [...prevLikes, data.like]);
      dispatch(addLike(data.like));
    } catch (error) {
      console.error("Like qo'shishda xatolik:", error);
    }
  };
  const handleDeleteLike = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.delete(`${baseAPI}/likes/likedelete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchDataLikes();
      // setLikes((prevLikes) => prevLikes.filter((like) => like._id !== id));
      dispatch(removeLike(data.like));
    } catch (error) {
      console.error("Error in handleDeleteLike:", error);
    }
  };
  useEffect(() => {
    if (user) {
      fetchDataLikes();
    }
  }, [user]);

  /// cart
  const fetchCartData = async () => {
    try {
      const { cartsData } = await (
        await fetch(`${baseAPI}/product/cart-count`)
      ).json();
      const allFurniture = cartsData.flatMap(
        ({ _id: cartID, furniture }: any) =>
          furniture.map((fur: any) => ({ ...fur, cartID }))
      );

      dispatch(setCarts(allFurniture));
    } catch (error: any) {
      toast.error("Error fetching cart data:", error);
    }
  };
  const handleAddCart = async (fur_id: string, userId: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token mavjud emas!");

      const response = await axios.post(
        `${baseAPI}/product/order`,
        {
          user: { _id: user },
          fur_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // To'g'ri joylashuv
          },
        }
      );

      const { success } = response.data;

      if (success) fetchCartData();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(`${baseAPI}/product/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(data.data);
    } catch (error: any) {
      toast.error("Error fetching product data:", error);
    }
  };
  const handleDeleteCart = async (cart_id: string, fur_id: string) => {
    try {
      const token = localStorage.getItem("token");
      const {
        data: { success },
      } = await axios.delete(
        `${baseAPI}/product/cart/${cart_id}/furniture/${fur_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (success) fetchCartData();
      getData();
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };
  const handleAddAndDelete = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();

    const cartItem: any = carts.find((cart) => cart._id === item._id);
    const cartID: any = cartItem ? cartItem.cartID : null;

    if (!cartItem) {
      handleAddCart(item._id, "1");
    } else {
      handleDeleteCart(cartID, item._id);
    }
  };

  /// get zapros va ekran size oqilishi
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${baseAPI}/userFur/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(data.data._id);
      } catch (error: any) {
        toast.error("Error fetching user data:", error);
      }
    };

    getUser();
    getData();
  }, []);

  return (
    <Catalog_con>
      <PagesName>
        <h3>Home</h3>
        <img src={home} alt="Home icon" />
        <h3>
          <span>likes</span>
        </h3>
      </PagesName>

      <SlaiderContainer style={{ padding: "0px" }}>
        <ImageGrid>
          {getLike.length > 0 ? (
            getLike.map((item, ind) => (
              <ImageContainer
                key={`${item.types}-${item.id} || ${item._id} && ${ind}`}
              >
                <Imagecontent
                  onClick={(e) => {
                    const target = e.target as HTMLElement;

                    if (!target.closest("button")) {
                      const foundItem: any = getLike;

                      if (foundItem) {
                        if (foundItem._id !== item._id) {
                          navigate(`/datailRoom/${item._id}`);
                        } else {
                          navigate(`/datailRoom2/${item.id}`);
                        }
                      }
                    }
                  }}
                >
                  <Imagecontent>
                    <Image
                      className="Image"
                      src={item.image}
                      alt={`img-${ind}`}
                    />

                    <div className="savebtnwrap">
                      <button className="like">
                        <svg
                          onClick={(e) => {
                            if (
                              getLike &&
                              getLike.some(
                                (itemLike) => itemLike?._id === item?._id
                              )
                            ) {
                              handleDeleteLike(item._id);
                            } else {
                              handleLike(e, item._id);
                            }
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="35px"
                          height="35px"
                          style={{
                            cursor: "pointer",
                            fill: getLike?.some(
                              (itemLike) => itemLike?._id === item._id
                            )
                              ? "#ffbb00"
                              : "transparent",
                            stroke: "#ffbb00",
                            strokeWidth: getLike?.some(
                              (itemLike) => itemLike?._id === item._id
                            )
                              ? "0"
                              : "2",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <path d="M12 21.35C12 21.35 4 13.28 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04 0.99 3.57 2.36L12 9l0.93-1.64C13.46 5.99 14.96 5 16.5 5 18.5 5 20 6.5 20 8.5c0 4.78-8 12.85-8 12.85z" />
                        </svg>
                      </button>

                      <button onClick={(e) => handleAddAndDelete(e, item)}>
                        {carts.find((cart) => cart._id === item._id) ? (
                          <img
                            className="saveIcon"
                            style={{ border: "0px" }}
                            src={saveIcon}
                            alt=""
                          />
                        ) : (
                          <TurnedInNotIcon
                            sx={{
                              border: "none",
                              width: "10px",
                              height: "21px",
                              color: "#DBA514",
                            }}
                          />
                        )}
                      </button>
                    </div>
                  </Imagecontent>
                  <h6></h6>
                  <h5>{item.Feature}</h5>
                  <h4>${item.cost}</h4>
                </Imagecontent>
              </ImageContainer>
            ))
          ) : (
            <div
              className="Errors"
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "18px",
                color: "red",
              }}
            >
              hechnima yoq !
            </div>
          )}
        </ImageGrid>
      </SlaiderContainer>
    </Catalog_con>
  );
};

export default LikesDatail;

