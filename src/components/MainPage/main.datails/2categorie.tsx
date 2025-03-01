import { AnimatedButton2, BtnWrap2, Categorie } from "../../styles/main";
import categories from "../../../assets/categories.svg";
import circlebtn from "../../../assets/CircleBtn2.svg";
import { Navlink } from "../../styles/LINK";
import { useEffect, useMemo, useState } from "react";
import { Data } from "../../mock/mockDatail";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";
import { baseAPI } from "../../../utils/constanst";
import { DataType } from "../../types/maintp";
import FadeLoader from "react-spinners/FadeLoader";
import { any } from "prop-types";

const CategorieComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [mock, setMock] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const maxItems = 9;

  // bu mockdata xaritasi
  const uniqueCategories = [
    "Sofa",
    "Chair",
    "Table",
    "Decor",
    "Beds",
    "Textiles",
    "Lighting",
    "Kitchen",
    "Storage",
  ];

  // mock datas
  useEffect(() => {
    const filterMockData = Data.filter((i: DataType) =>
      uniqueCategories.includes(i.label)
    );
    setMock(filterMockData);
  }, []);

  // backent datas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseAPI}/product/all`);
        const resData = response.data.data;

        const filteredData = resData.filter((item: any) =>
          uniqueCategories.includes(item.types)
        );

        const uniqueData: any[] = [];
        uniqueCategories.forEach((category) => {
          const categoryItem = filteredData.find(
            (item: any) => item.types === category
          );
          if (categoryItem) {
            uniqueData.push(categoryItem);
          }
        });

        setData(uniqueData.slice(0, maxItems));
      } catch (error: any) {
        toast.error("Ma'lumotlarni olishda xato:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Categorie>
      {/* Backend data xaritasi */}
      {data.length > 0
        ? data.map((value, index) => {
            const mockItem = mock[index];
            const imageSrc = mockItem ? mockItem.images1 : value.images1;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <Navlink to={`/Test/${value.types}/${value._id}`} key={index}>
                  <BtnWrap2>
                    <AnimatedButton2>
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          backgroundColor: "#f0f0f0",
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="catcontan"
                      >
                        <div className="catContainer">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="cat_con_wrap"
                          >
                            <img src={imageSrc} alt={value.types} />
                          </motion.div>
                          <motion.h5
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          >
                            {value.types}
                          </motion.h5>
                        </div>
                      </motion.div>
                    </AnimatedButton2>
                  </BtnWrap2>
                </Navlink>
              </motion.div>
            );
          })
        : Array(9)
            .fill(any)
            .map((value, index) => {
              return (
                <div
                  key={index}
                  className="catContainer"
                  style={{
                    minWidth: "285px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FadeLoader loading={true} color="#d5ad75" />
                </div>
              );
            })}
      {/* All Categories Button */}
      {data.length > 0 ? (
        <Navlink to={"/categorie"}>
          <BtnWrap2>
            <AnimatedButton2>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: (data.length + mock.length) * 0.1,
                }}
                viewport={{ once: true }}
                className="catcontan"
              >
                <div className="catContainer">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="all_wrap"
                  >
                    <img src={categories} alt="All Categories" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="all_icon"
                  >
                    <h5>All Categories</h5> <img src={circlebtn} alt="" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedButton2>
          </BtnWrap2>
        </Navlink>
      ) : (
        <div
          className="catContainer"
          style={{
            minWidth: "285px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FadeLoader loading={true} color="#d5ad75" />
        </div>
      )}
    </Categorie>
  );
};

export default CategorieComponent;
