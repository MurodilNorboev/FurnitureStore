import { PagesName } from '../../components/MainPage2/catalog.page/catalog'
import { BlogComponent, BlogConent, BlogContainerwrap } from './blog.Style'
import home from '../../assets/home.svg'
import { useEffect, useState } from 'react';
import { Navlink } from '../../components/styles/LINK';

export const imges = [
  {
    id: 1,
    img: 'https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTZfNTkg/MDAxNjE1ODQ4MzE5NDkz.SaP7eSBy8VK6OdnqrjJw3kSg5Lhun078uQMbxF3HXukg.86Y_etKzuDIY4J2sUxw4h2ZURDUJOkW3pSSBFlAFwGog.JPEG.ywpark5293/SmartSelect＿20210316－073930＿Google.jpg?type=w800',
    text: 'Consider the Gospel with English as 2nd Language',
    data: 'October 30, 2017'
  },
  {
    id: 2,
    img: 'https://static.onoffmix.com/afv2/thumbnail/2023/11/18/bfa23ee5ed73f4219066f7c0673b4c9e.png',
    text: 'Conservationists oppose plans to modernise a wind',
    data: 'August 24, 2013'
  },
  {
    id: 3,
    img: 'https://images.ams-prd.blv.cloud/eyJidWNrZXQiOiJpbWFnZXMtcHJkLTFvNHV6OXpieHd6cDF1Ym0iLCJrZXkiOiJmNDU4ZGVlMC04Yjg2LTQ0YjgtYWU5Yi01MDc2MDk4OTkwODAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ4MCwiaGVpZ2h0Ijo0ODB9fX0=',
    text: 'Abraham’s name became Great',
    data: 'May 9, 2014'
  },
  {
    id: 4,
    img: 'https://image.guud.com/mall/IL/item/202405/21/S_6B934AEC776B421ABFD51A5777FF92BD.jpg',
    text: 'An Ancient Journey that Affects us Today',
    data: 'October 24, 2018'
  },
  {
    id: 5,
    img: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Iq6XcIWKbpDTCetf',
    text: 'Consider the Gospel with English as 2nd Language',
    data: 'August 24, 2013'
  },
  {
    id: 6,
    img: 'https://cdn.imweb.me/thumbnail/20220624/21bc859aa3795.jpg',
    text: 'An Ancient Journey that Affects us Today',
    data: 'October 24, 2018'
  },
  {
    id: 7,
    img: 'http://www.businessreport.kr/news/photo/202406/43968_56712_2046.jpeg',
    text: 'Abraham’s name became Great',
    data: 'May 9, 2014'
  },
  {
    id: 8,
    img: 'https://source.boomplaymusic.com/group10/M00/07/28/c5b8d30ffa564f5da12c1eb42743f31b_320_320.jpg',
    text: 'Consider the Gospel with English as 2nd Language',
    data: 'October 30, 2017'
  },
]
export interface imgesTypes {
  id: number;
  img: string;
  text: string;
  data: string;
}
const BlogContainter = () => {
  const [ data, setdata ] = useState<imgesTypes[] | null>(null);
  useEffect(() => {setdata(imges)}, [])
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
      {data?.map((val) => (
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