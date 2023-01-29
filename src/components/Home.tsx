import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-gradient-to-tl from-sky-600 to-sky-300 min-h-screen">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
