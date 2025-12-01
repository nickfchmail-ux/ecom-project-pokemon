import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export function VerticalNav() {
  const checked = useSelector((state) => state.menu.checked);
  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-full w-[200px] bg-white shadow-2xl transition-transform ${checked ? "translate-x-0" : "-translate-x-full"}`}
    >
      {" "}
      <div className="p-6">
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
