import { useParams, useNavigate } from "react-router-dom"; // useParams() hook gives you the access to URL parameters in React component in the form of Object

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addPresentItemsToCart,
  addNewItemsToCart,
} from "../../redux/cartSlice";

import ProductCard from "../../components/product-card/ProductCard";

import { toast, Toaster } from "react-hot-toast";

import "./category.css";

function Category() {
  const { category } = useParams(); // Destructure category property from the object returned from useParams()

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const categories = useSelector((state) => state.categories.items);
  const currentUser = useSelector((state) => state.user.value);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  const addToCartClick = (e, productData) => {
    e.stopPropagation();

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

  return (
    <>
      <Toaster />
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              addToCartClick={(e) => addToCartClick(e, product)}
              productID={product.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Category;
