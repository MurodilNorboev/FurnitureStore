import { Catalog_con } from "./catalog"
import { useEffect, useState } from "react";
import { SofasDatail } from "../../mock/1sofas.datail";
import { SofasType } from "../../types/maintp";


const Ttextiles = () => {
  const [data, setData] = useState<SofasType[] | null>(null);
  useEffect(() => {
    setData(SofasDatail); 
  }, []); 
  return (
    <Catalog_con>
      {data?.map((value, index) => (
        <div key={index}>
          <img src={value.images7} alt="images" />
        </div>
      ))}
    </Catalog_con>
  )
}

export default Ttextiles