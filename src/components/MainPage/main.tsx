import { BtnWrap4, MainCon } from "../styles/main";
import Carousel from "../Carousel/1carousel";
import CategorieComponent from "./main.datails/2categorie";
import ImgComponent from "./main.datails/7Blog";
import ShopBYroom from "./main.datails/3shopBYroom";
import Room from "./main.datails/4Room";
import HotDisc from "./main.datails/6HotDisc";
import React, { useState, useEffect } from "react";
import { BtnWrap } from "../styles/navbar";
import {
  ButtonL,
  CarouselContainer,
  CarouselItem,
  CarouselTrack,
  Carouselimgwrapp,
  Dot,
  DotsContainer,
} from "../styles/main";
import circle3 from "../../assets/leftwhite.svg";
import { IconButton } from "@mui/material";
import { Navlink } from "../styles/LINK";
import Carousel2 from "../Carousel/carousel2";
import { motion } from "framer-motion";
import { DataType } from "../types/maintp";
import { Data } from "../mock/mockDatail";
import FullWidthTabs from "./main.datails/Tabs/tabs";
import MainLoading from "../Loading/main/main.loading";
import "../Loading/main/style.css";
const datatest = [
  {
    img: "https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185",
    text: "ebro bedside table",
    cost: "$250",
    seil: "ebro bedside table",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185",
    text: "Tirado chair",
    cost: "$280",
    seil: "ebro bedside table",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185",
    text: "caleido lamp",
    cost: "$355",
    seil: "ebro bedside table",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185",
    text: "caleido lamp",
    cost: "$240",
    seil: "ebro bedside table",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185",
    text: "emmi set",
    cost: "$200",
    seil: "ebro bedside table",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185",
    text: "textiles",
    cost: "$260",
    seil: "ebro bedside table",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185",
    text: "Sofas set",
    cost: "$230",
    seil: "ebro bedside table",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185",
    text: "beds set",
    cost: "$210",
    seil: "ebro bedside table",
  },
];
interface datatestT {
  img: string;
  text: string;
  cost: string;
  seil: string;
}

const MainComponent: React.FC = () => {
  const [data, setdata] = useState<datatestT[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<any>(4);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const totalSlides = 6;

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited") === "true";
    if (hasVisited) {
      setLoading(false);
    } else {
      setLoading(true);
      localStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    }
  }, []);

  useEffect(() => {
    setdata(datatest);
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isHovered) return;
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [isHovered, slideIndex]);
  const nextSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex + 1) % (totalSlides - slidesToShow + 1)
    );
  };
  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) =>
        (prevIndex - 1 + totalSlides - slidesToShow + 1) %
        (totalSlides - slidesToShow + 1)
    );
  };

  const [datas, setDatas] = useState<DataType[]>([]);
  useEffect(() => {
    const filterdata = Data.filter((i: DataType) => {
      switch (i.label) {
        case "new in":
          return i.id === 1;
        case "sofas":
          return i.id === 10;
        case "table":
          return i.id === 28;
        case "beds":
          return i.id === 46;
        case "linghting":
          return i.id === 55;
        case "kitchen":
          return i.id === 82;
        case "storage":
          return i.id === 127;
        case "textils":
          return i.id === 64;
        default:
          return false;
      }
    });
    setDatas(filterdata);
  }, []);

  return (
    <>
      {loading ? (
        <MainCon style={{ paddingTop: "145px" }} className="Maincontainer">
          <MainLoading />
        </MainCon>
      ) : (
        <MainCon>
          <Navlink
            to={`/u`}
            style={{
              position: "fixed",
              zIndex: 999,
              top: "1%",
              left: "1%",
              color: "white",
            }}
          >
            <h2>X</h2>
          </Navlink>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="carousel22">
              <Carousel2 />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="carousel11">
              <Carousel />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <CategorieComponent />
          </motion.div>

          <motion.div
            style={{
              overflow: "scroll",
              maxWidth: "1460px",
              width: "100%",
              padding: "0px 20px",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FullWidthTabs />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ width: "100%", maxWidth: "1300px" }}
          >
            <DotsContainer>
              <div>
                <h2>popular products</h2>
              </div>
              <div className="btnwrap">
                <div className="bottom">
                  <IconButton onClick={prevSlide} className="name">
                    ❮
                  </IconButton>
                </div>
                <div className="bottom">
                  <IconButton onClick={nextSlide} className="name">
                    ❯
                  </IconButton>
                </div>
              </div>
            </DotsContainer>

            <CarouselContainer
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CarouselTrack
                $slideIndex={slideIndex}
                $slidesToShow={slidesToShow}
                className="CarouselTrack"
              >
                {datas.map((val, index) => (
                  <CarouselItem key={val.id || val.label || index}>
                    <Navlink to={`/stul/${val.id}`}>
                      <BtnWrap4>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          <Carouselimgwrapp>
                            <img src={val.images} alt="" />
                            <h6></h6>
                            <h5>{val.desc1}</h5>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <h4>{val.cost}</h4>
                            </div>
                          </Carouselimgwrapp>
                        </motion.div>
                      </BtnWrap4>
                    </Navlink>
                  </CarouselItem>
                ))}
              </CarouselTrack>
            </CarouselContainer>
          </motion.div>

          <motion.div
            style={{
              overflow: "scroll",
              maxWidth: "1460px",
              width: "100%",
              padding: "0px 20px",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <HotDisc />
          </motion.div>

          <motion.div
            style={{
              overflow: "scroll",
              maxWidth: "1460px",
              width: "100%",
              padding: "0px 20px",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <ImgComponent />
          </motion.div>
        </MainCon>
      )}
    </>
  );
};

export default MainComponent;
