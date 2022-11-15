import React from "react";
import { useField } from "formik";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

const TextInput = React.forwardRef((props, ref) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="form__group mt-16">
        <label htmlFor={props.id || props.name} className="form__label">
          {props.label}
        </label>
        {props.name === "password" || props.name === "confirmPassword" ? (
          <div className="form__password">
            <input
              className={
                meta.touched && meta.error ? "form__field error" : "form__field"
              }
              {...field}
              {...props}
              ref={ref}
              type={showPassword ? "text" : "password"}
            />
            <button
              className="btn--password"
              onClick={togglePassword}
              type="button"
            >
              {showPassword ? (
                <AiOutlineEye className="eye-icon" />
              ) : (
                <AiOutlineEyeInvisible className="eye-icon" />
              )}
            </button>
          </div>
        ) : (
          <input
            className={
              meta.touched && meta.error ? "form__field error" : "form__field"
            }
            {...field}
            {...props}
            ref={ref}
          />
        )}
        {meta.touched && meta.error ? (
          <div className="form__error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
});

export default TextInput;
