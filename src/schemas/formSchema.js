import * as yup from "yup";

const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Must be more than 2 characters")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  password: yup
    .string()
    .min(6)
    .matches(
      passwordRegEx,
      "Minimum 6 characters, 1 uppercase, 1 lowercase, 1 numeric digit"
    )
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password does not match")
    .required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
});

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Must be more than 2 characters")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  password: yup
    .string()
    .min(6)
    .matches(
      passwordRegEx,
      "Minimum 6 characters, 1 uppercase, 1 lowercase, 1 numeric digit"
    )
    .required("Required"),

  email: yup.string().email("Invalid email address").required("Required"),
});

export const resetPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required"),
});
