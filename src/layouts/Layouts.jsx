import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function Layouts() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layouts;
