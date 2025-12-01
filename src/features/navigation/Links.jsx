import { updateCheck } from "@/state/global/slices/menuSlice";
import { memo } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Links({ checked }) {
  const dispatch = useDispatch();

  const cartItemQuantity = useSelector((state) => state.cart.cart).reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <>
      {/* {" "}
      {/* Mobile sidebar – 200px wide */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[200px] bg-white shadow-2xl transition-transform ${
          checked ? "translate-x-0" : "-translate-x-full"
        }`}
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
      {/* Normal header – stays at the top, no giant overlay */}
      <header className="fixed top-0 right-0 left-0 z-40 flex h-[10vh] items-center justify-between bg-amber-50/60 p-4">
        <div>My Logo</div>
        <nav className="hidden gap-6 sm:flex">
          <NavLink
            to="/"
            className={
              "rounded-xl px-4 py-2 font-semibold text-amber-500 shadow-lg shadow-yellow-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/60 active:translate-y-0 active:shadow-amber-500/40"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={
              "rounded-xl px-4 py-2 font-semibold text-emerald-500 shadow-lg shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/60 active:translate-y-0 active:shadow-emerald-500/40"
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/cart"
            className={
              "rounded-xl px-4 py-2 font-semibold text-cyan-500 shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/60 active:translate-y-0 active:shadow-cyan-500/40"
            }
          >
            <div className="relative gap-[.5rem]">
              Cart
              {cartItemQuantity > 0 && (
                <>
                  <FaRegMessage className="absolute top-[-.45rem] right-[-1.1rem] size-[19px] animate-pulse text-2xl text-red-300 drop-shadow-lg" />
                  <span className="absolute top-[-.4rem] right-[-.9rem] text-[10px] text-red-500">
                    {cartItemQuantity < 10 ? 0 : ""}
                    {cartItemQuantity}
                  </span>
                </>
              )}
            </div>
          </NavLink>
          <NavLink
            to="/contact"
            className={
              "rounded-xl px-4 py-2 font-semibold text-lime-500 shadow-lg shadow-lime-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-500/60 active:translate-y-0 active:shadow-lime-500/40"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/table"
            className={
              "rounded-xl px-4 py-2 font-semibold text-fuchsia-500 shadow-lg shadow-fuchsia-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/60 active:translate-y-0 active:shadow-fuchsia-500/40"
            }
          >
            Table
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default memo(Links);
