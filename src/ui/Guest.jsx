function Guest({ guest }) {
  return (
    <p className="mt-2 line-clamp-1 text-gray-600">
      {" "}
      {guest ? guest : "神祕的寶可夢... "}{" "}
    </p>
  );
}

export default Guest;
