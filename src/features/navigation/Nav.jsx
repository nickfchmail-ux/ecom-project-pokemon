import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCheck } from "../../state/global/slices/menuSlice";
import Hamburger from "./Hamburger";
import Links from "./Links";
function Nav() {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.menu.checked);
  return (
    <>
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        id="mobile-menu"
        className="peer hidden"
        checked={checked}
        onChange={() => dispatch(updateCheck())}
      />
      <Hamburger />
      <Links checked={checked} />
    </>
  );
}

export default memo(Nav);
