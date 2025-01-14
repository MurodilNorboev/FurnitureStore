import { Route, Router, Routes, useLocation } from "react-router-dom";
import LoginComponent from "./components/Form/login";
import RegloginComponent from "./components/Form/reglogin";
import NavbareComponent from "./components/context/navbare";
import FooterComponent from "./FOOTER/footer";
import ScrollToTop from "./components/context/scollTotop";
import ErrComponent from "./components/error/err";
import ProfilePersonal from "./components/Navbar/profile/profile.personal";
import ProfilePersonal2page from "./components/Navbar/profile/profile.2page";
import ProfilePassword from "./components/Navbar/profile/profile.password";
import MainComponent from "./components/MainPage/main";
import DatailMenusID from "./components/Navbar/dropdownmenus";
import MenusDatailComponent from "./components/Navbar/menus/menus.datail";
import OrderComponent from "./components/Navbar/Cart/Orders/order";
import CatalogPagecomponent from "./components/main.all_categorie/catalog.page/categories.pages";
import AboutComponent from "./FOOTER/about/about.con";
import DiscountComponent from "./FOOTER/discount/discount.con";
import BlogContainter from "./FOOTER/blog/blog.con";
import For_PartnerComponent from "./FOOTER/for_partners/for_partners.con";
import Contactcomponent from "./FOOTER/contacts/contacts.con";
import BlogdatailComponent from "./FOOTER/blog/blog.datail";
import DatailNavbarFilterComponent from "./components/filterDatail/filterData.Navbar";
import DatailComponent from "./components/filterDatail/filterData2";
import Ssofar from "./components/main.all_categorie/catalog_cart";
import { useState } from "react";
import MyCartCompoenent from "./components/Navbar/Cart/Cartss/Cart1";
import DatailRoomComponent from "./components/filterDatail/filterData.Room";
import RoomData from "./components/main.all_categorie/Room/room.data";
import BasicMenu from "./components/Navbar/Cart/hovercart/cart";
import LikesDatail from "./components/Likes/likes.datail";
import MyComponent from "./components/Test/test";
import Payment from "./components/Navbar/Cart/Payment/payment";
import Checkout from "./components/Navbar/Cart/checkout/checkout";

export default function RouterComponent() {
  const [carts, setCarts] = useState<any[]>([]);
  const loginin = useLocation();
  const filterCon =
    loginin.pathname === "/login" || loginin.pathname === "/regLogin";

  return (
    <>
      <ScrollToTop />

      {!filterCon && <NavbareComponent />}

      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/regLogin" element={<RegloginComponent />} />
        <Route path="/" element={<MainComponent />} />
        <Route path="/stol/:label" element={<Ssofar name="furniture" />} />
        <Route path="/stoll/:label" element={<RoomData name="furniture" />} />
        <Route
          path="/categorie"
          element={<CatalogPagecomponent name="categorie" />}
        />

        <Route
          path="/stul/:id"
          element={
            <DatailComponent
              names="furniture"
              name="Armchair, fleece"
              propse={true}
            />
          }
        />
        <Route
          path="/stul2/:id"
          element={
            <DatailNavbarFilterComponent
              names="furniture"
              name="Armchair, fleece"
              propse={true}
            />
          }
        />

        <Route path="*" element={<ErrComponent />} />
        <Route path="/menu/:id" element={<DatailMenusID />} />
        <Route
          path="/menu-datail/:label"
          element={<MenusDatailComponent name="New In" />}
        />
        <Route path="/likes" element={<LikesDatail />} />
        <Route path="/cart" element={<MyCartCompoenent />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/chekout" element={<Checkout name="Checkout" />} />
        <Route path="/order" element={<OrderComponent name="Message" />} />
        <Route
          path={"/datailRoom/:_id"}
          element={
            <DatailRoomComponent name="profile" names="Room" propse={false} />
          }
        />
        <Route
          path={"/datailRoom2/:id"}
          element={
            <DatailRoomComponent name="profile" names="Room" propse={false} />
          }
        />
        <Route path="/profile" element={<ProfilePersonal name="profile" />} />
        <Route
          path="/profile2"
          element={<ProfilePersonal2page name="profile" />}
        />
        <Route
          path="/profilePassword"
          element={<ProfilePassword name="profile" />}
        />

        <Route path="/about" element={<AboutComponent />} />
        <Route path="/blog" element={<BlogContainter />} />
        <Route path="/blogdatail/:id" element={<BlogdatailComponent />} />
        <Route path="/discount" element={<DiscountComponent />} />
        <Route path="/for_partners" element={<For_PartnerComponent />} />
        <Route path="/contacts" element={<Contactcomponent />} />

        <Route path="/t" element={<MyComponent />} />
      </Routes>

      {!filterCon && <FooterComponent />}
    </>
  );
}
