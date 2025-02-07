import React, { useEffect, useMemo, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Data } from "../../mock/mockDatail";
import { DataType, Tname } from "../../types/maintp";
import {
  AnimatedButton2,
  BtnWrap2,
  ImageGrid,
  Sorts,
  TopContainer,
  TopContent,
} from "../categories";
import styled from "styled-components";
import {
  ImageContainer,
  Imagecontent,
  PagesName,
  SlaiderContainer,
} from "./catalog";
import { Image } from "./catalog";
import useMediaQuery from "@mui/material/useMediaQuery";
import home from "../../../assets/home.svg";
import { Navlink } from "../../styles/LINK";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Skeleton from "@mui/joy/Skeleton";
import toast from "react-hot-toast";
import { baseAPI } from "../../../utils/constanst";

export const StyledPagination = styled(Stack)`
  margin-top: 20px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SimpleSlider = (Props: Tname) => {
  const isTablet = useMediaQuery("(max-width:1200px)");
  const isMobaile1 = useMediaQuery("(max-width:840px)");
  const isMobile = useMediaQuery("(max-width:550px)");
  const [page, setPage] = useState<number>(1);
  const [selectedLabel, setSelectedLabel] = useState<string | null>("Mirrors");
  const ITEMS_PER_PAGE = isMobile ? 4 : isMobaile1 ? 8 : isTablet ? 12 : 16;
  const desiredLabels = [
    "Mirrors",
    "Wall Art",
    "Clocks",
    "Vases",
    "Candles",
    "Shelves",
    "Plant Pots",
    "Bathroom Accessories",
  ];
  /// cost filter
  const [age, setAge] = React.useState("");
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [BackendData, setBackendData] = useState<any[]>([]);

  // Backend ma'lumotlarini olish
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${baseAPI}/product/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resData = await response.json();
      setBackendData(resData.data);
    } catch (error: any) {
      toast.error("Ma'lumotlarni olishda xato:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mockDataWithTypes = Data.map((item) => ({
    ...item,
    types: item.label,
    SpecialOffers: item.Popular || item.new || "", // Mock ma'lumotlarda SpecialOffers ni aniqlash
  }));

  // Backend va Mock ma'lumotlarni birlashtirish
  const combinedData = [...mockDataWithTypes, ...BackendData].filter((item) =>
    desiredLabels.includes(item.types || item.label)
  );

  // Guruhlash (faqat bir marta)
  const groupedData: Record<string, DataType[]> = useMemo(() => {
    return combinedData.reduce((acc, item) => {
      const groupKey = item.types || item.label;
      if (groupKey) {
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(item);
      }
      return acc;
    }, {} as Record<string, DataType[]>);
  }, [combinedData]);

  // Hozirgi ma'lumotlarni olish
  const currentData = useMemo(() => {
    return selectedLabel && groupedData[selectedLabel]
      ? groupedData[selectedLabel]
      : [];
  }, [selectedLabel, groupedData]);

  // Pagination handler
  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  // Labelni tanlash
  const handleLabelSelection = (label: string) => {
    setSelectedLabel(label);
    setIsFiltered(false); // Filtlarni qayta ishga tushirish
  };

  // Narxni aniqlash funksiyasi
  const getCostNumber = (cost: any) => {
    if (typeof cost === "number") return cost;
    if (typeof cost === "string") {
      return parseFloat(cost.replace("$", "").trim()) || 0;
    }
    return 0;
  };

  const handleFilterAndSort = (filter: {
    popular?: string;
    new?: string;
    lowToHigh?: boolean;
    highToLow?: boolean;
  }) => {
    let filteredArr = [...combinedData]; 

    if (filter.popular === "Popular") {
      filteredArr = filteredArr.filter(
        (item) => item.SpecialOffers?.toLowerCase() === "popular" 
      );
    } else if (filter.new === "New") {
      filteredArr = filteredArr.filter(
        (item) => item.SpecialOffers?.toLowerCase() === "new" 
      );
    } else if (filter.new === "New") {
      filteredArr = filteredArr.filter(
        (item) => item.new.toLowerCase() === "new" 
      );
    }

    // Narx bo'yicha tartiblash
    if (filter.lowToHigh) {
      filteredArr.sort((a, b) => getCostNumber(a.cost) - getCostNumber(b.cost));
    } else if (filter.highToLow) {
      filteredArr.sort((a, b) => getCostNumber(b.cost) - getCostNumber(a.cost));
    }

    // Tanlangan label bo'yicha filtr
    if (selectedLabel) {
      filteredArr = filteredArr.filter((item) => item.types === selectedLabel);
    }

    // Filterlangan ma'lumotlarni yangilash
    setFilteredData(filteredArr);
    setIsFiltered(true); // Filtirlangan ma'lumotni ishlatilganini belgilash
    setPage(1); // Paginationni qayta boshlash
  };

  // Handle age or other selector changes
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const displayedData = useMemo(() => {
    return isFiltered ? filteredData : currentData;
  }, [isFiltered, filteredData, currentData]);

  // Sahifalanadigan ma'lumotlar
  const paginatedData = useMemo(() => {
    const startIdx = (page - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    return displayedData.slice(startIdx, endIdx);
  }, [displayedData, page, ITEMS_PER_PAGE]);

  const totalPages = Math.ceil(currentData.length / ITEMS_PER_PAGE);
  const startIdx = (page - 1) * ITEMS_PER_PAGE;

  return (
    <TopContainer>
      <PagesName>
        <h3>Home</h3>
        <img src={home} alt="" />
        <h4>{Props?.name}</h4>
      </PagesName>

      <div>
        <TopContent className="TopContent">
          {Object.keys(groupedData).map((label) => (
            <BtnWrap2
              onClick={() => handleLabelSelection(label)}
              key={label}
              className={selectedLabel === label ? "active" : ""}
            >
              <AnimatedButton2>
                <div className="catcontan">
                  <div className="catContainer">
                    <div className="cat_con_wrap">
                      {groupedData[label][0]?.images && (
                        <img src={groupedData[label][0].img} alt={label} />
                      )}
                    </div>
                    <h5>{label}</h5>
                  </div>
                </div>
              </AnimatedButton2>
            </BtnWrap2>
          ))}
        </TopContent>

        <Sorts>
          <h2>Furniture</h2>
          <div className="FormControl">
            <FormControl fullWidth sx={{ maxWidth: "240px", width: "100vw" }}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                sx={{ borderRadius: "0px", border: "0.01px solid #D1BCB2" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem
                  onClick={() => handleFilterAndSort({ popular: "Popular" })}
                  value={10}
                >
                  Popular
                </MenuItem>
                <MenuItem
                  onClick={() => handleFilterAndSort({ new: "New" })}
                  value={20}
                >
                  New
                </MenuItem>

                <MenuItem
                  onClick={() => handleFilterAndSort({ lowToHigh: true })}
                  value={30}
                >
                  Price: Low to High
                </MenuItem>
                <MenuItem
                  onClick={() => handleFilterAndSort({ highToLow: true })}
                  value={40}
                >
                  Price: High to Low
                </MenuItem>
              </Select>
            </FormControl>
            <button
              onClick={() => {
                setAge("");
                setFilteredData(Data);
                setIsFiltered(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Sorts>

        <div>
          <SlaiderContainer className="SlaiderContainer">
            <ImageGrid>
              {paginatedData.map((item: any, ind) => (
                <ImageContainer key={item.id}>
                  <Navlink to={`/stul/${item.id}`}>
                    <Imagecontent>
                      <Image
                        onMouseOver={(e) =>
                          (e.currentTarget.src = item.images2 || item.image2)
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.src = item.images || item.image)
                        }
                        className="Image h"
                        src={item.images || item.image}
                        alt={`img-${ind + startIdx}`}
                      />
                      <h6></h6>
                      <h5 style={{ overflow: "scroll", maxWidth: "200px" }}>
                        {item.types}
                      </h5>
                      <h4>${item.cost}</h4>
                    </Imagecontent>
                  </Navlink>
                </ImageContainer>
              ))}
            </ImageGrid>
          </SlaiderContainer>

          <StyledPagination spacing={2}>
            <Pagination
              style={{ position: "absolute", left: "46%" }}
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
          </StyledPagination>
        </div>
      </div>
    </TopContainer>
  );
};

export default SimpleSlider;