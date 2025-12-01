function Discount({ discount }) {
  return (
    discount > 0 && (
      <span className="rounded-full bg-red-500 px-3 py-1 text-[10px] text-white">
        -${discount} off
      </span>
    )
  );
}

export default Discount;
