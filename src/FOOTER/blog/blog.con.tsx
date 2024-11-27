import { PagesName } from '../../components/main.all_categorie/catalog.page/catalog'
import { BlogComponent, BlogConent, BlogContainerwrap } from './blog.Style'
import home from '../../assets/home.svg'
import { useEffect, useState } from 'react';
import { Navlink } from '../../components/styles/LINK';
import { imges, imgesTypes } from './blog.mock';

const BlogContainter = () => {
  const [ data, setdata ] = useState<imgesTypes[] | null>(null);
  useEffect(() => {setdata(imges)}, []);
  const filter = data?.slice(0, 7)
  return (
    <BlogContainerwrap>
      <PagesName style={{display:"grid",gap:"50px"}}>
       <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
       <h3>Home</h3>
        <img src={home} alt="Home icon" />
        <h4>Blog</h4>
       </div>
      <div className='Blog'><h1>Blog</h1></div>
      </PagesName>
    <BlogComponent className='BlogComponent'>
      {filter?.map((val) => (
        <Navlink to={`/blogdatail/${val.id}`}>
          <BlogConent key={val.id}>
            <img src={val.img} alt="" />
            <h4></h4>
            <h5>{val.text}</h5>
            <h6>{val.data}</h6>
          </BlogConent>
        </Navlink>
      ))}
    </BlogComponent>
    </BlogContainerwrap>
  )
}

export default BlogContainter