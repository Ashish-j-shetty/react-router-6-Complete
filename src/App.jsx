import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import WishList from "./pages/WishList";
import ProductDetail from "./pages/ProductDetail";

import { NavLink } from "react-router-dom";
import NotFound from "./pages/404";
import { Address } from "./pages/Address";
import { Login } from "./pages/Login";
import { Privateroute } from "./Privateroute";
import { useAuth } from "./AuthProvider";

export default function App() {
  const { logout } = useAuth();
  return (
    <div className="App">
      <nav>
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/"
        >
          Home
        </NavLink>
        ||
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/category"
        >
          Category
        </NavLink>
        ||
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/cart"
        >
          Cart
        </NavLink>
        ||
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/wishlist"
        >
          WishList
        </NavLink>
        ||
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/address"
        >
          Address
        </NavLink>
        ||
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/login"
        >
          Login
        </NavLink>
        <button onClick={() => logout()}>logout</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Privateroute path="/address" element={<Address />} />}
      </Routes>
    </div>
  );
}
