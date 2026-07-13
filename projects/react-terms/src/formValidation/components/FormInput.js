import styles from "./Forminput.module.css";

const FormInput = (props) => {
  const { onChange, formError, label, ...inputProps } = props;

  return (
    <div className={`${styles.formInput} ${formError ? styles.error : null}`}>
      <label htmlFor={props.name}>{label}</label>
      <input {...inputProps} onChange={onChange} />
      {formError && <span>{formError}</span>}
    </div>
  );
};

export default FormInput;
