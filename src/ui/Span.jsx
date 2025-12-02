import { memo } from "react";

function Span({ backgroundColor, position, checked }) {
  const standardBar =
    "absolute left-1/2 block h-[.5px] w-4 -translate-x-1/2 text-center transition-rotate duration-100 ";

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
          className={`${!checked && "top-[10px]"} ${backgroundColor} ${standardBar} top-1.5 ${checked && "top-1/2 rotate-315"}`}
        ></span>
      );

    case "bottom":
      return (
        <span
          className={`${!checked && "bottom-[10px]"} ${backgroundColor} ${standardBar} bottom-1.5 ${checked && "top-1/2 -rotate-135"}`}
        ></span>
      );
  }

  return "";
}

export default memo(Span);
