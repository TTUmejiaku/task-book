import React, { createRef } from "react";
import { Formik, Form } from "formik";
import { loginSchema } from "../../schemas/formSchema";
import { TextInput } from "../../components/customInputs";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useUserAuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const emailRef = createRef();
  const passwordRef = createRef();
  const usernameRef = createRef();
  const {
    login,
    errorMessage,
    successMessage,
    setSuccessMessage,
    setErrorMessage,
    googleSignIn,
  } = useUserAuthContext();
  const navigate = useNavigate();

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn();
  };

  return (
    <div className="login">
      <img src={logo} alt="logo" />
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values, actions) => {
          const { email, password, username } = values;

          setErrorMessage("");
          try {
            await login(email, password);
            setSuccessMessage(`${username}, logged in successfully`);
            setTimeout(() => {
              actions.resetForm();
              navigate("/dashboard");
              setSuccessMessage("");
            }, 1000);
          } catch (error) {
            setErrorMessage(error.message);
            setTimeout(() => {
              setErrorMessage("");
            }, 1000);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <h3 className="title">Login</h3>
            {errorMessage && (
              <div className="error-message mt-16">{errorMessage}</div>
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

            <button
              disabled={isSubmitting}
              type="submit"
              className="form__btn m-auto mt-20"
            >
              Login
            </button>
            <Link to="/reset-password" className="mt-16  forgot-password">
              Forgot Password?
            </Link>

            <div className="form__divider mt-16">
              <span className="left"></span>
              <span>or</span>
              <span className="right"></span>
            </div>
            <div className="form__socials mt-16">
              <FcGoogle className="icon" onClick={handleGoogleSignIn} />
              <FaFacebookSquare className="icon facebook" />
              <FaTwitterSquare className="icon twitter" />
            </div>
          </Form>
        )}
      </Formik>
      <small className="form__link mt-16">
        Don't have an account yet? <Link to="/signup">Register</Link>
      </small>
    </div>
  );
};

export default Login;
