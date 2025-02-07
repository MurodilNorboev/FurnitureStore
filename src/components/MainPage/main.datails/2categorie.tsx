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

const CategorieComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [mock, setMock] = useState<any[]>([]);
  const maxItems = 9;

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

  // Mockdata filter
  useEffect(() => {
    const filterMockData = Data.filter((i: DataType) =>
      uniqueCategories.includes(i.label)
    );
    setMock(filterMockData);
  }, []);

  // Backend ma'lumotlarini olish
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseAPI}/product/all`);
        const resData = response.data.data;

        const filteredData = resData.filter((item: any) =>
          uniqueCategories.includes(item.types)
        );
        setData(filteredData.slice(0, maxItems));
      } catch (error: any) {
        toast.error("Ma'lumotlarni olishda xato:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Categorie>
        {/* Backend data xaritasi */}
        {data.map((value, index) => {
          // Mock data image`ni backend data`ga qo‘shish
          const mockItem = mock[index];
          const imageSrc = mockItem ? mockItem.images1 : value.images1; // Agar mockItem bo‘lsa, mockning image1 ni ishlatamiz
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
        })}

        {/* All Categories Button */}
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
                  delay: (data.length + mock.length) * 0.2,
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
      </Categorie>
    </>
  );
};

export default CategorieComponent;



// const SimpleSlider = (Props: Tname) => {
//   const [age, setAge] = useState("");
//   const [filteredData, setFilteredData] = useState<DataType[]>(Data);
//   const [isFiltered, setIsFiltered] = useState<boolean>(false);
//   const [isImageVisible, setImageVisible] = useState<boolean>(false);
//   const [page, setPage] = useState<number>(1);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(
//     "Mirrors"
//   );
//   const [data, setData] = useState<DataType[]>([]);
//   const isTablet = useMediaQuery("(max-width:1200px)");
//   const isMobaile1 = useMediaQuery("(max-width:840px)");
//   const isMobile = useMediaQuery("(max-width:550px)");
//   const ITEMS_PER_PAGE = isMobile ? 4 : isMobaile1 ? 8 : isTablet ? 12 : 16;
//     // likes
//     const navigate = useNavigate();
//     const [getLike, setLikes] = useState<any[]>([]);
//     const [user, setUser] = useState<string>("");
//     const dispatch = useDispatch<AppDispatch>();
//     const [datas, setDatas] = useState<any[]>([]);
//     const carts = useSelector((state: RootState) => state.carts.items);

//     const fetchDataLikes = async () => {
//       if (!user) return;
  
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch(`${baseAPI}/likes/getlikes/${user}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
  
//         if (data.success && data.data.length > 0) {
//           setLikes(data.data[0].furniture);
//         }
//       } catch (error: any) {
//         toast.error("Yoqtirgan mebellarni olishda xatolik:", error);
//       }
//     }; // get likelar
  
//     const handleLike = async (
//       e: React.MouseEvent<SVGSVGElement, MouseEvent>,
//       id: string
//     ) => {
//       e.preventDefault();
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("Token mavjud emas!");
//         return;
//       }
  
//       try {
//         const { data } = await axios.post(
//           `${baseAPI}/likes/like`,
//           { user: user, likeId: id },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         await fetchDataLikes();
//         setLikes((prevLikes) => [...prevLikes, data.like]);
//         dispatch(addLike(data.like));
//       } catch (error) {
//         console.error("Like qo'shishda xatolik:", error);
//       }
//     };
  
//     const handleDeleteLike = async (id: string) => {
//       try {
//         const token = localStorage.getItem("token");
//         const { data } = await axios.delete(`${baseAPI}/likes/likedelete/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         await fetchDataLikes();
//         // setLikes((prevLikes) => prevLikes.filter((like) => like._id !== id));
//         dispatch(removeLike(data.like));
//       } catch (error) {
//         console.error("Error in handleDeleteLike:", error);
//       }
//     };
  
//     useEffect(() => {
//       if (user) {
//         fetchDataLikes();
//       }
//     }, [user]);

//     useEffect(() => {
//       const ftechData = async () => {
//         const token = localStorage.getItem("token");
//         try {
//           const { data }: any = await axios.get(`${baseAPI}/userFur/me`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           const filter = data.data;
//           const filter2 = filter._id;
  
//           setUser(filter2);
//         } catch (error: any) {
//          toas.error(error)
//         }
//       };
//       ftechData();
//     }, []);
//     // add to cart
//     const fetchData = async () => {
//       try {
//         const {
//           data: { data },
//         } = await axios.get(`${baseAPI}/product/all`);
//         setDatas(data);
//       } catch (error: any) {
//         toast.error("Error fetching data:", error);
//       }
//     };
  
//     const fetchCartData = async () => {
//       try {
//         const { cartsData } = await (
//           await fetch(`${baseAPI}/product/cart-count`)
//         ).json();
//         const allFurniture = cartsData.flatMap(
//           ({ _id: cartID, furniture }: any) =>
//             furniture.map((fur: any) => ({ ...fur, cartID }))
//         );
//         dispatch(setCarts(allFurniture)); // Use Redux dispatch to set carts
//       } catch (error: any) {
//         toast.error("Error fetching cart data:", error);
//       }
//     };
//     const handleAddCart = async (fur_id: string, user_id: string) => {
//       try {
//         const {
//           data: { success },
//         } = await axios.post(`${baseAPI}/product/order`, {
//           user: { _id: user },
//           fur_id,
//         });
//         if (success) fetchCartData();
//       } catch (error) {
//         console.error("Error adding to cart:", error);
//       }
//     };
  
//     const handleDeleteCart = async (cart_id: string, fur_id: string) => {
//       try {
//         const token = localStorage.getItem("token");
//         const {
//           data: { success },
//         } = await axios.delete(
//           `${baseAPI}/product/cart/${cart_id}/furniture/${fur_id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         if (success) fetchCartData();
//         fetchData();
//       } catch (error) {
//         console.error("Error deleting from cart:", error);
//       }
//     };
  
//     const handleAddAndDelete = (e: React.MouseEvent, item: any) => {
//       e.stopPropagation();
  
//       const cartItem = carts.find((cart) => cart._id === item._id);
//       const cartID: any = cartItem ? cartItem.cartID : null;
  
//       if (!cartItem) {
//         handleAddCart(item._id, "1");
//       } else {
//         handleDeleteCart(cartID, item._id);
//       }
//     };

//   const allowedCategories = [
//     "Mirrors",
//     "Wall Art",
//     "Clocks",
//     "Vases",
//     "Candles",
//     "Shelves",
//     "Plant Pots",
//     "Bathroom Accessories",
//   ];

//   const combinedData = useMemo(
//     () =>
//       [...Data, ...data].filter((item: any) =>
//         allowedCategories.includes(item.categories)
//       ),
//     [Data, data]
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${baseAPI}/product/all`);
//         const resData = response.data.data;
//         setData(resData);
//       } catch (error: any) {
//         toast.error("Error fetching data:", error.message);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setImageVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const groupedData = useMemo(() => {
//     return combinedData.reduce((acc, item: any) => {
//       if (item.categories) {
//         if (!acc[item.categories]) acc[item.categories] = [];
//         acc[item.categories].push(item);
//       }
//       return acc;
//     }, {} as Record<string, DataType[]>);
//   }, [combinedData]);

//   const currentData = useMemo(() => {
//     if (selectedCategory && groupedData[selectedCategory]) {
//       return groupedData[selectedCategory];
//     }
//     return [];
//   }, [selectedCategory, groupedData]);

//   const displayedData = isFiltered ? filteredData : currentData;
//   const totalPages = Math.ceil(displayedData.length / ITEMS_PER_PAGE);
//   const startIdx = (page - 1) * ITEMS_PER_PAGE;
//   const endIdx = startIdx + ITEMS_PER_PAGE;
//   const paginatedData = displayedData.slice(startIdx, endIdx);

//   const handleCategorySelection = (category: string) => {
//     setSelectedCategory(category);
//     setIsFiltered(false);
//   };

//   const handleFilterAndSort = (filter: {
//     popular?: string;
//     new?: string;
//     lowToHigh?: boolean;
//     highToLow?: boolean;
//   }) => {
//     let filteredArr = [...combinedData];

//     if (filter.popular === "popular") {
//       filteredArr = filteredArr.filter((item) => item.Popular === "Popular");
//     } else if (filter.new === "new") {
//       filteredArr = filteredArr.filter((item) => item.new === "new");
//     }

//     if (filter.lowToHigh) {
//       filteredArr = filteredArr.sort(
//         (a, b) => getCostNumber(a.cost) - getCostNumber(b.cost)
//       );
//     } else if (filter.highToLow) {
//       filteredArr = filteredArr.sort(
//         (a, b) => getCostNumber(b.cost) - getCostNumber(a.cost)
//       );
//     }

//     setFilteredData(filteredArr);
//     setIsFiltered(true);
//   };

//   const handleClearSort = () => {
//     setFilteredData(combinedData);
//     setIsFiltered(false);
//     setAge("");
//   };

//   const handleChangePagination = (
//     event: React.ChangeEvent<unknown>,
//     value: number
//   ) => {
//     setPage(value);
//   };

//   const getCostNumber = (cost: string) => {
//     return parseFloat(cost.replace("$", "").trim());
//   };

//   return (
//     <TopContainer>
//       <PagesName>
//         <h3>Home</h3>
//         <img src={home} alt="" />
//         <h4>{Props?.name}</h4>
//       </PagesName>

//       <TopContent className="TopContent">
//         {Object.keys(groupedData).map((category) => (
//           <BtnWrap2
//             onClick={() => handleCategorySelection(category)}
//             key={category}
//             className={selectedCategory === category ? "active" : ""}
//           >
//             <AnimatedButton2>
//               <div className="catcontan">
//                 <div className="catContainer">
//                   <div className="cat_con_wrap">
//                     {groupedData[category][0]?.img && (
//                       <img src={groupedData[category][0].img} alt={category} />
//                     )}
//                   </div>
//                   <h5>{category}</h5>
//                 </div>
//               </div>
//             </AnimatedButton2>
//           </BtnWrap2>
//         ))}
//       </TopContent>

//       <Sorts>
//         <h2>Furniture</h2>
//         <div className="FormControl">
//           <FormControl fullWidth sx={{ maxWidth: "240px", width: "100vw" }}>
//             <InputLabel id="sort-select-label">Sort</InputLabel>
//             <Select
//               sx={{ borderRadius: "0px", border: "0.01px solid #D1BCB2" }}
//               labelId="sort-select-label"
//               id="sort-select"
//               value={age}
//               label="Sort"
//               onChange={(e) => setAge(e.target.value)}
//             >
//               <MenuItem
//                 onClick={() => handleFilterAndSort({ popular: "popular" })}
//                 value={10}
//               >
//                 Popular
//               </MenuItem>
//               <MenuItem
//                 onClick={() => handleFilterAndSort({ new: "new" })}
//                 value={20}
//               >
//                 New
//               </MenuItem>
//               <MenuItem
//                 onClick={() => handleFilterAndSort({ lowToHigh: true })}
//                 value={30}
//               >
//                 Price: Low to High
//               </MenuItem>
//               <MenuItem
//                 onClick={() => handleFilterAndSort({ highToLow: true })}
//                 value={40}
//               >
//                 Price: High to Low
//               </MenuItem>
//             </Select>
//           </FormControl>

//           <button onClick={handleClearSort} value={50}>
//             Cancel
//           </button>
//         </div>
//       </Sorts>

//       <SlaiderContainer className="SlaiderContainer">
//           <ImageGrid>
//           {paginatedData.length > 0 ? (
//             paginatedData.map((item: any, ind) => (
//               <ImageContainer
//                 key={`${item.types}-${item._id} || ${item.id} && ${ind}`}
//               >
//                 <Imagecontent
//                   onClick={(e) => {
//                     const target = e.target as HTMLElement;

//                     if (!target.closest("button")) {
//                       const foundItem: any = paginatedData;

//                       if (foundItem) {
//                         if (foundItem._id !== item._id) {
//                           navigate(`/datailRoom/${item._id}`);
//                         } else {
//                           navigate(`/datailRoom2/${item.id}`);
//                         }
//                       }
//                     }
//                   }}
//                 >
//                   <Imagecontent>
//                     <Image
//                       className="Image"
//                       src={item.images}
//                       alt={`img-${ind + startIdx}`}
//                       onLoad={() => {
//                         setTimeout(() => setImageVisible(true), 100);
//                       }}
//                     />

//                     <div className="savebtnwrap">
//                       <button className="like">
//                         <svg
//                           onClick={(e) => {
//                             if (
//                               getLike &&
//                               getLike.some(
//                                 (itemLike) => itemLike?._id === item?._id
//                               )
//                             ) {
//                               handleDeleteLike(item._id);
//                             } else {
//                               handleLike(e, item._id);
//                             }
//                           }}
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           width="30px"
//                           height="30px"
//                           style={{
//                             cursor: "pointer",
//                             fill: getLike?.some(
//                               (itemLike) => itemLike?._id === item._id
//                             )
//                               ? "#ffbb00"
//                               : "transparent",
//                             stroke: "#ffbb00",
//                             strokeWidth: getLike?.some(
//                               (itemLike) => itemLike?._id === item._id
//                             )
//                               ? "0"
//                               : "2",
//                             transition: "all 0.3s ease",
//                           }}
//                         >
//                           <path d="M12 21.35C12 21.35 4 13.28 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04 0.99 3.57 2.36L12 9l0.93-1.64C13.46 5.99 14.96 5 16.5 5 18.5 5 20 6.5 20 8.5c0 4.78-8 12.85-8 12.85z" />
//                         </svg>
//                       </button>

//                       <button onClick={(e) => handleAddAndDelete(e, item)}>
//                         {carts.find((cart) => cart._id === item._id) ? (
//                           <img
//                             className="saveIcon"
//                             style={{ border: "0px" }}
//                             src={saveIcon}
//                             alt=""
//                           />
//                         ) : (
//                           <TurnedInNotIcon
//                             style={{
//                               border: "none",
//                               width: "30px",
//                               height: "31px",
//                               color: "#DBA514",
//                             }}
//                           />
//                         )}
//                       </button>
//                     </div>
//                   </Imagecontent>
//                   <h6></h6>
//                   <h5>{item.types}</h5>
//                   <h4>{item.cost}</h4>
//                 </Imagecontent>
//               </ImageContainer>
//             ))
//           ) : (
//             <div
//               className="Errors"
//               style={{
//                 textAlign: "center",
//                 marginTop: "20px",
//                 fontSize: "18px",
//                 color: "red",
//               }}
//             >
//               hechnima yoq !
//             </div>
//           )}
//         </ImageGrid>
//       </SlaiderContainer>

//       <StyledPagination>
//         <Pagination
//           count={totalPages}
//           page={page}
//           onChange={handleChangePagination}
//         />
//       </StyledPagination>
//     </TopContainer>
//   );
// };

// export default SimpleSlider;
