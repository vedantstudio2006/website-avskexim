import "./Home.css"
import { Header } from "./components/Home/Header";
import { Footer } from "./components/Home/Footer";
import { Ticker } from "./components/Home/Ticker";
import { Feature } from "./components/Home/Feature";
import { Statics } from "./components/Home/Statics";
import { Trust } from "./components/Home/Trust";

export const Home = () => {
  return (
    <>
        <Header/>
        <Ticker/>
        <Feature/>
        <Statics/>
        <Trust/>
        <Footer/>
    </>
  )
}
