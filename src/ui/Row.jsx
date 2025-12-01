function Row({ children }) {
  return (
    <div className="grid grid-cols-[minmax(100px,1fr)_repeat(7,1fr)] items-center justify-between justify-center text-center not-last:border-b not-last:border-gray-300 first:border-b first:border-amber-500 first:bg-gray-100 first:pt-0 first:font-semibold last:pb-0">
      {children}
    </div>
  );
}

export default Row;
