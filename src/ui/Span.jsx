import { memo } from "react";

function Span({ backgroundColor, position, checked, hover }) {
  const standardBar =
    "absolute left-1/2 block h-[.5px] w-3 -translate-x-1/2 text-center transition-rotate duration-100 ";
  console.log(hover);
  switch (position) {
    case "center":
      return (
        <span
          className={` ${backgroundColor} ${standardBar} ${checked && "hidden"}`}
        ></span>
      );

    case "top":
      return (
        <span
          className={`${hover && !checked && "top-[5px]"} ${backgroundColor} ${standardBar} top-1.5 ${checked && "top-1/2 rotate-315"}`}
        ></span>
      );

    case "bottom":
      return (
        <span
          className={`${hover && !checked && "bottom-[5px]"} ${backgroundColor} ${standardBar} bottom-1.5 ${checked && "top-1/2 -rotate-135"}`}
        ></span>
      );
  }

  return "";
}

export default memo(Span);
