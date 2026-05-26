import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
// We will import Features, Pricing, Contact, and Register here once they are created
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
