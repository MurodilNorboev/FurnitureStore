import { Catalog_con } from "./catalog"
import { useEffect, useState } from "react";
import { SofasDatail } from "../../mock/1sofas.datail";
import { SofasType } from "../../types/maintp";


const Ddecor = () => {
  const [data, setData] = useState<SofasType[] | null>(null);
  useEffect(() => {
    setData(SofasDatail); 
  }, []); 
  return (
    <Catalog_con>
      {data?.map((value, index) => (
        <div key={index}>
          <img src={value.images8} alt="images" />
        </div>
      ))}
    </Catalog_con>
  )
}

export default Ddecor