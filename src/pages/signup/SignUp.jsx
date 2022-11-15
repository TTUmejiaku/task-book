import React, { createRef } from "react";
import { Formik, Form } from "formik";
import "./signUp.scss";
import { formSchema } from "../../schemas/formSchema";
import { TextInput } from "../../components/customInputs";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { useUserAuthContext } from "../../contexts/AuthContext";

const SignUp = () => {
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmRef = createRef();
  const usernameRef = createRef();
  const {
    signup,
    errorMessage,
    successMessage,
    setSuccessMessage,
    setErrorMessage,
  } = useUserAuthContext();
  const navigate = useNavigate();

  return (
    <div className="sign-up">
      <img src={logo} alt="logo" />
      <div className="container">
        <Formik
          initialValues={{
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
          }}
          validationSchema={formSchema}
          onSubmit={async (values, actions) => {
            const { email, password, username } = values;
            setErrorMessage("");
            try {
              await signup(email, password, username, actions);
              setSuccessMessage(
                `${username}, your account was created successfully`
              );
              setTimeout(() => {
                setSuccessMessage("");
                navigate("/");
              }, 1000);
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
              <h3 className="title">Register</h3>
              {errorMessage && (
                <div className="error-message  mt-16">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="success-message mt-16">{successMessage}</div>
              )}
              <TextInput
                type="text"
                name="username"
                ref={usernameRef}
                placeholder="Username"
              />
              <TextInput
                type="email"
                name="email"
                placeholder="E-mail"
                ref={emailRef}
              />
              <TextInput
                type="text"
                name="password"
                placeholder="Password"
                ref={passwordRef}
              />
              <TextInput
                type="text"
                name="confirmPassword"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
              />
              <button
                disabled={isSubmitting}
                type="submit"
                className="form__btn m-auto mt-20"
              >
                Sign up
              </button>
              <small className="form__link mt-16">
                Have an account already? <Link to="/">Login</Link>
              </small>
              <div className="form__divider mt-16">
                <span className="left"></span>
                <span>or</span>
                <span className="right"></span>
              </div>
              <div className="form__socials mt-16">
                <FaFacebookSquare className="icon facebook" />
                <FaTwitterSquare className="icon twitter" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
