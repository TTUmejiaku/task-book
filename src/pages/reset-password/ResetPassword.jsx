import React, { createRef } from "react";
import { Formik, Form } from "formik";
import { resetPasswordSchema } from "../../schemas/formSchema";
import { TextInput } from "../../components/customInputs";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useUserAuthContext } from "../../contexts/AuthContext";

const ResetPassword = () => {
  const emailRef = createRef();
  const {
    resetPassword,
    errorMessage,
    successMessage,
    setSuccessMessage,
    setErrorMessage,
  } = useUserAuthContext();

  return (
    <div className="sign-up">
      <img src={logo} alt="logo" />
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
        }}
        validationSchema={resetPasswordSchema}
        onSubmit={async (values, actions) => {
          const { email, password } = values;

          setErrorMessage("");
          try {
            await resetPassword(email, password);
            setSuccessMessage(`Check your inbox for further instructions`);
            setTimeout(() => {
              actions.resetForm();
              setSuccessMessage("");
            }, 2000);
          } catch (error) {
            setErrorMessage(error.message);
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <h3 className="title">Reset Password</h3>
            {errorMessage && (
              <div className="error-message mt-16">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="success-message mt-16">{successMessage}</div>
            )}

            <TextInput
              type="email"
              name="email"
              placeholder="E-mail"
              ref={emailRef}
            />

            <button
              disabled={isSubmitting}
              type="submit"
              className="form__btn m-auto mt-20"
            >
              Reset Password
            </button>
            <Link to="/" className="mt-16  forgot-password">
              Login
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
