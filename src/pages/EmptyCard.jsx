import { IoMdArrowRoundBack } from "react-icons/io";
import { PiSmileySadBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
function EmptyCard() {
  const navigate = useNavigate();

  return (
    <div className="relative mx-auto flex h-[85vh] w-[85vw] flex-col items-center justify-center gap-10 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 -z-10 bg-black/20"></div>

      <p className="z-10 flex items-center gap-4 text-3xl font-bold text-white drop-shadow-2xl md:text-6xl">
        It is empty
        <PiSmileySadBold className="text-7xl" />
      </p>

      <p className="z-10 text-[1rem] text-white drop-shadow-lg md:text-2xl">
        Go to shopping page:
      </p>

      <button
        onClick={() => navigate("/product")}
        className="z-10 transition-all duration-300 active:scale-95"
      >
        <IoMdArrowRoundBack className="size-16 text-white drop-shadow-xl transition-all hover:scale-110 hover:text-green-300 active:text-green-100" />
      </button>
    </div>
  );
}

export default EmptyCard;
