function Description({ description }) {
  return (
    <p className="mt-3 line-clamp-1 text-sm text-gray-500">
      {description ? description : "神秘的寶可夢..."}
    </p>
  );
}

export default Description;
