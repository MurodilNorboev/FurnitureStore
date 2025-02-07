import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseAPI } from "../../../../utils/constanst";
import {
  Container,
  TabButton,
  ButtonContainer,
  ImageGrid,
  Imagecontent,
  ImageContainer,
  Image,
  PagesName,
  buttons,
} from "./tabsStyles";
import { Navlink } from "../../../styles/LINK";

const FullWidthTabs = () => {
  const [active, setActive] = useState(0); // Default "All"
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  // Filtr va tartiblash
  const handleFilterAndSort = (filter: {
    popular?: string;
    new?: string;
    hot?: string;
    all?: string;
  }) => {
    let filteredArr = [...data]; // Barcha ma'lumotlarni nusxalash

    // Filtrni qo'llash
    if (filter.popular === "Popular") {
      filteredArr = filteredArr.filter(
        (item) => item.SpecialOffers?.toLowerCase() === "popular"
      );
    } else if (filter.new === "New") {
      filteredArr = filteredArr.filter(
        (item) => item.SpecialOffers?.toLowerCase() === "new"
      );
    } else if (filter.hot === "Hot") {
      filteredArr = filteredArr.filter(
        (item) => item.SpecialOffers?.toLowerCase() === "hot"
      );
    }

    // Har qanday filter bo'lganda oxirgi 8 ta ma'lumotni olish
    if (filter.all || filter.popular || filter.new || filter.hot) {
      filteredArr = filteredArr.reverse().slice(0, 8); // Oxirgi 8 ta
    }

    setFilteredData(filteredArr);
  };

  // Tugma bosilganda filtrni qo'llash va active-ni o'rnatish
  const handleTabClick = (id: number, filterType: string) => {
    setActive(id);

    const filterOptions = {
      popular: filterType === "Popular" ? "Popular" : undefined,
      new: filterType === "New" ? "New" : undefined,
      hot: filterType === "Hot" ? "Hot" : undefined,
      all: filterType === "All" ? "All" : undefined,
    };

    handleFilterAndSort(filterOptions);
  };

  // Ma'lumotlarni olish
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data: response } = await axios.get(`${baseAPI}/product/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data); // Barcha ma'lumotlarni saqlash
      setFilteredData(response.data.slice().reverse().slice(0, 8)); // Default "All"
    } catch (error) {
      console.error("Ma'lumotlarni olishda xatolik:", error);
    }
  };

  // Dastlab ma'lumotlarni olish va "All"ni faollashtirish
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ButtonContainer>
        {buttons.map((button) => (
          <TabButton
            key={button.id}
            active={active === button.id}
            onClick={() => handleTabClick(button.id, button.filter || "All")}
          >
            {button.label}
          </TabButton>
        ))}
      </ButtonContainer>

      <ImageGrid>
        {filteredData.map((item: any, ind) => (
          <ImageContainer key={item.id}>
            <Navlink to={`/datailRoom/${item._id}`} key={ind}>
              <Imagecontent>
                {item.SpecialOffers !== "All" && (
                  <PagesName
                    style={{
                      background:
                        item.SpecialOffers === "Popular"
                          ? "#E59D49"
                          : item.SpecialOffers === "Hot"
                          ? "#F66"
                          : "#E59D49",
                    }}
                  >
                    {item.SpecialOffers}
                  </PagesName>
                )}
                <Image
                  onMouseOver={(e) =>
                    (e.currentTarget.src = item.images2 || item.image2)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = item.images || item.image)
                  }
                  className="Image h"
                  src={item.images || item.image}
                  alt={`img-${ind}`}
                />
                <h6></h6>
                <h5
                  style={{
                    overflow: "scroll",
                    maxWidth: "200px",
                    maxHeight: "20px",
                  }}
                >
                  {item.Feature}
                </h5>
                <h4>${item.cost}</h4>
              </Imagecontent>
            </Navlink>
          </ImageContainer>
        ))}
      </ImageGrid>
    </Container>
  );
};

export default FullWidthTabs;
