import { AnimatedButton2, BtnWrap2, Categorie } from "../../styles/main"
import categories from '../../../assets/categories.svg'
import circlebtn from '../../../assets/CircleBtn2.svg'
import { Navlink } from "../../styles/LINK"
import { T } from "../../types/maintp"

const CategorieComponent = ( props: T) => {
     return (
    <>
   <Categorie>
            <Navlink to={"/furniture1"}>
                    <BtnWrap2>
                    <AnimatedButton2>
                        <div className="catcontan">
                            <div className="catContainer">
                                <div className="cat_con_wrap">
                                    <img src={props.name1} alt="Sofa" />
                                </div>
                                <h5>Sofas</h5>
                            </div>
                        </div>
                    </AnimatedButton2>
                </BtnWrap2>
                </Navlink>
                <Navlink to={`/furniture2`}>
                    <BtnWrap2>
                    <AnimatedButton2>
                        <div className="catcontan">
                            <div className="catContainer">
                                <div className="cat_con_wrap">
                                    <img src={props.name2} alt="Sofa" />
                                </div>
                                <h5>chairs</h5>
                            </div>
                        </div>
                    </AnimatedButton2>
                </BtnWrap2>
                </Navlink>
                <Navlink to={`/furniture3`}>
                    <BtnWrap2>
                    <AnimatedButton2>
                        <div className="catcontan">
                            <div className="catContainer">
                                <div className="cat_con_wrap">
                                    <img src={props.name3} alt="Sofa" />
                                </div>
                                <h5>table</h5>
                            </div>
                        </div>
                    </AnimatedButton2>
                </BtnWrap2>
                </Navlink>
                <Navlink to={`/furniture4`}>
                    <BtnWrap2>
                    <AnimatedButton2>
                        <div className="catcontan">
                            <div className="catContainer">
                                <div className="cat_con_wrap">
                                    <img src={props.name4} alt="Sofa" />
                                </div>
                                <h5>storage</h5>
                            </div>
                        </div>
                    </AnimatedButton2>
                </BtnWrap2>
                </Navlink>
                <Navlink to={`/furniture5`}>
                    <BtnWrap2>
                    <AnimatedButton2>
                        <div className="catcontan">
                            <div className="catContainer">
                                <div className="cat_con_wrap">
                                    <img src={props.name5} alt="Sofa" />
                                </div>
                                <h5>beds</h5>
                            </div>
                        </div>
                    </AnimatedButton2>
                </BtnWrap2>
                </Navlink>
                <Navlink to={`/furniture6`}>
                    <BtnWrap2>
                    <AnimatedButton2>
                        <div className="catcontan">
                            <div className="catContainer">
                                <div className="cat_con_wrap">
                                    <img src={props.name6} alt="Sofa" />
                                </div>
                                <h5>lighting</h5>
                            </div>
                        </div>
                    </AnimatedButton2>
                </BtnWrap2>
                </Navlink>
                <Navlink to={`/furniture7`}>
                    <BtnWrap2>
                    <AnimatedButton2>
                        <div className="catcontan">
                            <div className="catContainer">
                                <div className="cat_con_wrap">
                                    <img src={props.name7} alt="Sofa" />
                                </div>
                                <h5>textiles</h5>
                            </div>
                        </div>
                    </AnimatedButton2>
                </BtnWrap2>
                </Navlink>
                <Navlink to={`/furniture8`}>
                    <BtnWrap2>
                    <AnimatedButton2>
                        <div className="catcontan">
                            <div className="catContainer">
                                <div className="cat_con_wrap">
                                    <img src={props.name8} alt="Sofa" />
                                </div>
                                <h5>decor</h5>
                            </div>
                        </div>
                    </AnimatedButton2>
                </BtnWrap2>
                </Navlink>
                <Navlink to={`/furniture9`}>
                    <BtnWrap2>
                    <AnimatedButton2>
                        <div className="catcontan">
                            <div className="catContainer">
                                <div className="cat_con_wrap">
                                    <img src={props.name9} alt="Sofa" />
                                </div>
                                <h5>kitchen</h5>
                            </div>
                        </div>
                    </AnimatedButton2>
                </BtnWrap2>
                </Navlink>
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
    </>
  )
}

export default CategorieComponent