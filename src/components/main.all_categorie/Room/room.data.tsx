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
import like from "../../../assets/leki.2.svg";
import like1 from "../../../assets/leki1.svg";

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

  const handleAddCart = async (fur_id: string, user_id: string) => {
    try {
      const {
        data: { success },
      } = await axios.post(`${baseAPI}/product/order`, {
        user: { _id: "603d9f3f494f1c3a9c4f2345" },
        fur_id,
      });
      if (success) fetchCartData();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleDeleteCart = async (cart_id: string, fur_id: string) => {
    try {
      const {
        data: { success },
      } = await axios.delete(
        `${baseAPI}/product/cart/${cart_id}/furniture/${fur_id}`
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
    fetchData();
    fetchCartData();
    setData(Data);
    setDatas(Data);
    toggleSidebar(true);
  }, []);

  const filterdatas = [...datas, ...data].flat();
  const filteredData = filterdatas.filter(
    (item) => item.categories === label && datas
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
                key={`${item.categories}-${item.id} || ${item._id} && ${ind}`}
              >
                <Imagecontent
                  onClick={(e) => {
                    const target = e.target as HTMLElement;

                    if (!target.closest("button")) {
                      const foundItem: any = displayedData;

                      if (foundItem) {

                        if (foundItem._id !== item._id) {
                          navigate(`/datailRoom/${item._id}`);
                        }
                        else {
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
                      <img src={like1} alt="" style={{
                              border: "none",
                              width: "25px",
                              height: "25px",
                            }} />
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
                  <h5>{item.categories}</h5>
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
