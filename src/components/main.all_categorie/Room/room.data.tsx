import React, { useState, useEffect, useMemo } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Catalog_con,
  Image,
  ImageContainer,
  ImageGrid,
  Imagecontent,
  PagesName,
  Saidbar,
  SortContainer,
} from "../catalog.page/catalog";
import { Slider } from "@mui/joy";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import home from "../../../assets/home.svg";
import { Data } from "../../mock/mockDatail";
import { DataType, Tname } from "../../types/maintp";
import { SlaiderContainer } from "../categories";
import Skeleton from "@mui/joy/Skeleton";
import "../i.css";
import { baseAPI } from "../../../utils/constanst";
import axios from "axios";
import { toast } from "react-toastify";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import saveIcon from "../../../assets/saveIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { setCarts } from "../../Redux/cartsSlice";
import { addLike, removeLike } from "../../Redux/Like.Tests/slice";

export default function RoomData(Props: Tname) {
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 16;
  const [values, setValues] = useState([50, 1000]);
  const getCostNumber = (cost: string) =>
    parseFloat(cost.replace("$", "").trim());
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);
  const [imageVisible, setImageVisible] = useState<boolean>(false);
  const [data, setData] = useState<DataType[]>([]);
  const { label } = useParams<{ label: string }>();
  const [openModal, setOpenModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [filterState, setFilterState] = useState({
    color: "",
    metal: "",
    styles: "",
    feature: "",
  });
  const [datas, setDatas] = useState<any[]>([]);
  const carts = useSelector((state: RootState) => state.carts.items);
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<string>("");
  // likes
  const [getLike, setLikes] = useState<any[]>([]);

  const fetchDataLikes = async () => {
    if (!user) return;

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
  }; // get likelar

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

  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`${baseAPI}/product/all`);
      setDatas(data);
    } catch (error: any) {
      toast.error("Error fetching data:", error);
    }
  };

  const fetchCartData = async () => {
    try {
      const { cartsData } = await (
        await fetch(`${baseAPI}/product/cart-count`)
      ).json();
      const allFurniture = cartsData.flatMap(
        ({ _id: cartID, furniture }: any) =>
          furniture.map((fur: any) => ({ ...fur, cartID }))
      );
      dispatch(setCarts(allFurniture)); // Use Redux dispatch to set carts
    } catch (error: any) {
      toast.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    const ftechData = async () => {
      const token = localStorage.getItem("token");
      try {
        const { data }: any = await axios.get(`${baseAPI}/userFur/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const filter = data.data;
        const filter2 = filter._id;

        setUser(filter2);
      } catch (error: any) {
        toast.error(error)
      }
    };
    ftechData();
  }, []);

  const handleAddCart = async (fur_id: string, user_id: string) => {
    try {
      const {
        data: { success },
      } = await axios.post(`${baseAPI}/product/order`, {
        user: { _id: user },
        fur_id,
      });
      if (success) fetchCartData();
    } catch (error) {
      console.error("Error adding to cart:", error);
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
      fetchData();
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };

  const handleAddAndDelete = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();

    const cartItem = carts.find((cart) => cart._id === item._id);
    const cartID: any = cartItem ? cartItem.cartID : null;

    if (!cartItem) {
      handleAddCart(item._id, "1");
    } else {
      handleDeleteCart(cartID, item._id);
    }
  };

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleSetClick = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setItemsPerPage(4);
      } else if (width <= 900) {
        setItemsPerPage(8);
      } else if (width <= 1200) {
        setItemsPerPage(12);
      } else if (width <= 1500) {
        setItemsPerPage(16);
      } else {
        setItemsPerPage(16);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = (open: boolean) => {
    setSidebarOpen(open);
  };

  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleFilterByCost = () => {
    const [minCost, maxCost] = values;
    const filteredArr = Data.filter((item) => {
      const costNumber = getCostNumber(item.cost);
      return costNumber >= minCost && costNumber <= maxCost;
    });
    setData(filteredArr);
    setDatas(filteredArr);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValues(newValue as number[]);
  };

  const handleCancelFilters = () => {
    setFilterState({
      color: "",
      metal: "",
      styles: "",
      feature: "",
    });
    setData(Data);
    setDatas(Data);
  };

  const handleCheckboxChange = (
    type: keyof typeof filterState,
    value: string
  ) => {
    const newFilter = { ...filterState };

    if (newFilter[type] === value) {
      newFilter[type] = "";
    } else {
      newFilter[type] = value;
    }

    setFilterState(newFilter);
    subFilterData(newFilter);
  };

  const subFilterData = (filter: {
    color: string;
    metal: string;
    styles: string;
    feature: string;
  }) => {
    let filteredArr = [...Data];
    const filteredLabelData = filteredArr.filter(
      (item) => item.label === label
    );

    if (filter.color) {
      filteredArr = filteredArr.filter(
        (i) => i.Color.toLowerCase() === filter.color.toLowerCase()
      );
    }
    if (filter.metal) {
      filteredArr = filteredLabelData.filter(
        (i) => i.material === filter.metal
      );
    }
    setData(filteredArr);
    setDatas(filteredArr);
  };

  useEffect(() => {
    fetchData();
    fetchCartData();
    setData(Data);
    setDatas(Data);
    toggleSidebar(true);
    fetchCartData();
    setData(Data);
    setDatas(Data);
    toggleSidebar(true);
    // fetchDataLikes();
  }, []);

  const filterdatas = [...datas, ...data].flat();
  const filteredData = filterdatas.filter(
    (item) => item.types === label && datas
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedData = filteredData.slice(startIdx, endIdx);

  return (
    <Catalog_con>
      <PagesName>
        <h3>Home</h3>
        <img src={home} alt="" />
        {filteredData.length > 0 && <h4>{filteredData[0].label}</h4>}
      </PagesName>

      <SortContainer className="SortContainer">
        <button onClick={handleClick} className="inputs">
          Sort by
        </button>
        <button onClick={handleSetClick} className="closeInputs">
          close
        </button>
      </SortContainer>

      {openModal && (
        <Saidbar className="b">
          <div className="cart_con a">
            <h2>Price</h2>
            <hr />
            <Box sx={{ width: "100%" }}>
              <Slider
                value={values}
                onChange={handleChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(values) => `$${values}`}
                min={50}
                max={1000}
                step={1}
                getAriaLabel={() => "Price range"}
              />
            </Box>
            <div className="button_wrap aa">
              <div className="btn_wrap">
                <button onClick={() => alert(`Min Price: $${values[0]}`)}>
                  ${values[0]}
                </button>
              </div>
              <div className="btn_wrap">
                <button onClick={() => alert(`Max Price: $${values[1]}`)}>
                  ${values[1]}
                </button>
              </div>
              <div className="btn_wrap_b aaa" onClick={handleCancelFilters}>
                <button onClick={handleFilterByCost}>OK</button>
              </div>
            </div>
          </div>

          <div className="cart_con g">
            <h2>Material</h2>
            <hr />
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: 3 }}
            >
              <Checkbox
                label="Metal"
                color="warning"
                onClick={() => handleCheckboxChange("metal", "metal")}
              />
              <Checkbox
                label="Plastic"
                color="warning"
                onClick={() => handleCheckboxChange("metal", "plastic")}
              />
              <Checkbox
                label="Leather"
                color="warning"
                onClick={() => handleCheckboxChange("metal", "leather")}
              />
              <Checkbox
                label="Marble"
                color="warning"
                onClick={() => handleCheckboxChange("metal", "marble")}
              />
              <Checkbox
                label="Glass"
                color="warning"
                onClick={() => handleCheckboxChange("metal", "glass")}
              />
              <Checkbox
                label="Rattan"
                color="warning"
                onClick={() => handleCheckboxChange("metal", "rattan")}
              />
            </Box>
          </div>

          <div className="cart_con c">
            <h2>Color</h2>
            <hr />
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: 3 }}
            >
              <Checkbox
                label="Primary"
                color="primary"
                onClick={() => handleCheckboxChange("color", "primary")}
              />
              <Checkbox
                label="Neutral"
                color="neutral"
                onClick={() => handleCheckboxChange("color", "neutral")}
              />
              <Checkbox
                label="Danger"
                color="danger"
                onClick={() => handleCheckboxChange("color", "danger")}
              />
              <Checkbox
                label="Success"
                color="success"
                onClick={() => handleCheckboxChange("color", "success")}
              />
              <Checkbox
                label="Warning"
                color="warning"
                onClick={() => handleCheckboxChange("color", "warning")}
              />
            </Box>
          </div>

          <div className="cart_con d">
            <h2>Collection</h2>
            <hr />
            <Box
              sx={{ display: "grid", flexWrap: "wrap", gap: 3, marginTop: 3 }}
            >
              <Checkbox
                label="Minimalism"
                color="warning"
                onClick={() => handleCheckboxChange("styles", "minimalism")}
              />
              <Checkbox
                label="Eco Style"
                color="warning"
                onClick={() => handleCheckboxChange("styles", "ecoStyle")}
              />
              <Checkbox
                label="Glam"
                color="warning"
                onClick={() => handleCheckboxChange("styles", "glam")}
              />
              <Checkbox
                label="Royal"
                color="warning"
                onClick={() => handleCheckboxChange("styles", "royal")}
              />
              <Checkbox
                label="Pink Rose"
                color="warning"
                onClick={() => handleCheckboxChange("styles", "pinkRose")}
              />
              <Checkbox
                label="Hi Tech"
                color="warning"
                onClick={() => handleCheckboxChange("styles", "hiTech")}
              />
            </Box>
          </div>

          <div className="cart_con e">
            <h2>Additional</h2>
            <hr />
            <Box
              sx={{ display: "grid", flexWrap: "wrap", gap: 3, marginTop: 3 }}
            >
              <Checkbox
                label="Set"
                color="warning"
                onClick={() => handleCheckboxChange("feature", "set")}
              />
              <Checkbox
                label="Eco Combined"
                color="warning"
                onClick={() => handleCheckboxChange("feature", "ecoCombinend")}
              />
              <Checkbox
                label="Transformer"
                color="warning"
                onClick={() => handleCheckboxChange("feature", "transformer")}
              />
              <Checkbox
                label="Frameless"
                color="warning"
                onClick={() => handleCheckboxChange("feature", "frameless")}
              />
            </Box>
          </div>
        </Saidbar>
      )}

      <SlaiderContainer style={{ padding: "0px" }}>
        <ImageGrid>
          {displayedData.length > 0 ? (
            displayedData.map((item, ind) => (
              <ImageContainer
                key={`${item.types}-${item.id} || ${item._id} && ${ind}`}
              >
                <Imagecontent
                  onClick={(e) => {
                    const target = e.target as HTMLElement;

                    if (!target.closest("button")) {
                      const foundItem: any = displayedData;

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
                      src={item.images}
                      alt={`img-${ind + startIdx}`}
                      onLoad={() => {
                        setTimeout(() => setImageVisible(true), 100);
                      }}
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
                          width="30px"
                          height="30px"
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
                            style={{
                              border: "none",
                              width: "30px",
                              height: "31px",
                              color: "#DBA514",
                            }}
                          />
                        )}
                      </button>
                    </div>
                  </Imagecontent>
                  <h6></h6>
                  <h5>{item.types}</h5>
                  <h4>{item.cost}</h4>
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

        <Stack spacing={1} style={{ marginTop: "20px" }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePagination}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </SlaiderContainer>

      {sidebarOpen && (
        <Saidbar className="Saidbar">
          {!imageVisible ? (
            <div
              style={{ height: "100vw", width: "210px", maxHeight: "1550px" }}
            >
              <Skeleton
                variant="text"
                level="h4"
                sx={{ width: "70px", marginTop: "-5px", marginBottom: "17px" }}
              />

              <Skeleton
                variant="text"
                level="h4"
                sx={{
                  width: "100%",
                  height: "1px",
                  marginTop: "0px",
                  marginBottom: "30px",
                }}
              />

              <Skeleton
                variant="text"
                sx={{
                  width: "100%",
                  marginTop: "-5px",
                  height: "15px",
                  marginBottom: "18px",
                }}
              />

              <div
                style={{ display: "flex", gap: "5px", marginBottom: "50px" }}
              >
                <Skeleton
                  variant="text"
                  level="h1"
                  sx={{ width: "100%", height: "50px" }}
                />
                <Skeleton
                  variant="text"
                  level="h1"
                  sx={{ width: "100%", height: "50px" }}
                />
                <Skeleton
                  variant="text"
                  level="h1"
                  sx={{ width: "100%", height: "50px" }}
                />
              </div>

              <Skeleton
                variant="text"
                level="h4"
                sx={{ width: "120px", marginBottom: "10px" }}
              />

              <Skeleton
                variant="text"
                level="h4"
                sx={{ width: "100%", height: "1px", marginBottom: "32px" }}
              />

              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "60px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "85px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "60px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "45px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "70px" }} />
              </div>

              <Skeleton
                variant="text"
                level="h4"
                sx={{ width: "80px", marginBottom: "10px" }}
              />

              <Skeleton
                variant="text"
                level="h4"
                sx={{
                  width: "100%",
                  height: "1px",
                  marginTop: "0px",
                  marginBottom: "33px",
                }}
              />

              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "75px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "85px" }} />
              </div>

              <Skeleton
                variant="text"
                level="h4"
                sx={{ width: "80px", marginBottom: "10px" }}
              />

              <Skeleton
                variant="text"
                level="h4"
                sx={{
                  width: "100%",
                  height: "1px",
                  marginTop: "0px",
                  marginBottom: "33px",
                }}
              />

              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "75px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "85px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "85px" }} />
              </div>

              <Skeleton
                variant="text"
                level="h4"
                sx={{ width: "80px", marginBottom: "10px" }}
              />

              <Skeleton
                variant="text"
                level="h4"
                sx={{
                  width: "100%",
                  height: "1px",
                  marginTop: "0px",
                  marginBottom: "33px",
                }}
              />

              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "75px" }} />
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <Skeleton variant="text" level="h4" sx={{ width: "20px" }} />
                <Skeleton variant="text" level="h4" sx={{ width: "80px" }} />
              </div>
            </div>
          ) : (
            <>
              <div className="cart_con a">
                <h2>Price</h2>
                <hr />
                <Box sx={{ width: "100%" }}>
                  <Slider
                    value={values}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(values) => `$${values}`}
                    min={50}
                    max={1000}
                    step={1}
                    getAriaLabel={() => "Price range"}
                  />
                </Box>
                <div className="button_wrap aa">
                  <div className="btn_wrap">
                    <button onClick={() => alert(`Min Price: $${values[0]}`)}>
                      ${values[0]}
                    </button>
                  </div>
                  <div className="btn_wrap">
                    <button onClick={() => alert(`Min Price: $${values[1]}`)}>
                      ${values[1]}
                    </button>
                  </div>
                  <div className="btn_wrap_b aaa">
                    <button onClick={handleFilterByCost || handleCancelFilters}>
                      OK
                    </button>
                  </div>
                </div>
              </div>

              <div className="cart_con">
                <h2>Material</h2>
                <hr />
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    marginTop: 3,
                  }}
                >
                  <Checkbox
                    label="Metal"
                    color="warning"
                    onClick={() => handleCheckboxChange("metal", "metal")}
                  />
                  <Checkbox
                    label="Plastic"
                    color="warning"
                    onClick={() => handleCheckboxChange("metal", "plastic")}
                  />
                  <Checkbox
                    label="Leather"
                    color="warning"
                    onClick={() => handleCheckboxChange("metal", "leather")}
                  />
                  <Checkbox
                    label="Marble"
                    color="warning"
                    onClick={() => handleCheckboxChange("metal", "marble")}
                  />
                  <Checkbox
                    label="Glass"
                    color="warning"
                    onClick={() => handleCheckboxChange("metal", "glass")}
                  />
                  <Checkbox
                    label="Rattan"
                    color="warning"
                    onClick={() => handleCheckboxChange("metal", "rattan")}
                  />
                </Box>
              </div>

              <div className="cart_con">
                <h2>Color</h2>
                <hr />
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    marginTop: 3,
                  }}
                >
                  <Checkbox
                    label="Primary"
                    color="primary"
                    onClick={() => handleCheckboxChange("color", "primary")}
                  />
                  <Checkbox
                    label="Neutral"
                    color="neutral"
                    onClick={() => handleCheckboxChange("color", "neutral")}
                  />
                  <Checkbox
                    label="Danger"
                    color="danger"
                    onClick={() => handleCheckboxChange("color", "danger")}
                  />
                  <Checkbox
                    label="Success"
                    color="success"
                    onClick={() => handleCheckboxChange("color", "success")}
                  />
                  <Checkbox
                    label="Warning"
                    color="warning"
                    onClick={() => handleCheckboxChange("color", "warning")}
                  />
                </Box>
              </div>

              <div className="cart_con">
                <h2>Collection</h2>
                <hr />
                <Box
                  sx={{
                    display: "grid",
                    flexWrap: "wrap",
                    gap: 3,
                    marginTop: 3,
                  }}
                >
                  <Checkbox
                    label="Minimalism"
                    color="warning"
                    onClick={() => handleCheckboxChange("styles", "minimalism")}
                  />
                  <Checkbox
                    label="Eco Style"
                    color="warning"
                    onClick={() => handleCheckboxChange("styles", "ecoStyle")}
                  />
                  <Checkbox
                    label="Glam"
                    color="warning"
                    onClick={() => handleCheckboxChange("styles", "glam")}
                  />
                  <Checkbox
                    label="Royal"
                    color="warning"
                    onClick={() => handleCheckboxChange("styles", "royal")}
                  />
                  <Checkbox
                    label="Pink Rose"
                    color="warning"
                    onClick={() => handleCheckboxChange("styles", "pinkRose")}
                  />
                  <Checkbox
                    label="Hi Tech"
                    color="warning"
                    onClick={() => handleCheckboxChange("styles", "hiTech")}
                  />
                </Box>
              </div>

              <div className="cart_con">
                <h2>Additional</h2>
                <hr />
                <Box
                  sx={{
                    display: "grid",
                    flexWrap: "wrap",
                    gap: 3,
                    marginTop: 3,
                  }}
                >
                  <Checkbox
                    label="Set"
                    color="warning"
                    onClick={() => handleCheckboxChange("feature", "set")}
                  />
                  <Checkbox
                    label="Eco Combined"
                    color="warning"
                    onClick={() =>
                      handleCheckboxChange("feature", "ecoCombinend")
                    }
                  />
                  <Checkbox
                    label="Transformer"
                    color="warning"
                    onClick={() =>
                      handleCheckboxChange("feature", "transformer")
                    }
                  />
                  <Checkbox
                    label="Frameless"
                    color="warning"
                    onClick={() => handleCheckboxChange("feature", "frameless")}
                  />
                </Box>
              </div>
            </>
          )}
        </Saidbar>
      )}
    </Catalog_con>
  );
}
