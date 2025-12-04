import Logo from "@/ui/Logo";
import { memo } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function HorizontalNav({ checked, setChecked }) {
  const cartItemQuantity = useSelector((state) => state.cart.cart).reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <div className="z-500">
      <input
        type="checkbox"
        id="mobile-menu"
        className="peer hidden"
        checked={checked}
        onChange={(e) => {
          setChecked(!checked);
        }}
      />

      <header className="horizontal-header fixed top-0 right-0 left-0 flex h-[10vh] items-center justify-between bg-amber-50/60 p-4">
        <Logo />
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
        </nav>
      </header>
    </div>
  );
}

export default memo(HorizontalNav);
