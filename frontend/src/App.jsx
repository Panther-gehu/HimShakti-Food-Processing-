import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import ComponentShowcase from "./pages/ComponentShowcase";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ManageProductsPage from "./pages/ManageProductsPage";
import ProtectedRoute from "./Components/ProtectedRoute";

import "./App.css";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website */}

        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

        <Route
          path="/about"
          element={
            <PublicLayout>
              <AboutPage />
            </PublicLayout>
          }
        />

        <Route
          path="/products"
          element={
            <PublicLayout>
              <ProductsPage />
            </PublicLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <PublicLayout>
              <ContactPage />
            </PublicLayout>
          }
        />

        <Route
          path="/showcase"
          element={
            <PublicLayout>
              <ComponentShowcase />
            </PublicLayout>
          }
        />

        <Route
          path="/login"
          element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicLayout>
              <SignupPage />
            </PublicLayout>
          }
        />

        {/* Dashboard */}

        <Route path="/dashboard"
            element={
              <ProtectedRoute>
              <DashboardPage />
              </ProtectedRoute>
            }
        />
        

        <Route path="/product/:id"
          element={
            <ProtectedRoute>
            <ProductDetailsPage />
            </ProtectedRoute>
          }
      />

        <Route path="/manage-products"
          element={
            <ProtectedRoute>
            <ManageProductsPage />
            </ProtectedRoute>
          }
/>

      </Routes>
    </BrowserRouter>

    


        
  );
}

export default App;
