import React from "react";
import { useField } from "formik";

const TextInput = React.forwardRef((props, ref) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="form__group mt-16">
        <label htmlFor={props.id || props.name} className="form__label">
          {props.label}
        </label>
        <input
          className={
            meta.touched && meta.error ? "form__field error" : "form__field"
          }
          {...field}
          {...props}
          ref={ref}
        />
        {meta.touched && meta.error ? (
          <div className="form__error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
});

export default TextInput;
