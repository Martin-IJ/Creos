import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/page/HomePage";
import UserListPage from "./components/page/UserListPage";
import UserDetailsPage from "./components/page/UserDetailsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
