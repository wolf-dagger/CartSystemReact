import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  cleanCart,
} from "../slice/CartSlice";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import emptyCartImage from "../images/emptyCart.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const charges = 30;

  const orders = [...cart];

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  console.log(total);

  const incrementItemQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decrementItemQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };

  const removeItemRomCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const placeOrder = (item) => {
    toast.success("Order Placed Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/orders", {
        state: {
          orders: orders,
        },
      });
    }, 3500);

    setTimeout(() => {
      dispatch(cleanCart());
    }, 4000);
  };

  return (
    <>
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
      <Typography
        variant="h4"
        fontFamily={"cursive"}
        justifyContent={"center"}
        textAlign={"center"}
        margin={"1rem"}
      >
        Cart
      </Typography>
      {total === 0 ? (
        <Box>
          <Box sx={{ justifyContent: "center", textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontFamily: "monospace" }}>
              The Cart Is Empty
            </Typography>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <img
                src={emptyCartImage}
                alt="empty cart"
                style={{ width: "100px" }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{ marginTop: "20px", backgroundColor: "red" }}
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          className="cart"
          sx={{
            display: { xs: "grid", sm: "grid", md: "flex" },
            alignItems: "center",
            flex: 1,
          }}
        >
          {/* Left part */}
          <Box
            className="cart-left"
            sx={{
              backgroundColor: "white",
              flex: 0.6,
              margin: { xs: "5px", sm: "10px", md: "15px" },
              padding: { xs: "2px", sm: "5px", md: "10px" },
              color: "black",
              borderRadius: "10px",
            }}
          >
            {cart.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  marginBottom: { xs: "10px", sm: "15px", md: "20px" },
                }}
              >
                {/* image */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  />
                </Box>
                {/* discreption */}
                <Box
                  sx={{
                    marginTop: { xs: "4px", sm: "8px", md: "10px" },
                    marginLeft: { xs: "4px", sm: "8px", md: "10px" },
                  }}
                >
                  <p style={{ fontWeight: "800" }}>
                    {item.title.length > 60
                      ? item.title.substr(0, 60)
                      : item.title}
                  </p>
                  <p style={{ marginTop: "5px" }}>
                    {item.description.length > 80
                      ? item.description.substr(0, 80)
                      : item.description}
                  </p>
                  <p style={{ marginTop: "5px", fontWeight: "bolder" }}>
                    Price: {item.price}
                  </p>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ padding: "0" }}
                      onClick={() => decrementItemQuantity(item)}
                    >
                      -
                    </Button>
                    <p style={{ margin: "5px" }}>{item.quantity}</p>
                    <Button
                      variant="contained"
                      sx={{ padding: "0" }}
                      onClick={() => incrementItemQuantity(item)}
                    >
                      +
                    </Button>{" "}
                  </Box>
                  <Typography margin="5px">
                    Total Price:
                    <span style={{ fontWeight: "700" }}>
                      {item.price * item.quantity}
                    </span>
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "red",
                      color: "white",
                    }}
                    onClick={() => removeItemRomCart(item)}
                  >
                    Remove Item
                  </Button>
                </Box>
                {/* count Button */}
                <Box></Box>
              </Box>
            ))}
          </Box>
          {/* Right part */}
          <Box
            className="cart-right"
            sx={{
              backgroundColor: "white",
              color: "black",
              flex: 0.4,
              borderRadius: "10px",
              margin: "10px",
              position: "sticky",
              top: 0,
            }}
          >
            {/* Coupon info and description */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Container>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    color: "red",
                    fontFamily: "cursive",
                    fontWeight: "600",
                  }}
                >
                  Checkout
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <ConfirmationNumberIcon sx={{ color: "gray" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    Select/Apply coupons
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ marginTop: "5px" }}>
                  Apply coupons to avail offers on the products
                </Typography>

                {/* checkout */}

                <Box className="cartRightCheckout">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Total Price :
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "700", color: "green" }}
                    >
                      {total}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Discount :
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "700", color: "red" }}
                    >
                      -
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Charges :
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "700", color: "red" }}
                    >
                      {charges}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Grand Total :
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "700", color: "green" }}
                    >
                      {total + charges}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "orange" }}
                    onClick={placeOrder}
                  >
                    Place Order
                  </Button>
                </Box>
              </Container>
            </Box>
          </Box>
        </Box>
      )}

      {/* </Container> */}
    </>
  );
};

export default Cart;
