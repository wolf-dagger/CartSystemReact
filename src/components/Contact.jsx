import { Box, Container, Typography } from "@mui/material";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: { xs: "15px", sm: "20px", md: "30px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "cursive",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Contact Me
          </Typography>
        </Box>
        <Box>
          <Form />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: { xs: "15px", sm: "20px", md: "30px" },
            color: "red",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "monospace",
              fontSize: "20px",
              justifyContent: "center",
              textAlign: "center",
              color: "yellow",
            }}
          >
            In the above form I have used Material Ui and Formik for form
            creation and Yup to handle form validation.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
