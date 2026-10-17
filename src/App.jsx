import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import OrderOnline from "./components/OrderOnline";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <OrderOnline />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
