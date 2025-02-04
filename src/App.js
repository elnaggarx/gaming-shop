import Header from "./components/Header/Header";
import "./styles/styles.css";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import About from "./Pages/About";
import WishList from "./Pages/WishList";
function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
        <Offer></Offer>
      </header>
      <main>

        <BrowserRouter>
          <Routes>
             <Route index element={<Home></Home>}></Route>
             <Route path="register" element={<Register></Register>}></Route>
             <Route path="login" element={<Login></Login>}></Route>
             <Route path="about" element={<About></About>}></Route>
             <Route path="wishlist" element={<WishList></WishList>}></Route>


          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      

    </div>
  );
}

export default App;
