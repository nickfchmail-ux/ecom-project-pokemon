import { updateCheck } from "@/state/global/slices/menuSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export function VerticalNav() {
  const checked = useSelector((state) => state.menu.checked);
  const dispatch = useDispatch();
  const ref = useRef();
  useEffect(function () {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("click outside");
        checked = false;
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-full w-[200px] bg-white shadow-2xl transition-transform ${checked ? "translate-x-0" : "-translate-x-full"}`}
    >
      {" "}
      <div className="p-6" ref={ref}>
        <div className="mb-8 text-2xl font-bold">My Logo</div>
        <nav className="flex flex-col gap-6 text-lg">
          <NavLink to="/" onClick={() => dispatch(updateCheck())}>
            Home
          </NavLink>
          <NavLink to="/product" onClick={() => dispatch(updateCheck())}>
            Product
          </NavLink>
          <NavLink to="/cart" onClick={() => dispatch(updateCheck())}>
            Cart
          </NavLink>
          <NavLink to="/contact" onClick={() => dispatch(updateCheck())}>
            Contact
          </NavLink>
          <NavLink to="/table" onClick={() => dispatch(updateCheck())}>
            Table
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default VerticalNav;
