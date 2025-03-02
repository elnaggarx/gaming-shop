import Header from "./components/Header/Header";
import "./styles/styles.css";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import About from "./Pages/About";
import WishList from "./Pages/WishList";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductDetails";
import Contact from "./Pages/Contact";
import store from "./redux/store";
import { Provider } from "react-redux";
import Cart from "./Pages/Cart";
import Billing from "./Pages/Billing";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Header></Header>
          <Offer></Offer>
        </header>
        <main>
            <Routes>
              <Route index element={<Home></Home>}></Route>
              <Route path="register" element={<Register></Register>}></Route>
              <Route path="login" element={<Login></Login>}></Route>
              <Route path="about" element={<About></About>}></Route>
              <Route path="wishlist" element={<WishList></WishList>}></Route>
              <Route
                path="product-details"
                element={<ProductDetails></ProductDetails>}
              ></Route>
              <Route path="contact" element={<Contact></Contact>}></Route>
              <Route path="cart" element={<Cart></Cart>}></Route>
              <Route path="billing" element={<Billing></Billing>}></Route>

              <Route path="*" element={<NotFound></NotFound>}></Route>

            </Routes>

        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
