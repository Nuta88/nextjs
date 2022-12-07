import styles from '../../styles/Form.module.scss';

export const FormField = ({ label, name, error, children }) => (
  <div className={styles.inputWrap}>
    <label
      htmlFor={name}
      className={styles.label}
    >
      {label}
    </label>
    {children}
    <label
      htmlFor={name}
      role="alert"
      className={styles.inputError}
    >
      {error}
    </label>
  </div>
);
