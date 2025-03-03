import React, { useEffect, useMemo, useState } from "react";
import {
  Buttones,
  ContainerModalEnter,
  Contant,
  ModalContainer,
  ModalIMG,
  ModalMenus,
  ModalMenusWrap,
  PagesName,
} from "./dropodownstyle";
import { Navlink } from "../styles/LINK";
import { baseAPI } from "../../utils/constanst";
import { useNavigate } from "react-router-dom";
import { Data2 } from "./dropdownTS";

const DatailMenusID: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [BackendData, setBackendData] = useState<any[]>([]);
  const [isFiltered, setIsFiltered] = useState<string | null>(null);

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
      setBackendData(resData.data || []);
    } catch (error: any) {
      console.error("Ma'lumotlarni olishda xato:", error.message || error);
    }
  };

  // Data2 va BackendData ni birlashtirish va guruhlash
  const mergeAndSortData = (backendData: any[], Data2: any[]) => {
    return Data2.map((item: any) => {
      const matchingBackend = backendData.filter(
        (backendItem: any) =>
          backendItem.types === item.label || backendItem.types !== item.label
      );

      return {
        types: item.types,
        _id: item._id,
        id: item.id,
        label: item.label,
        values: [item.value1, item.value2, item.value3],
        backend: matchingBackend.map((b) => ({
          SubCategories: b.SubCategories,
          _id: b._id,
        })),
      };
    });
  };

  const sortedDatas = useMemo(
    () => mergeAndSortData(BackendData, Data2),
    [BackendData]
  );

  useEffect(() => {
    fetchData();
  }, []);

  const handleEnter = (item: any) => {
    if (!item) {
      console.warn("🚨 Warning: handleEnter ga noto'g'ri item kelyapti:", item);
      return;
    }

    setSelectedItem(item);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const handleNavigate = (subCategory: string, id: string) => {
    navigate(`/Items/${subCategory}/${id}`);
  };

  const selectedItems =
    selectedItem && typeof selectedItem === "object"
      ? Array.isArray(selectedItem)
        ? selectedItem
        : [selectedItem]
      : [selectedItem];

  // 4. Ma'lumotlarni filter qilish
  const filters = BackendData.filter((item: any) => {
    const isSpecialOfferValid = ["Hot", "Popular"].includes(
      item.SpecialOffers || ""
    );

    return (
      selectedItems.some(
        (selected: any) =>
          selected?.label &&
          selected.label.toLowerCase() === item.types.toLowerCase()
      ) && isSpecialOfferValid
    );
  }).slice(-2);

  return (
    <>
      {sortedDatas.length > 0 ? (
        <ContainerModalEnter onMouseLeave={handleClose}>
          <Contant className="grid2">
            {sortedDatas.map((group, ind) => {
              return (
                <Navlink
                  to={`/Test/${group.label}/${group?._id || group._id}`}
                  key={ind}
                >
                  <Buttones
                    className={isFiltered === group?.label ? "none" : "grid"}
                    onMouseEnter={() => handleEnter(group)}
                    style={{ cursor: "pointer", marginBottom: "10px" }}
                  >
                    {group?.label}
                  </Buttones>
                </Navlink>
              );
            })}
          </Contant>

          {showModal && selectedItem && (
            <ModalContainer onMouseLeave={handleClose}>
              <ModalMenusWrap>
                <ModalMenus>
                  <div className="textwrap">
                    {selectedItem.values.map((value: string, index: number) => (
                      <h5
                        key={index}
                        onClick={() => {
                          const match = selectedItem.backend.find(
                            (b: any) => b.SubCategories === value
                          );
                          if (match) {
                            handleNavigate(match.SubCategories, match._id);
                          } else {
                            console.error(`SubCategory "${value}" topilmadi.`);
                          }
                        }}
                      >
                        {value}
                      </h5>
                    ))}
                  </div>

                  <div className="textwrap"></div>
                </ModalMenus>

                <ModalIMG>
                  {filters.length > 0 &&
                    filters.map((filterItem: any, index: number) => {
                      return (
                        <Navlink
                          key={index}
                          to={`/datailRoom/${filterItem._id}`}
                        >
                          <div className="imgContainer" onClick={handleClose}>
                            {filterItem.SpecialOffers !== "All" && (
                              <PagesName
                                style={{
                                  background:
                                    filterItem.SpecialOffers === "Popular"
                                      ? "#E59D49"
                                      : "#F66",
                                  marginRight:
                                    filterItem.SpecialOffers === "Popular"
                                      ? "-65px"
                                      : "-100px",
                                }}
                              >
                                {filterItem.SpecialOffers}
                              </PagesName>
                            )}
                            <img
                              src={filterItem.image || ""}
                              alt={filterItem.Feature || ""}
                            />
                            <h6></h6>
                            <h5>{filterItem.label}</h5>
                            <h4>${filterItem.cost}</h4>
                          </div>
                        </Navlink>
                      );
                    })}
                </ModalIMG>
              </ModalMenusWrap>
            </ModalContainer>
          )}
        </ContainerModalEnter>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DatailMenusID;
