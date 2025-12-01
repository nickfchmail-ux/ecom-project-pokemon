import { updateCheck } from "@/state/global/slices/menuSlice";
import { memo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Links({ checked }) {
  const dispatch = useDispatch();

  return (
    <>
      {/* {" "}
      {/* Mobile sidebar – 200px wide */}

      {/* Normal header – stays at the top, no giant overlay */}
    </>
  );
}

export default memo(Links);
