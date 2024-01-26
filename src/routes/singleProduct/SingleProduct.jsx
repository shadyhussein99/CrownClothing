import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPresentItemsToCart,
  addNewItemsToCart,
} from "../../redux/cartSlice";
import "./singleProduct.css";
import SHOP_DATA from "../../shop-data";
import Spinner from "../../components/spinner/Spinner";
import Button from "../../components/button/Button";
import { toast, Toaster } from "react-hot-toast";

function SingleProduct() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.value);
  const cartItems = useSelector((state) => state.cart.value);
  const [singleProduct, setSingleProduct] = useState({});

  const addToCartClick = (productData) => {
    if (currentUser) {
      const existingProduct = cartItems.find(
        (product) => product?.id === productData.id
      );

      if (existingProduct) {
        dispatch(addPresentItemsToCart(productData));
      } else {
        dispatch(addNewItemsToCart(productData));
      }

      toast.success(productData.name + " added to cart");
    } else {
      navigate("/authentication");
    }
  };

  useEffect(() => {
    const allProducts = SHOP_DATA.map((category) => category.items).flat();
    const foundItem = allProducts.find((item) => item.id === Number(productID));
    if (foundItem) {
      setSingleProduct(foundItem);
    }
  }, [productID]);

  return (
    <div className="single_product_container">
      <Toaster />
      {Object.keys(singleProduct).length > 0 ? (
        <>
          <div className="image_container">
            <img
              className="product_image"
              src={singleProduct.imageUrl}
              alt="product image"
            />
          </div>

          <div className="description_container">
            <h1 className="product_heading">{singleProduct.name}</h1>
            <h4 className="product_quantity">
              Remaining 8 pieces in the stock
            </h4>
            <p className="product_details">
              <span className="details_description">Price:</span>{" "}
              <span className="details_value">{singleProduct.price}$</span>
            </p>
            <p className="product_details">
              <span className="details_description">Material:</span>{" "}
              <span className="details_value">Cotton</span>
            </p>
            <p className="product_details">
              <span className="details_description">Colour:</span>{" "}
              <span className="details_value">Black</span>
            </p>

            <Button
              onClick={() => addToCartClick(singleProduct)}
              buttonName="Add To Cart"
              buttonType="inverted"
              style={{ marginTop: "30px" }}
            />
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default SingleProduct;
