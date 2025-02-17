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
import DatailComponent from "./components/filterDatail/filterData2";
import Ssofar from "./components/main.all_categorie/catalog_cart";
import MyCartCompoenent from "./components/Navbar/Cart/Cartss/Cart1";
import DatailRoomComponent from "./components/filterDatail/Filter/filterData.Room";
import RoomData from "./components/main.all_categorie/Room/room.data";
import LikesDatail from "./components/Likes/likes.container";
import Payment from "./components/Navbar/Cart/Payment/payment";
import Checkout from "./components/Navbar/Cart/checkout/checkout";
import NavDatail_Page from "./components/main.all_categorie/Navbar.datail";
import NavDatail_PageItems from "./components/main.all_categorie/Navbar.datailItems";
import MyComponent from "./components/Test/test";
import VerifyOTP from "./components/Form/verify/verify.OTP";
import ForgotPassword from "./components/Form/forgotPassword/forgot";
import ResetPassword from "./components/Form/resetPassword/reset";

export default function RouterComponent() {
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
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

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

        <Route path="/t/:types/:_id" element={<MyComponent />} />
        <Route path="/Test/:types/:_id" element={<NavDatail_Page />} />

        <Route path="/Items/:types/:_id" element={<NavDatail_PageItems />} />
      </Routes>

      {!filterCon && <FooterComponent />}
    </>
  );
}
