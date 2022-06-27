// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// User
import Login from "./components/user/Login";
import Register from "./components/user/Register";
// Admin
import Dashboard from "./components/admin/Dashboard";
// Components
import App from "./App";
import Home from "./components/home/Home"
// Style
import "./index.css";
// Report
import reportWebVitals from "./reportWebVitals";
// Context
import { UserProvider } from "./context/UserContext";
// Route
import PrivateRoutes from "./routes/PrivateRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* User */}
            <Route path="/" element ={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* Private */}
          <Route element={<PrivateRoutes />}>
            <Route element={<App />}>
              <Route element={<PrivateRoutes roleRequired="admin" />}>
                <Route path="/admin" element={<Dashboard />}></Route>
              </Route>
            </Route>
          </Route>
          {/* useNavigate */}
        </Routes>
      </BrowserRouter>

    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
