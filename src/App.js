import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import TC from "./Pages/TC";
import ContactUs from "./Pages/ContactUs";
import Earn from "./Pages/Earn";
import CustomerJourney from "./Pages/CustomerJourney";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/tc" element={<TC />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/processflow" element={<CustomerJourney />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
