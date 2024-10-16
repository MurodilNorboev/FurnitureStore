import { AnimatedButton2, BtnWrap2, Categorie } from "../../styles/main";
import categories from "../../../assets/categories.svg";
import circlebtn from "../../../assets/CircleBtn2.svg";
import { Navlink } from "../../styles/LINK";
import { SofasData } from "../../types/maintp"; // Import qilindi
import { useEffect, useState } from "react";
import { SofasData_mock } from "../../mock/0sofas.data";

const CategorieComponent = () => {
  const [data, setData] = useState<SofasData[] | null>(null);

  useEffect(() => {
    setData(SofasData_mock); // SofasData_mockni o'rnatish
  }, []);

  return (
    <Categorie>
      {data?.map((value, index) => (
        <div key={index}>
          <Navlink to={`/stol/${value.id}`}>
            <BtnWrap2>
              <AnimatedButton2>
                <div className="catcontan">
                  <div className="catContainer">
                    <div className="cat_con_wrap">
                      <img src={value.images} alt={value.name} />
                    </div>
                    <h5>{value.name}</h5>
                  </div>
                </div>
              </AnimatedButton2>
            </BtnWrap2>
          </Navlink>
        </div>
      ))}

      <Navlink to={"/datail"}>
        <BtnWrap2>
          <AnimatedButton2>
            <div className="catcontan">
              <div className="catContainer">
                <div className="all_wrap">
                  <img src={categories} alt="" />
                </div>
                <div className="all_icon">
                  <h5>All Categories</h5> <img src={circlebtn} alt="" />
                </div>
              </div>
            </div>
          </AnimatedButton2>
        </BtnWrap2>
      </Navlink>
    </Categorie>
  );
};

export default CategorieComponent;

