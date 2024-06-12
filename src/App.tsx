import "./App.css";
import { Grind } from "./components/Grind";
import { Hero } from "./components/Hero";
import { Hook } from "./components/Hook";
import { Logo } from "./components/Logo";
import icon from './assets/icon-scroll.svg'
import { Content } from "./components/Content";
import { PricePlans } from "./components/PricePlans/PricePlans";
import { EmailForm } from "./components/EmailForm";

function App() {
  return (
    <div className="app">
      <Logo />
      <Hero />
      <Hook />
      <Grind />
      <img  src={icon}/>
      <Content />
      <PricePlans />
      <EmailForm />
    </div>
  );
}

export default App;
