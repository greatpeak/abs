import Footer from "./components/general/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/general/Header";
import AboutUs from "./components/aboutus/index"
import ContactUs from "./components/contact-us";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<h2>Hello</h2>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
