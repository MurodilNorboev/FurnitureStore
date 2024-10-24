import { useEffect, useState } from "react";
import { mockDatail, mockDatailType } from "../mock/navbarDatail/navbar.mock";
import { useNavigate, useParams } from "react-router-dom";
import { Navlink } from "../styles/LINK";

const DatailMenusID = () => {
    const { id } = useParams(); 
    const [data, setData] = useState<mockDatailType | null>(null);

    useEffect(() => {
      const alldatail = mockDatail.find(item => item.id === Number(id)); 
      setData(alldatail || null); 
    }, [id]);

  return (
    <div style={{ paddingTop: "90px" }}>
        {data ? ( 
          <>
            <h1>{data.label}</h1>
            <Navlink to={`/datail/${data.id}`}>
              <img src={data.img} alt={data.label} />
            </Navlink>
            <img src={data.imgURL} alt={data.label} />
            {/* <ul>
                {data.description.map((descItem) => (
                    <li key={descItem.id}>{descItem.desc}</li>
                ))}
            </ul> */}
          </>
        ) : (
          <p>Loading...</p> 
        )}
    </div>
  )
}

export default DatailMenusID;



