import { AnimatedButton2, BtnWrap2, Categorie } from "../../styles/main";
import categories from "../../../assets/categories.svg";
import circlebtn from "../../../assets/CircleBtn2.svg";
import { Navlink } from "../../styles/LINK";
import { DataType } from "../../types/maintp";
import { useEffect, useState } from "react";
import { Data } from "../../mock/mockDatail";

const CategorieComponent: React.FC = () => {
  const [data, setData] = useState<DataType[] | null>(null);

  useEffect(() => {
    const filterdata = Data.filter((i: DataType) => {
      switch (i.label) {
        case "sofas": return i.id === 10;
        case "chairs": return i.id === 19;
        case "table": return i.id === 28;
        case "storage": return i.id === 37;
        case "beds": return i.id === 46;
        case "linghting": return i.id === 55;
        case "textils": return i.id === 64;
        case "decor": return i.id === 73;
        case "kitchen": return i.id === 82;
        default: return false;
      }
    });
    setData(filterdata);
  }, []);

     return (
      <>
          {data ? (
              <Categorie>
              {data?.map((value, index) => (
                <div key={index}>
                  <Navlink to={`/stol/${value.id && value.label}`}>
                    <BtnWrap2>
                      <AnimatedButton2>
                        <div className="catcontan">
                          <div className="catContainer">
                            <div className="cat_con_wrap">
                              <img src={value.images1} alt={value.images1} />
                            </div>
                            <h5>{value.label}</h5>
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
          ) 
          : 
          (
              <p>Loading...</p>
          )}
      </>
  );
  
  
};

export default CategorieComponent;
