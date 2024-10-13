import { Destination, Footer, Hero, Pricing, Ready } from "./components";
import { Header } from "./components/header";

export const App = () => {
  return (
    <div>
      <Hero />
      <Destination />
      <Pricing />
      <Ready />
      <Footer />
      <Header />
    </div>
  );
};
