import React from "react";
import Info from "./pages/Info";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutProvider } from "./context/aboutContext";
import Borrow from "./pages/borrow/Borrow";
import { BorrowProvider } from "./contexts/borrowContext/borrowContext";
import Registration from "./pages/earn/Registration";
import Dashboard from "./pages/dashboard/Dashboard";
import { DashboardProvider } from "./contexts/dashboardContext";
import Web3ModalProvider from "./contexts/web3ModalContext";
import { CivicGatewayProvider } from "./contexts/civicGatewayContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CivicPassProvider } from "./contexts/civicGatewayContext";

function App() {
  return (
    <React.StrictMode>
      <Web3ModalProvider>
        <Router>
          {/* <CivicPassProvider> */}
            <AboutProvider>
              <BorrowProvider>
                <DashboardProvider>
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/borrow" element={<Borrow />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/borrow" element={<Borrow />} />
                    <Route path="/register" element={<Registration />} />
                  </Routes>
                </DashboardProvider>
              </BorrowProvider>
            </AboutProvider>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar
              pauseOnHover
              draggable
              closeOnClick
              closeButton={false}
            />
          {/* </CivicPassProvider> */}
        </Router>
      </Web3ModalProvider>
    </React.StrictMode>
  );
}
export default App;
