import { AnimatedButton2, BtnWrap2, Categorie } from "../../styles/main"
import categories from '../../../assets/categories.svg'
import circlebtn from '../../../assets/CircleBtn2.svg'
import { Navlink } from "../../styles/LINK"

const CategorieComponent = () => {
  return (
    <Categorie>
        
        <BtnWrap2>
           <AnimatedButton2>
            <div className="catcontan">
                <div className="catContainer">
                    <div className="cat_con_wrap">
                        <img src="https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg" alt="" />
                    </div>
                    <h5>Sofas</h5>
                </div>
            </div>
           </AnimatedButton2>
        </BtnWrap2> 

        <BtnWrap2>
        <AnimatedButton2>
        <div className="catcontan"> <div className="catContainer">
            <div className="cat_con_wrap">
                <img src="https://target.scene7.com/is/image/Target/GUEST_10960559-bd22-42b2-8a17-7f4fef713e26?wid=488&hei=488&fmt=pjpeg" alt="" />
            </div>
            <h5>chairs</h5>
        </div>
        </div>
        </AnimatedButton2>
        </BtnWrap2>

        <BtnWrap2>
           <AnimatedButton2>
         <div className="catcontan"> <div className="catContainer">
            <div className="cat_con_wrap">
                <img src="https://www.oslodeco.no/cdn/shop/products/20130001_740x740_crop_center.png?v=1672924893" alt="" />
            </div>
            <h5>table</h5>
        </div>
        </div>
        </AnimatedButton2>
        </BtnWrap2>

        <BtnWrap2>
           <AnimatedButton2>
         <div className="catcontan"> <div className="catContainer">
            <div className="cat_con_wrap">
                <img src="https://mebel54.com/images/shkaf-kupe-20-27-m-dub-sonoma-v-novosibirske-6522001.jpg" alt="" />
            </div>
            <h5>storage</h5>
        </div>
        </div>
        </AnimatedButton2>
        </BtnWrap2>

        <BtnWrap2>
           <AnimatedButton2>
         <div className="catcontan"> <div className="catContainer">
            <div className="cat_con_wrap">
                <img src="https://img.edilportale.com/product-thumbs/h_PLUME-Bed-double-bed-ESTEL-GROUP-68486-reldada7c4d.jpg" alt="" />
            </div>
            <h5>beds</h5>
        </div>
        </div>
        </AnimatedButton2>
        </BtnWrap2>

        <BtnWrap2>
           <AnimatedButton2>
         <div className="catcontan"> <div className="catContainer">
            <div className="cat_con_wrap">
                <img src="https://alicelanehome.com/cdn/shop/files/lamp-0.jpg?v=1698850937" alt="" />
            </div>
            <h5>lighting</h5>
        </div>
        </div>
        </AnimatedButton2>
        </BtnWrap2>

        <BtnWrap2>
           <AnimatedButton2>
         <div className="catcontan"> <div className="catContainer">
            <div className="cat_con_wrap">
                <img src="https://www.ikea.com/us/en/images/products/ektandvinge-duvet-cover-and-pillowcase-s-anthracite-white-check__1315699_pe940532_s5.jpg?f=xxs" alt="" />
            </div>
            <h5>textiles</h5>
        </div>
        </div>
        </AnimatedButton2>
        </BtnWrap2>

        <BtnWrap2>
           <AnimatedButton2>
         <div className="catcontan"> <div className="catContainer">
            <div className="cat_con_wrap">
                <img src="https://target.scene7.com/is/image/Target/GUEST_366101fd-82ac-40bd-b38e-bfed86e3ded2?wid=488&hei=488&fmt=pjpeg" alt="" />
            </div>
            <h5>decor</h5>
        </div>
        </div>
        </AnimatedButton2>
        </BtnWrap2>

        <BtnWrap2>
           <AnimatedButton2>
         <div className="catcontan"> <div className="catContainer">
            <div className="cat_con_wrap">
                <img src="https://www.heathceramics.com/cdn/shop/products/MoonstoneBasic_web_440x440_crop_center.jpg?v=1617606271" alt="" />
            </div>
            <h5>kitchen</h5>
        </div>
        </div>
        </AnimatedButton2>
        </BtnWrap2>

       <Navlink to={"/datail"}>
       <BtnWrap2>
           <AnimatedButton2>
         <div className="catcontan"> <div className="catContainer">
            <div className="all_wrap">
                <img src={categories} alt=""  />
            </div>
            <div className="all_icon"><h5>all categories</h5> <img src={circlebtn} alt="" /></div></div>
        </div>
        </AnimatedButton2>
        </BtnWrap2>
       </Navlink>
    </Categorie>
  )
}

export default CategorieComponent