// components/Layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main style={{ padding: "1rem" }}>
        <Outlet /> {/* renders child routes here */}
      </main>
      <Footer />
    </>
  );
}
