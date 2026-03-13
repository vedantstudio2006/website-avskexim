import { NavigateTo } from "../utils/NavigateTo"

export const Social = () => {
  return (
    <>
        <div className="contact">
    <h1 className="contact-title">
      <span>come </span>
      <span>to </span>
      <span>say </span>
      <span>hello: </span>
    </h1>
    <ul className="liquid-ul">
      <li>
        <a href="#" className="liquid-button">
          <span onClick={()=> NavigateTo(`mailto:exports@avskexim.com?subject=${encodeURIComponent("Inquiry")}&body=${encodeURIComponent("Hello AVSKExim !")}`)}>Email</span>
        </a>
      </li>
      <li>
        <a href="#" className="liquid-button">
          <span onClick={()=> NavigateTo(`https://ig.me/m/avskexim?text=${encodeURIComponent("Hello need help with order")}`)}>Instagram</span>
        </a>
      </li>
      <li>
        <a href="#" className="liquid-button">
          <span onClick={()=> NavigateTo(`https://wa.me/918830418400?text=${encodeURIComponent("Hello! I am interested in your EXIM services.")}`)}>Whatsapp</span>
        </a>
      </li>
    </ul>
  </div>
    </>
  )
}
