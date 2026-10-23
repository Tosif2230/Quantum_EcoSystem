import Header from "./layout/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
