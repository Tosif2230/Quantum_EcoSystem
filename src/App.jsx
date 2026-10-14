import Header from "./Pages/Header";
import Hero from "./Pages/Hero";
import Card from "./Pages/Card";
import Refer from "./Pages/Refer";
import Security from "./Pages/Security";
import Partners from "./Pages/Partners";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Card />
      <Refer />
      <Security />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
