import { useDispatch, useSelector } from "react-redux";
import {
  addPresentItemsToCart,
  addNewItemsToCart,
} from "../../redux/cartSlice";

import { useNavigate } from "react-router-dom";

import Button from "../button/Button";

import "./productCard.css";

function ProductCard(props) {
  const navigate = useNavigate()
  return (
    <div className="product-card-container" onClick={() => navigate(`/shop/product/${props.productID}`)}>
      <img loading="lazy" src={props.image} alt="product-image" />
      <div className="footer">
        <span className="name">{props.name}</span>
        <span className="price">${props.price}</span>
      </div>

      <Button onClick={props.addToCartClick} buttonName="Add To Cart" buttonType="inverted" />
    </div>
  );
}

export default ProductCard;
