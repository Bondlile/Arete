import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import About from "./components/About";
import Investment from "./components/Investment";
import Faqs from "./components/Faqs";
import Header from "./components/Header";
import Contact from "./components/Contact";

function App() {
  const body = document.body;
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains("scroll-down")
    ) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });
  return (
    <div className="App">
      <Header />
      <Banner />
      <Partners />
      <Investment />
      <About />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
