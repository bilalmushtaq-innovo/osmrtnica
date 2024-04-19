import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Auth from "@/pages/Auth";

import Navbar from "@/components/navbar";

import Providers from "@/components/providers";
import ProtectedRoute from "@/components/protected-route";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
