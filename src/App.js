import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Pages/About/About";
import Blogs from "./components/Pages/Blogs/Blogs";
import Home from "./components/Pages/Home/Home/Home";
import Services from "./components/Pages/Home/Services";
import Login from "./components/Pages/Login/Login";
import RequireAuth from "./components/Pages/Login/RequireAuth/RequireAuth";
import Register from "./components/Pages/Login/Register/Register";
import ServiceDetail from "./components/Pages/ServiceDetail/ServiceDetail";
import Checkout from "./components/Pages/Checkout/Checkout";
import Footer from "./components/Pages/Shared/Footer/Footer";
import Header from "./components/Pages/Shared/Header";
import NotFound from "./components/Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
