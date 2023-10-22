import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  message: yup.string().required("Please tell me something"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values));
      toast.success("Message Sent Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      resetForm();
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "80%",
          }}
        >
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            sx={{
              color: "white",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <Box sx={{ color: "red" }} className="error-message">
              {formik.errors.firstName}
            </Box>
          )}
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            sx={{
              color: "white",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <Box sx={{ color: "red" }} className="error-message">
              {formik.errors.lastName}
            </Box>
          )}
          <TextField
            id="email"
            name="email"
            label="Email"
            sx={{
              color: "white",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <Box sx={{ color: "red" }} className="error-message">
              {formik.errors.email}
            </Box>
          )}
          <TextField
            id="message"
            name="message"
            label="Message"
            multiline
            he
            rows={2}
            sx={{
              color: "white",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <Box sx={{ color: "red" }} className="error-message">
              {formik.errors.message}
            </Box>
          )}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Form;
