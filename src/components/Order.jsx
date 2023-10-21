import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Box sx={{ margin: "20px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "cursive",
              fontSize: "25px",
            }}
          >
            Your Orders
          </Typography>
          {location.state.orders.map((order) => (
            <Box>
              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={order.image}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ marginLeft: "12px" }}>
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {order.title.length > 20
                      ? order.title.substr(0, 20)
                      : order.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "15px" }}>
                    {order.description.length > 80
                      ? order.description.substr(0, 80)
                      : order.description}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ marginTop: { xs: "5px", sm: "7px", md: "10px" } }}
                  >
                    {order.price * order.quantity}
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gap: "10px",
                      width: "200px",
                      marginTop: "10px",
                    }}
                  >
                    <Button variant="contained" sx={{ backgroundColor: "red" }}>
                      Return
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "grey" }}
                    >
                      Download Invoice
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            sx={{ marginTop: "10px", backgroundColor: "green" }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Order;
