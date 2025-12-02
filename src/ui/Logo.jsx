function Logo() {
  return (
    <div className="logo flex items-center gap-2">
      <img
        src="mango.png"
        alt=""
        className="aspect-auto w-10 text-shadow-yellow-200"
      />
      <p className="tracking-[3px]">
        <span className="rubik-vinyl-regular">Poké</span>{" "}
        <span className="hachi-maru-pop-regular">芒</span>
      </p>
    </div>
  );
}

export default Logo;
