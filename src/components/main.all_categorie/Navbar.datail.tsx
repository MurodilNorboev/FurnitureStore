import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { baseAPI } from "../../utils/constanst";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  Catalog_con,
  Image,
  ImageContainer,
  ImageGrid,
  Imagecontent,
  PagesName,
  Saidbar,
  SortContainer,
} from "./catalog.page/catalog";
import home from "../../assets/home.svg";
import { SlaiderContainer } from "./categories";
import { Pagination, PaginationItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { addLike, removeLike } from "../Redux/Like.Tests/slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { setCarts } from "../Redux/cartsSlice";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import saveIcon from "../../assets/saveIcon.svg";
import FadeLoader from "react-spinners/FadeLoader";

const mockDatas: any = {
  colors: [
    { value: "orange" },
    { value: "green" },
    { value: "blue" },
    { value: "dark gray" },
    { value: "black" },
    { value: "white" },
    { value: "light beige" },
  ],
  styles: [
    { value: "minimalist" },
    { value: "eco style" },
    { value: "glam" },
    { value: "royal" },
    { value: "pink rose" },
    { value: "hi tech" },
  ],
  materials: [
    { value: "metal" },
    { value: "plastic" },
    { value: "leather" },
    { value: "marble" },
    { value: "glass" },
    { value: "rattan" },
  ],
};
const NavDatail_Page = () => {
  const navigate = useNavigate();
  const [user, setUsers] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [checkedFilters, setCheckedFilters] = useState<any>({
    colors: [],
    styles: [],
    materials: [],
  });
  const [priceRange, setPriceRange] = useState<number[]>([20, 10000]);
  const { _id, types } = useParams<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobile, setMobile] = useState(false);
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
      handleAddCart(item._id, item._id);
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
    setPriceRange([20, 10000]);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
      setMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // checkbox
  const handleCheckboxChange = (type: string, value: string) => {
    setCheckedFilters((prev: any) => {
      const updated = { ...prev };
      if (updated[type].includes(value)) {
        updated[type] = updated[type].filter((item: string) => item !== value);
      } else {
        updated[type].push(value);
      }
      return updated;
    });
  };

  // slider
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  // filter
  const SubFilter = data.filter((item) => {
    if (item.types === types) return item;
  });
  const filteredData = SubFilter.filter((item: any) => {
    const matchesColor =
      checkedFilters.colors.length === 0 ||
      checkedFilters.colors.includes(item.Color);

    const matchesStyle =
      checkedFilters.styles.length === 0 ||
      checkedFilters.styles.includes(item.Styles);

    const matchesMaterial =
      checkedFilters.materials.length === 0 ||
      checkedFilters.materials.includes(item.material);

    const matchesPrice =
      item.cost >= priceRange[0] && item.cost <= priceRange[1];

    console.log(item.cost);
    return matchesColor && matchesStyle && matchesMaterial && matchesPrice;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {currentData.length > 0 ? (
        <Catalog_con>
          <PagesName>
            <h3 onClick={() => navigate("/")}>Home</h3>
            <img src={home} alt="Home icon" />
            {currentData.length > 0 && <h4>{currentData[0].types}</h4>}
          </PagesName>

          {/* Sort Button */}
          <SortContainer className="SortContainer">
            <button onClick={toggleSidebar} className="closeInputs">
              {isSidebarOpen ? "Close" : "Sort"}
            </button>
          </SortContainer>

          {/* Product List */}
          <SlaiderContainer style={{ padding: "0px 40px" }}>
            <ImageGrid>
              {currentData.length > 0 ? (
                currentData.map((item, ind) => (
                  <ImageContainer
                    key={`${item.types}-${item.id} || ${item._id} && ${ind}`}
                  >
                    <Imagecontent
                      onClick={(e) => {
                        const target = e.target as HTMLElement;

                        if (!target.closest("button")) {
                          const foundItem: any = currentData;

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
                      <Imagecontent
                        className="imgwrap"
                        style={{
                          width: "100%",
                        }}
                      >
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

            {/* Pagination */}
            <Stack
              spacing={1}
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
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

          {/* /// saidbar  */}
          <Saidbar
            style={{
              display: isSidebarOpen || !isMobile ? "block" : "none",
              width: isMobile ? "100%" : "350px",
              position: isMobile ? "absolute" : "relative",
              top: "34%",
            }}
          >
            <div className="cart_con a">
              <h2>Price</h2>
              <hr />
              <div
                style={{ width: mobile ? "100%" : isMobile ? "50%" : "100%" }}
              >
                <Box>
                  <Slider
                    value={priceRange}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    max={10000}
                    min={20}
                  />
                </Box>
                <div
                  className="button_wrap aa"
                  style={{
                    width: mobile ? "100%" : isMobile ? "150px" : "100%",
                  }}
                >
                  <div className="btn_wrap">
                    <button>${priceRange[0]}</button>
                  </div>
                  <div className="btn_wrap">
                    <button>${priceRange[1]}</button>
                  </div>
                </div>
              </div>
            </div>
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: 3 }}
            >
              {Object.keys(mockDatas).map((category: any) => (
                <FormGroup key={category} style={{ flex: 1 }}>
                  <h3>{category}</h3>
                  {mockDatas[category].map((option: any) => (
                    <FormControlLabel
                      key={option.value}
                      control={
                        <Checkbox
                          onChange={() =>
                            handleCheckboxChange(category, option.value)
                          }
                          checked={checkedFilters[category].includes(
                            option.value
                          )}
                        />
                      }
                      label={option.value}
                    />
                  ))}
                </FormGroup>
              ))}
            </Box>
          </Saidbar>
        </Catalog_con>
      ) : (
        <Catalog_con
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FadeLoader loading={true} color="#d5ad75" />
        </Catalog_con>
      )}
    </>
  );
};

export default NavDatail_Page;
