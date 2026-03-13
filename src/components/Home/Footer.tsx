
import { NavigateTo } from "../utils/NavigateTo";

import { useSectionNavigation } from "../utils/NavigatePage";

export const Footer = () => {

  const navigatePage = useSectionNavigation();

  return (
    <>
      <div className="footer">
        <div className="usefull-link">
          <ul>
            <li className="footer-title">UseFull Link</li>
            <li onClick={()=> navigatePage("/","")}>
              Home
            </li>
            <li>
              <a href="About.html">About Us</a>
            </li>
            <li>
              <a href="Feature.html">Feature</a>
            </li>
            <li onClick={()=>navigatePage("/Contact","form")}>
              Contacts
            </li>
          </ul>
        </div>
        <div className="quickLink">
          <ul>
            <li className="footer-title">Quick Links</li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Shipping and Delivery Policy</a>
            </li>
            <li>
              <a href="#">Cancellation and Refund Policy</a>
            </li>
          </ul>
        </div>
        <div className="contactUs">
          <ul>
            <li className="footer-title">Contact Us</li>
            <li onClick={()=> NavigateTo(`mailto:exports@avskexim.com?subject=${encodeURIComponent("Inquiry")}&body=${encodeURIComponent("Hello AVSKExim !")}`)}>exports@avskexim.com</li>
            <li>username</li>
            <li onClick={()=> NavigateTo(`https://wa.me/918830418400?text=${encodeURIComponent("Hello! I am interested in your EXIM services.")}`)}>WhatsApp</li>
            <li onClick={()=> NavigateTo(`https://ig.me/m/avskexim?text=${encodeURIComponent("Hello need help with order")}`)}>Instagram</li>
            <li>
              <a href="#">Head Office Address</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
