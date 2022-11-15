import React, { createRef, useRef } from "react";
import { Formik, Form } from "formik";
import "./user-account.scss";
import { loginSchema } from "../../schemas/formSchema";
import { TextInput, SidebarRight } from "../../components";
import { useNavigate } from "react-router-dom";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useUserAuthContext } from "../../contexts/AuthContext";
import avatar from "../../assets/header__avatar.svg";

const UserAccount = () => {
  const emailRef = createRef();
  const passwordRef = createRef();
  const usernameRef = createRef();
  const imageRef = useRef();
  const imageUploaderRef = useRef(null);
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

  const handleImageUpload = (e) => {
    const [file] = e.target.files;

    if (file) {
      const reader = new FileReader();
      const { current } = imageRef;

      reader.readAsDataURL(file);
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
    }
  };

  return (
    <div className="user-account container">
      <div className="profile mt-20">
        <div className="profile__img-wrapper">
          <div className="profile__img">
            <img src={avatar} alt="" ref={imageRef} />
          </div>
          <small
            className="link"
            onClick={() => imageUploaderRef.current.click()}
          >
            change photo
          </small>
          <input
            type="file"
            accept="image/*"
            multiple={false}
            onChange={handleImageUpload}
            ref={imageUploaderRef}
          />
        </div>
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
                navigate("/home");
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
              {errorMessage && (
                <div className="error-message mt-16">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="success-message mt-16">{successMessage}</div>
              )}
              <TextInput
                type="text"
                label="Your username:"
                name="username"
                ref={usernameRef}
                placeholder="Username"
              />
              <TextInput
                label="Your email:"
                type="email"
                name="email"
                placeholder="E-mail"
                ref={emailRef}
              />
              <TextInput
                label="Your password:"
                type="password"
                name="password"
                placeholder="Password"
                ref={passwordRef}
              />
              <div className="form__socials mt-50">
                <FcGoogle className="icon" onClick={handleGoogleSignIn} />
                <FaFacebookSquare className="icon facebook" />
                <FaTwitterSquare className="icon twitter" />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="form__btn mt-30"
              >
                Save Changes
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="right mt-20">
        <div className="premium">Get a premium subscription</div>
        <SidebarRight />
      </div>
    </div>
  );
};

export default UserAccount;
