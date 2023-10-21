import About from "./components/About";
import Contact from "../Contact";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
import Order from "./components/Order";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
