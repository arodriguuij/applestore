import React from "react";
import "./item-description.styles.css";
import { selectNumItemsOfDevice } from "../../redux/bag/bag.selectors";
import { connect } from "react-redux";

const ItemDescription = ({ id, description, extra, price, numItemsOfDevice, subtype }) => { 
  return (
    <div className="item-description">
      <div className="item-description-extra">
        <p>{extra}</p>
      </div>
      <div className="item-description-text">
        <h4 className="item-description-text-description-and-subtype">
          <p>{description}</p><strong className={`colorDefault ${subtype}`}>{subtype}</strong>
        </h4>
        <div className='item-description-price-numItems'>
          <div className='item-description-price'>From {price}€</div>
          {numItemsOfDevice>0 && <div className='item-description-numItems'>{numItemsOfDevice}</div>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  numItemsOfDevice: selectNumItemsOfDevice(ownProps.id)(state),
});

export default connect(mapStateToProps)(ItemDescription);
