import styles from "./PaymentWindow.module.scss";
function PaymentWindow({ children }) {
  return (
    <div className={styles.window}>
      <div className={styles.form}>{children}</div>
    </div>
  );
}

export default PaymentWindow;
