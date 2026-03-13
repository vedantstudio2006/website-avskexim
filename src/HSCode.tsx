import { useScrollToHash } from "./components/utils/NavigatePage";
import "./HsCode.css"
import { HSFinder } from "./components/Feature/HSFinder";
import { HsCodeInfo } from "./components/Feature/HsCodeInfo";
import Map from "./components/Feature/Map";
import { Footer } from "./components/Home/Footer";

export const HSCode = () => {
  useScrollToHash();
  return (
    <>
      <div id="hs-code-search">
        <HSFinder />
      </div>

      <HsCodeInfo />
      <div id="global-map">
        <Map />
      </div>

      <Footer />
    </>
  );
};
