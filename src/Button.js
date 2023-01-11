import { useState } from "react";
// import Menubar from "./menubar";

function Btntask() {
  const [cart, setCart] = useState(0);
  const [enable, setEnable] = useState(false);
  return (
    <div className="twoButton">
      <button className="cartBtn addcart"
        disabled={enable}
        onClick={() => {
          setCart(cart + 1);
          setEnable(true);
        }}
      >
        Add cart
      </button>
      <p>{cart}</p>
      <button className="cartBtn removecart"
        onClick={() => {
          setCart(Math.max(cart - 1, 0));
          setEnable(false);
        }}
      >
        Remove cart
      </button>
      {/* <Menubar /> */}
    </div>
  );
}

export default Btntask;