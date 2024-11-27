import { useEffect, useState } from "react"
import axios from "axios"; 
import { baseAPI } from "../../utils/constanst";
import { Todo } from "./tests";
import { toast } from "react-toastify";

interface Todo {
  _id: string;
  title: string;
  desc: string;
}
const SimpleSlider = () => {
  const [ todo, settodo ] = useState<Todo[]>([]); 
  const [ search, setsearch ] = useState('');
  const [ title, settitle ] = useState<string>('');
  const [ desc, setdesc ] = useState<string>('');

  const addTodo = async () => {
    const { data } = await axios.post(baseAPI + '/todo/add', { title, desc } )

    if (data.success) {
      toast.success("successfull added!")
      getAllTodo('');
      console.log(getAllTodo);
    }
  }
  const handleClickinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.name === 'title') {
      setdesc(e.target.value)
    }
    if (e.target.name === 'desc') {
      settitle(e.target.value)
    }
    
  }

  const getAllTodo = async (search: string) => {
    try {
      const { data } = await axios.get(baseAPI + "/todo/get-all", {
      params: {search},
    }) //// header yoki boshqa narsa yozsaham boladi!
    
    if (data.success) {
      settodo(data.data)
      console.log(data.data);
    }


    } catch (error) {
      console.log(error);
    }
  } 
 
  useEffect(() => {
    getAllTodo('');
  }, [])
  return (
    <div style={{paddingTop:"90px",display:"flex",flexDirection:"column"}}>
         <div>
          <h1>Add</h1>
          <form>
          <input type="text" name="title" placeholder="title" onChange={handleClickinput}/>
          <input type="text" name="desc" placeholder="desc" onChange={handleClickinput} />
          <input type="submit" onClick={addTodo} />
          </form>
         </div>
         <h3>Get Data</h3>


         <div>
          <input type="text"  onChange={(e) => {
            setsearch(e.target.value)
          }}/>
          <input type="submit" onClick={() => {
            getAllTodo(search);
          }} />
         </div>

      <Todo className="todoes">
        {todo?.map((val) => (
          <div key={val._id}>
          <p>{val.title}</p> 
          <p>{val.desc}</p>
        </div>
        ))
        }  
      </Todo>

    </div>
  )
}

export default SimpleSlider



