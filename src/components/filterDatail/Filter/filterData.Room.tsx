import React, { useEffect, useReducer, useState } from "react";
import { DataType, Tnames } from "../../types/maintp";
import { Data } from "../../mock/mockDatail";
import { IconButton } from "@mui/joy";
import { PagesName } from "../../main.all_categorie/catalog.page/catalog";
import { Chescout_Top } from "../../Navbar/profile/profle.1";
import {
  Chescout_containerWrapper,
  Chescout_one,
  Container,
  Containre_Chescout_Content,
  Content,
  Datail_0_2,
  Datail_2,
  Datail_3,
  Iframe,
  Image,
  ImageWrapper,
  Lens,
  RightCon,
  Tab,
  ZoomedContainer,
} from "../main.datail";
import {
  BtnWrap4,
  ButtonL,
  Carouselimgwrapp,
  CarouselItem,
  CarouselTrack,
} from "../../styles/main";
import { CarouselContainer, DotsContainer } from "../../styles/main";
import { BtnWrap } from "../../styles/navbar";
import star from "../../../assets/Star.svg";
import star1 from "../../../assets/Star (1).svg";
import home from "../../../assets/home.svg";
import circle3 from "../../../assets/leftwhite.svg";
import { useParams } from "react-router-dom";
import { baseAPI } from "../../../utils/constanst";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartsSlice";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { datatest, datatestT } from "./mockAndStyles";
import {
  // Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import { addLike, removeLike } from "../../Redux/Like.Tests/slice";
import toast from "react-hot-toast";
import FadeLoader from "react-spinners/FadeLoader";

const filters = {};
const DatailRoomComponent: React.FC<Tnames> = ({ name }) => {
  const [datas, setdatas] = useState<datatestT[] | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(4);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState(1);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isZoomEnabled, setIsZoomEnabled] = useState(true);

  const [mock, setMock] = useState<DataType[] | null>({} as DataType[]);
  const { _id, id } = useParams<{ _id: string; id: string }>();
  const parseint = id ? parseInt(id) : 0;
  const dispatch = useDispatch<AppDispatch>();
  const totalSlides = 8;
  const [user, setUsers] = useState<any[]>([]);
  const [datass, setData] = useState<any[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [widthType, setWidthType] = useState<"min" | "max">("min");
  const [cost, setCost] = useState<number>(0);
  const [bigCost, setBigCost] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const userId = useSelector((state: RootState) => state.user._id);
  const combinendData = [mock, ...datass].flat();

  // like
  const carts = useSelector((state: RootState) => state.carts.items);
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
    setdatas(datatest);
    if (user) {
      fetchDataLikes();
    }
  }, [user]);
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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`${baseAPI}/product/all`);
        const filteredData = data.find(
          (item: any) => item._id === _id?.replace("}", "")
        );
        if (!filteredData) return;

        setData([filteredData]);
        setCost(filteredData.cost);
        setBigCost(filteredData.bigCost);
        setSelectedColor(filteredData.ColorSet?.[0]?.split(", ")[0] || "");
      } catch (error) {
        alert("Error fetching data:" + error);
      }
    };
    fetchData();
    const filter = Data.filter((i: DataType) => i.id === parseint);
    const combinend = [...filter];
    setMock(combinend);
  }, []);

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleAddCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token mavjud emas!");

      const response = await axios.post(
        `${baseAPI}/product/order`,
        {
          user: { _id: userId },
          fur_id: datass[0]?._id,
          selectedColors: [selectedColor],
          widthType,
          quantity,
          selectedCost: widthType === "min" ? cost : bigCost,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) window.location.reload();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  /// zoom function
  useEffect(() => {
    const checkZoomStatus = () => {
      if (window.innerWidth > 1200) {
        setIsZoomEnabled(true);
      } else {
        setIsZoomEnabled(false);
      }
    };
    window.addEventListener("resize", checkZoomStatus);
    checkZoomStatus();
    return () => {
      window.removeEventListener("resize", checkZoomStatus);
    };
  }, []);
  // zoomed hover box size...
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: Math.max(50, Math.min(e.clientX - left, 550)),
      y: Math.max(50, Math.min(e.clientY - top, 450)),
    });
  };

  console.log(datass);

  return (
    <Container>
      {/* /// Pages Names */}
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <PagesName>
          <h3>Home</h3>
          <img src={home} alt="Home icon" />
          <h3>
            {datass.map((val, ind) => (
              <div key={val.id || ind}>{val.label}</div>
            ))}
          </h3>
          <img src={home} alt="Home icon" />
          <h4>{name}</h4>
        </PagesName>
      </div>

      {/* / Container 1 */}
      {datass.length > 0 ? (
        <div className="wrapper">
          {/* //// zoom container..  */}
          <div className="imgwrap1">
            {/* /// left zoom items */}

            {combinendData.map((val: any, ind: any) => (
              <div
                key={`${val.types} || ${val.id} || ${val._id} && ${ind}`}
                className="imgswrap"
              >
                <Tab
                  $active={activeTab === 1}
                  onMouseEnter={() => setActiveTab(1)}
                  className="imgs"
                >
                  <img src={val.image || val.image} alt={`Image for Tab 1`} />
                </Tab>
                <Tab
                  $active={activeTab === 2}
                  onMouseEnter={() => setActiveTab(2)}
                  className="imgs"
                >
                  <img src={val.image1} alt={`Image for Tab 2`} />
                </Tab>
                <Tab
                  $active={activeTab === 3}
                  onMouseEnter={() => setActiveTab(3)}
                  className="imgs"
                >
                  <img src={val.image2} alt={`Image for Tab 3`} />
                </Tab>
                <Tab
                  $active={activeTab === 4}
                  onMouseEnter={() => setActiveTab(4)}
                  className="imgs"
                >
                  <img src={val.image3} alt={`Image for Tab 4`} />
                </Tab>
                {/* <Tab
                  $active={activeTab === 5}
                  onMouseEnter={() => setActiveTab(5)}
                  className="imgs"
                >
                  <Iframe
                    src={val.videos1}
                    title={`Video for Tab 5`}
                    style={{ pointerEvents: "none" }}
                  />
                </Tab> */}
              </div>
            ))}

            {/* // zoom Item !!!! */}
            <div className="imageWrapperWrap">
              <ImageWrapper
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
              >
                {combinendData.map((val, ind) => (
                  <div key={`${val.types}-${val.id} || ${val._id} && ${ind}`}>
                    {activeTab === 1 && val.image && (
                      <Image
                        src={val.image}
                        alt="Zoomable"
                        width={600}
                        height={500}
                      />
                    )}
                    {activeTab === 2 && val.image1 && (
                      <Image
                        src={val.image1}
                        alt="Zoomable"
                        width={600}
                        height={500}
                      />
                    )}
                    {activeTab === 3 && val.image2 && (
                      <Image
                        src={val.image2}
                        alt="Zoomable"
                        width={600}
                        height={500}
                      />
                    )}
                    {activeTab === 4 && val.image3 && (
                      <Image
                        src={val.image3}
                        alt="Zoomable"
                        width={600}
                        height={500}
                      />
                    )}
                    {activeTab === 5 && val.videos1 && (
                      <Iframe
                        src={val.videos1}
                        title="Zoomable"
                        width={600}
                        height={500}
                      />
                    )}
                  </div>
                ))}

                {isHovering && activeTab !== 5 && isZoomEnabled && (
                  <Lens x={cursorPos.x} y={cursorPos.y} />
                )}
              </ImageWrapper>
            </div>
          </div>

          {/* //// Right zoom Hover Container .. */}
          <div className="zoomConWrap">
            {isHovering &&
              datass.map((val, ind) => (
                <Content
                  className="Content"
                  key={val.id}
                  $active={
                    activeTab === 1 ||
                    activeTab === 2 ||
                    activeTab === 3 ||
                    activeTab === 4
                  }
                >
                  {activeTab === 1 && val.image && isZoomEnabled && (
                    <ZoomedContainer
                      x={cursorPos.x}
                      y={cursorPos.y}
                      bgImage={val.image}
                      className="ZoomedContainer"
                    />
                  )}
                  {activeTab === 2 && val.image1 && isZoomEnabled && (
                    <ZoomedContainer
                      x={cursorPos.x}
                      y={cursorPos.y}
                      bgImage={val.image1}
                      className="ZoomedContainer"
                    />
                  )}
                  {activeTab === 3 && val.image2 && isZoomEnabled && (
                    <ZoomedContainer
                      x={cursorPos.x}
                      y={cursorPos.y}
                      bgImage={val.image2}
                      className="ZoomedContainer"
                    />
                  )}
                  {activeTab === 4 && val.image3 && isZoomEnabled && (
                    <ZoomedContainer
                      x={cursorPos.x}
                      y={cursorPos.y}
                      bgImage={val.image3}
                      className="ZoomedContainer"
                    />
                  )}
                </Content>
              ))}
          </div>

          {/* /// Right container...  */}
          <RightCon className="RightCon">
            <div className="right_cart">
              <div className="wrap_text">
                <h6></h6>
                <h3>cesil micro velvet chair</h3>
                <div className="str">
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star} alt="" />
                  <h5>3 reviews</h5>
                </div>
              </div>
            </div>

            <div className="right_cart">
              <div className="midl_wrap">
                <div className="div1">
                  <div className="h2">Color</div>
                  <div className="imgwrapmini">
                    {datass[0]?.ColorSet?.flatMap((colorString: string) =>
                      colorString
                        .split(", ")
                        .map((color: string) => (
                          <Radio
                            key={color}
                            checked={selectedColor === color}
                            style={{ color }}
                            onChange={() => setSelectedColor(color)}
                          />
                        ))
                    )}
                  </div>
                </div>
                <div className="div1">
                  <div className="h2">Dimensions</div>
                  <div className="img_wrap_colorCon">
                    {["min", "max"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setWidthType(type as "min" | "max")}
                        className={widthType === type ? "texte1" : "texte1"}
                        style={{
                          border: "none",
                          color: widthType === type ? "#DBA514" : "#D1BCB2",
                          boxShadow:
                            widthType === type
                              ? "0px 10px 20px 0px rgba(209, 188, 178, 0.25)"
                              : "none",
                        }}
                      >
                        {type === "min"
                          ? `W:${datass[0]?.minWidth} х H:${datass[0]?.minHeight} cm`
                          : `W:${datass[0]?.maxWidth} х H:${datass[0]?.maxHeight} cm`}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="div1">
                  <div className="h2">Quantity</div>
                  <div className="img_wrap_colorCon">
                    <IconButton
                      className="buttons"
                      onClick={() => handleQuantityChange(false)}
                    >
                      -
                    </IconButton>
                    <span className="p_count">{quantity}</span>
                    <IconButton
                      className="buttons"
                      onClick={() => handleQuantityChange(true)}
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="right_cart">
              <div className="bottom_Con bottom2">
                <div className="cost">
                  <div className={widthType === "min" ? "h3" : "h2"}>
                    ${datass[0]?.cost}
                  </div>
                </div>
                <div className="row_line"></div>
                <div className="cost">
                  <div className={widthType === "max" ? "h3" : "h2"}>
                    ${datass[0]?.bigCost}
                  </div>
                </div>
              </div>
              <div className="bottom_Con">
                {combinendData.map((val, ind) => {
                  return (
                    <div
                      className="cons_btn"
                      key={`${val.id} || ${val._id} || ${ind}`}
                    >
                      <button onClick={handleAddCart}>Add to cart</button>
                    </div>
                  );
                })}
                <div className="cons_btn_like">
                  {datass.map((item, ind) => {
                    return (
                      <button key={ind} className="like">
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
                    );
                  })}
                </div>
              </div>
            </div>
          </RightCon>
        </div>
      ) : (
        <div className="wrapper">
          <FadeLoader loading={true} color="#d5ad75" />
        </div>
      )}

      {/* Container 2 */}
      <Datail_0_2>
        {datass.map((val, ind) => (
          <Chescout_containerWrapper
            key={val.id || ind}
            style={{ maxWidth: "1270px" }}
            className="Chescout_containerWrapper"
          >
            <Containre_Chescout_Content className="Containre_Chescout_Content">
              <Chescout_Top className="Chescout_Top top">
                <Chescout_one className="Chescout_one">
                  <div className="LasName_Con" style={{ marginBottom: "10px" }}>
                    <div className="inputs">
                      <h4 className="top">description</h4>
                    </div>
                  </div>
                  <h1 className="h1">{val.description}</h1>
                </Chescout_one>

                <Chescout_one className="Chescout_one">
                  <div className="LasName_Con" style={{ marginBottom: "10px" }}>
                    <div className="inputs">
                      <h4 className="top">dimensions</h4>
                    </div>
                  </div>

                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Height (cm)</h5>
                      <h6>{val.Height}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Width (cm)</h5>
                      <h6>{val.Width}</h6>
                    </div>
                  </div>

                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Arm dimensions (hwd)</h5>
                      <h6>{val.ArmDimensions_HWD}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Seat dimensions (hwd)</h5>
                      <h6>{val.SeatDimensions_HWD}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Leg height (cm)</h5>
                      <h6>{val.LegHeight_CM}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Packaging dimensions</h5>
                      <h6>{val.PackagingDimensions}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Weight (kg)</h5>
                      <h6>{val.Weight_KG}</h6>
                    </div>
                  </div>
                </Chescout_one>

                <Chescout_one className="Chescout_one">
                  <div className="LasName_Con" style={{ marginBottom: "10px" }}>
                    <div className="inputs">
                      <h4 className="top">details</h4>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Assembly</h5>
                      <h6>{val.Assembly}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Number of seats</h5>
                      <h6>{val.NumberOfSeats}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Caring instructions</h5>
                      <h6>{val.CaringInstructions}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Material</h5>
                      <h6>{val.Material}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Assembly</h5>
                      <h6>{val.Assemblys}</h6>
                    </div>
                  </div>
                  <div className="LasName_Con">
                    <div className="inputs">
                      <h5 className="top">Caring instructions</h5>
                      <h6>{val.CaringInstructions}</h6>
                    </div>
                  </div>
                </Chescout_one>
              </Chescout_Top>
            </Containre_Chescout_Content>
          </Chescout_containerWrapper>
        ))}
      </Datail_0_2>

      {/* Container 4 */}
      <Datail_3>
        <div className="datail3_menus a">
          <div className="wrap_text">
            <h6></h6>
            <h3>customer reviews</h3>
          </div>
          <h6></h6>
          <div className="wrap_text wrap">
            <h2>
              There is no any customer review of this product. Be the first{" "}
              <br /> and add your review
            </h2>
          </div>
          <h6></h6>
        </div>

        <div className="datail3_menus b">
          <div className="wrap_text">
            <h6></h6>
            <h3>add review</h3>
          </div>

          <div className="str">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <h5> – your rate</h5>
          </div>

          <div className="add review">
            <input
              type="text"
              placeholder="Your review"
              className="inputt tt"
            />
            <input type="text" placeholder="Name" className="inputt" />
            <input type="text" placeholder="Email" className="inputt" />
          </div>

          <div className="btnwrap">
            <button>
              post review <img src={circle3} alt="" />
            </button>
          </div>
        </div>
      </Datail_3>
    </Container>
  );
};
export default DatailRoomComponent;
