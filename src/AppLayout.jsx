import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Footer from "./features/FooterPriceSummary/Footer";
import Hamburger from "./features/navigation/Hamburger";
import HorizontalNav from "./features/navigation/HorizontalNav";
import VerticalNav from "./features/navigation/VerticalNav";
import Loader from "./ui/Loader";
function AppLayout() {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const username = useSelector((state) => state.user.username);
  const isLoading = navigation.state === "loading";

  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hasCartItem = useSelector((state) => state.cart.cart).length > 0;

  return (
    <>
      {isLoading && <Loader />}

      <Hamburger checked={checked} setChecked={setChecked} />
      <HorizontalNav checked={checked} setChecked={setChecked} />
      <VerticalNav checked={checked} setChecked={setChecked} />
      <main className="overflow-y-scroll bg-gray-200 p-[10px]">
        <Outlet />
      </main>
      {hasCartItem && <Footer />}
    </>
  );
}

export default AppLayout;
