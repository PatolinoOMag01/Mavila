import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import "../styles/Product.css";

export default function Product() {

  return (

    <div className="product-page">

      <ProductGallery />

      <ProductInfo />

    </div>

  );

}