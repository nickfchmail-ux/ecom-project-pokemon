import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
export function VerticalNav({ checked, setChecked }) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  let Open;

  useEffect(function () {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setChecked(false);
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
      <div className="relative p-6" ref={ref}>
        <div className="mb-8 text-2xl font-bold">My Logo</div>
        <nav className="flex flex-col gap-6 text-lg">
          <NavLink to="/" onClick={() => setChecked(!checked)}>
            Home
          </NavLink>
          <NavLink to="/product" onClick={() => setChecked(!checked)}>
            Product
          </NavLink>
          <NavLink to="/cart" onClick={() => setChecked(!checked)}>
            Cart
          </NavLink>
          <NavLink to="/contact" onClick={() => setChecked(!checked)}>
            Contact
          </NavLink>
          <NavLink to="/table" onClick={() => setChecked(!checked)}>
            Table
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default VerticalNav;
