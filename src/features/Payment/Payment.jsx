function Payment({ children, setIsPaymentClick, isPaymentClick }) {
  return (
    <div>
      <button
        onClick={() => setIsPaymentClick(!isPaymentClick)}
        className="bg-amber-300 px-1 py-2"
      >
        Pay
      </button>
      {children}
    </div>
  );
}

export default Payment;
