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
import UserDashboard from "./pages/StandardUser/UserDashboard";
import ListView from "./pages/StandardUser/ListView";
import AddList from "./pages/StandardUser/AddList";
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
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/list-view" element={<ListView />} />
        <Route path="/add-list" element={<AddList />} />
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
