import { useSelector } from "react-redux";
import Span from "../../ui/Span";
function Hamburger() {
  const checked = useSelector((state) => state.menu.checked);
  const mouseIn = useSelector((state) => state.menu.mouseIn);

  return (
    <>
      {checked && (
        <div
          className="fixed inset-0 left-[200px] z-40 bg-black/30"
          onClick={() => dispatch(updateCheck())}
        />
      )}

      {/* Hamburger button */}
      <label
        htmlFor="mobile-menu"
        className={`peer-label fixed top-5 right-4 z-500 flex h-5 w-5 cursor-pointer items-center rounded-full bg-amber-200 sm:hidden ${checked ? "bg-green-200" : ""}`}
        onMouseOver={() => {
          dispatch(updateMouseIn(true));
          console.log(mouseIn);
        }}
        onMouseLeave={() => dispatch(updateMouseIn(false))}
      >
        <Span
          backgroundColor={"bg-black"}
          checked={checked}
          position={"center"}
          hover={mouseIn}
        />
        <Span
          backgroundColor={"bg-black"}
          checked={checked}
          position={"top"}
          hover={mouseIn}
        />
        <Span
          backgroundColor={"bg-black"}
          checked={checked}
          position={"bottom"}
          hover={mouseIn}
        />
      </label>
    </>
  );
}

export default Hamburger;
