import React, {useState} from "react";
import './bag-icon.styles.css';

const BagIcon = (props) => {
  const [toggleBag, setToggleBag] = useState(false);

  const toggleBagHandler = () => {
    setToggleBag(prevState => !prevState)
    console.log(toggleBag);
  }

  return (
    <div className="cart-icon" onClick={toggleBagHandler}>
      {props.children}
    </div>
  );
};

export default BagIcon;
