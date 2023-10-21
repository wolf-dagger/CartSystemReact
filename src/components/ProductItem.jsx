import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slice/CartSlice";

const ProductItem = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          margin: "10px",
          padding: "10px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          borderRadius: "10px",
        }}
      >
        {/* Image of the product */}
        <img
          src={item.image}
          style={{ width: "200px", height: "200px", margin: "auto" }}
        />
        {/* Title of the product */}
        <Typography sx={{ color: "black" }}>
          {item.title.length > 30 ? item.title.substr(0, 30) : item.title}
        </Typography>

        {/* discreption of the produch */}
        <Typography sx={{ color: "black" }}>
          {item.description.length > 60
            ? item.description.substr(0, 60)
            : item.description}
        </Typography>

        {/* Price of the item */}
        <Typography sx={{ color: "black" }}>Price: {item.price}</Typography>
        {/* Add To cart button */}
        {cart.some((x) => x.id === item.id) ? (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
            }}
            onClick={() => removeItemFromCart(item)}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
            }}
            onClick={() => addItemToCart(item)}
          >
            Add to Cart
          </Button>
        )}

        <Button
          variant="contained"
          sx={{
            backgroundColor: "Black",
          }}
        >
          Buy Now
        </Button>
      </Box>
    </>
  );
};

export default ProductItem;
