import { TextField, Button, Box } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile, login } from "../../../api/api";
import Logo from "./Logo";

const validationSchema = Yup.object({
  login: Yup.string()
    .required("Login is required")
    .min(3, "Login must contain at least 3 characters"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must contain at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    getProfile()
      .then(() => {
        navigate("/products");
      })
      .catch(() => {
        setCheckingAuth(false);
      });
  }, [navigate]);

  if (checkingAuth) {
    return null;
  }

  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        console.log("FORM SUBMITTED", values);

        try {
          const data = await login(values.login, values.password);
          console.log("Server response:", data);

          if (data.success) {
            document.activeElement.blur();
            navigate("/products");
          } else {
            setErrors({ submit: data.message });
          }
        } catch (error) {
          setErrors({ submit: "Ошибка сервера" });
          console.error("Error:", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: 400, margin: "0 auto" }}
        >
          <Logo />

          <Box mb={2}>
            <TextField
              name="login"
              label="Login"
              fullWidth
              value={values.login}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.login && Boolean(errors.login)}
              helperText={touched.login && errors.login}
            />
          </Box>

          <Box mb={2}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </Box>

          {errors.submit && (
            <Box mb={2} sx={{ color: "red" }}>
              {errors.submit}
            </Box>
          )}

          <Button type="submit" variant="contained" color="success" fullWidth>
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
