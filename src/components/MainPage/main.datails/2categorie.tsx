// import { AnimatedButton2, BtnWrap2, Categorie } from "../../styles/main";
// import categories from "../../../assets/categories.svg";
// import circlebtn from "../../../assets/CircleBtn2.svg";
// import { Navlink } from "../../styles/LINK";
// import { DataType } from "../../types/maintp";
// import { useEffect, useState } from "react";
// import { Data } from "../../mock/mockDatail";

// const CategorieComponent: React.FC = () => {
//   const [data, setData] = useState<DataType[] | null>(null);

//   useEffect(() => {
//     const filterdata = Data.filter((i: DataType) => {
//       switch (i.label) {
//         case "sofas": return i.id === 10;
//         case "chairs": return i.id === 19;
//         case "table": return i.id === 28;
//         case "storage": return i.id === 37;
//         case "beds": return i.id === 46;
//         case "linghting": return i.id === 55;
//         case "textils": return i.id === 64;
//         case "decor": return i.id === 73;
//         case "kitchen": return i.id === 82;
//         default: return false;
//       }
//     });
//     setData(filterdata);
//   }, []);

//      return (
//       <>
//           {data ? (
//               <Categorie>
//               {data?.map((value, index) => (
//                 <div key={index}>
//                   <Navlink to={`/stol/${value.id && value.label}`}>
//                     <BtnWrap2>
//                       <AnimatedButton2>
//                         <div className="catcontan">
//                           <div className="catContainer">
//                             <div className="cat_con_wrap">
//                               <img src={value.images1} alt={value.images1} />
//                             </div>
//                             <h5>{value.label}</h5>
//                           </div>
//                         </div>
//                       </AnimatedButton2>
//                     </BtnWrap2>
//                   </Navlink>
//                 </div>
//               ))}
        
//               <Navlink to={"/categorie"}>
//                 <BtnWrap2>
//                   <AnimatedButton2>
//                     <div className="catcontan">
//                       <div className="catContainer">
//                         <div className="all_wrap">
//                           <img src={categories} alt="" />
//                         </div>
//                         <div className="all_icon">
//                           <h5>All Categories</h5> <img src={circlebtn} alt="" />
//                         </div>
//                       </div>
//                     </div>
//                   </AnimatedButton2>
//                 </BtnWrap2>
//               </Navlink>
//             </Categorie>
//           ) 
//           : 
//           (
//               <p>Loading...</p>
//           )}
//       </>
//   );
  
  
// };

// export default CategorieComponent;

import { AnimatedButton2, BtnWrap2, Categorie } from "../../styles/main";
import categories from "../../../assets/categories.svg";
import circlebtn from "../../../assets/CircleBtn2.svg";
import { Navlink } from "../../styles/LINK";
import { DataType } from "../../types/maintp";
import { useEffect, useState } from "react";
import { Data } from "../../mock/mockDatail";
import { motion } from "framer-motion"; // Animatsiya uchun

const CategorieComponent: React.FC = () => {
  const [data, setData] = useState<DataType[] | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false); 

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
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8,
                // backgroundColor: "#ffffff", 
              }}
              animate={{
                opacity: 1,
                scale: 1,
                // backgroundColor: "#f0f0f0", 
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              onAnimationComplete={() => setHasAnimated(true)} // Animatsiya tugagach faqat bir marta ishlaydi
              
            >
              <Navlink to={`/stol/${value.id && value.label}`}>
                <BtnWrap2>
                  <AnimatedButton2>
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        backgroundColor: hasAnimated ? "#f0f0f0" : "#ffffff", // Animatsiya tugagach fon rangi
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        backgroundColor: "#f0f0f0", // Animatsiya davomida fon rangi o'zgaradi
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
                          <img src={value.images1} alt={value.label} />
                        </motion.div>
                        <motion.h5
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          {value.label}
                        </motion.h5>
                      </div>
                    </motion.div>
                  </AnimatedButton2>
                </BtnWrap2>
              </Navlink>
            </motion.div>
          ))}

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
                    delay: data?.length * 0.2,
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
                      <img src={categories} alt="" />
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
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CategorieComponent;


