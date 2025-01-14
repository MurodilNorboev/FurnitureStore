import { useEffect, useMemo, useState } from "react";
import "../../styles/maine.css";
import { BtnWrap3 } from "../../styles/main";
import { Data } from "../../mock/mockDatail";
import { Navlink } from "../../styles/LINK";
import axios from "axios";
import { baseAPI } from "../../../utils/constanst";
import { toast } from "react-toastify";

const ShopBYroom: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [mock, setMock] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const combinedData = useMemo(() => [...data, ...mock], [data, mock]);

  const maxItems = 3;
  const takenCategories = new Set(); 
  const filterSlice: any[] = [];
  const uniqueCategories = ["Bedroom", "Kitchen", "Bathroom"];

  for (let i = 0; i < combinedData.length; i++) {
    const item = combinedData[i];
    if (
      uniqueCategories.includes(item.categories) &&
      !takenCategories.has(item.categories)
    ) {
      filterSlice.push(item);
      takenCategories.add(item.categories); 
      if (takenCategories.size === maxItems) break; 
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseAPI}/product/all`);
        const resData = response.data.data;
        setData(resData);
      } catch (error: any) {
        toast.error("Ma'lumotlarni olishda xato:", error);
      }
    };
    const mockData = Data.filter((i: any) => {
      return [172, 181, 190].includes(i.id);
    });
    setMock(mockData);

    fetchData();
  }, []);

  return (
    <>
      <div className="imgc">
        <div className="wraps">
          <h4>shop by room</h4>
        </div>

        <div className="image-slider-container">
          <div className="image-slider">
            {filterSlice
              .filter((item) => !selectedCategory || item.categories === selectedCategory)
              .map((val, ind) => (
                <BtnWrap3 className="shadov" key={`${val.id} || ${val.label} || ${ind}`}>
                  <Navlink to={`/stoll/${val.categories}`}>
                    <div
                      className={
                        val.categories === "Kitchen"
                          ? "image-item large-image"
                          : "image-item"
                      }
                    >
                      <img src={val.images} alt="Image 1" />
                      <h5>{val.categories}</h5>
                    </div>
                  </Navlink>
                </BtnWrap3>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBYroom;