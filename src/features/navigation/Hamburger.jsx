import { useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Span from "../../ui/Span";
function Hamburger({ checked, setChecked }) {
  const ref = useRef();

  return (
    <>
      {checked && (
        <div
          className="fixed inset-0 left-[200px] z-40 flex items-center justify-center bg-black/30 transition-all hover:text-red-500"
          onClick={(e) => {
            setChecked(!checked);
          }}
        >
          <MdOutlineCancel className="size-10" />
        </div>
      )}

      {/* Hamburger button */}
      <label
        htmlFor="mobile-menu"
        className={`peer-label fixed top-5 right-4 z-500 flex h-8 w-8 cursor-pointer items-center rounded-full bg-amber-200 transition-all duration-500 sm:hidden ${checked ? "opacity-0" : "opacity-100"}`}
      >
        <Span
          backgroundColor={"bg-black"}
          checked={checked}
          position={"center"}
        />
        <Span backgroundColor={"bg-black"} checked={checked} position={"top"} />
        <Span
          backgroundColor={"bg-black"}
          checked={checked}
          position={"bottom"}
        />
      </label>
    </>
  );
}

export default Hamburger;
