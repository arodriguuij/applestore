import React from "react";
import { Link } from "react-router-dom";
/* import Button from "../custom-button/button.component"; */
import "./card.styles.css";

const Card = ({ id, img, collection, classes, click }) => {
  return (
    <div className={` ${classes}`}>
      {click ? (
        <Link to={`/${collection}/${id}`}>
          <img alt={id} src={img} />
          {/* <Button className='cardComponentButton'/> */}
        </Link>
      ) : (
        <img alt={id} src={img} />
      )}
    </div>
  );
};

export default Card;
