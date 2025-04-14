import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Reset from "./pages/ResetPassword";
import Guest from "./pages/guest/Guest";
import ViewGuestBill from "./pages/guest/ViewBill";

import SendCode from "./pages/StandardUser/SendCode";
import Settings from "./pages/Settings";

import StandardDashboard from "./pages/StandardUser/StandardDashboard";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/guest-bill" element={<ViewGuestBill />} />
        <Route path="/dashboard" element={<StandardDashboard />} />
        <Route path="/send-code" element={<SendCode />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
