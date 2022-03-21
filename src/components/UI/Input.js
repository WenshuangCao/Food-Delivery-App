import styles from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <input ref={ref} type="number" {...props.input} />
      <label htmlFor={props.input.id}>{props.label}</label>
    </div>
  );
});

export default Input;
