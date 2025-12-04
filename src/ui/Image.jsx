import { useState } from "react";
import { TiZoom } from "react-icons/ti";
import { NavLink } from "react-router-dom";
function Image({ url, id }) {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      {showButton && <TiZoom className="absolute top-5 right-0 size-10" />}
      <img
        src={url}
        className={`relative h-50 w-50 object-cover object-center p-8 transition-all ${showButton ? "scale-[1.2]" : ""} `}
      />

      <NavLink to={`/product/${id}`} className="absolute inset-0" />
    </div>
  );
}

export default Image;
