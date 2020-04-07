import React from "react";
import "./item-description.styles.css";
import { selectNumItemsOfDevice } from "../../redux/bag/bag.selectors";
import { connect } from "react-redux";

const ItemDescription = ({ id, name, extra, price, numItemsOfDevice }) => {
  return (
    <div className="item-description">
      <div className="item-description-extra">
        <p>{extra}</p>
      </div>
      <div className="item-description-text">
        <p>
          <strong>{name}</strong>
        </p>
        <div className='item-description-price-numItems'>
          <div className='item-description-price'>${price}</div>
          {numItemsOfDevice>0 && <div className='item-description-numItems'>({numItemsOfDevice})</div>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  numItemsOfDevice: selectNumItemsOfDevice(ownProps.id)(state),
});

export default connect(mapStateToProps)(ItemDescription);
