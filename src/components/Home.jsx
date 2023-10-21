import { Container } from "@mui/material";
import Carousal from "./Carousal";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <>
        <Carousal />
        <Container>
          <Products />
        </Container>
      </>
    </>
  );
};

export default Home;
