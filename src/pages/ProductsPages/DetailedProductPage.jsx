import Slider from "../../components/Slider";
import PhotoSwiper from "../../components/PhotoSwiper";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsContext } from "../../contexts/ProductsContextProvider";
import { DetailedProducts, SimilarProductTitle } from "../AllPages";
import SliderForMobile from "../../components/SliderForMobile";

const DetailedProductPage = () => {
  const { t } = useTranslation();
  const { productId } = useParams();
  const { mainPhoto, addFav: addtoFav, clothes } = useProductsContext();
  const imagesForSlider = clothes.filter((product) => product.id !== productId);

  const isMobileView = window.innerWidth <= 768
  return (
    <div>
      {clothes?.map(
        (prod) =>
          prod.id === productId && (
            <DetailedProducts key={prod.id}>
                {isMobileView && <div className="slider-container"><SliderForMobile images={[prod.image, ...prod.moreImages]}/></div>}  
              <div className="detailed-slider">
                <PhotoSwiper photos={prod.moreImages} id={prod.id} />
              </div>
              {!isMobileView && 
              <img
                className="detailed-product-image"
                src={mainPhoto || prod.image}
                alt=""
              />}
              <div className="detailed-product-details">
                <h1 className="detailed-product-name">{prod.name}</h1>
                <h2 className="d-p-id">{prod.id.slice(-6)}</h2>
                <h2 className="detailed-product-price">{prod.price}</h2>
                <div onClick={() => addtoFav(prod)} className="d-p-favorite">
                  {}
                  <h2>
                    {prod.isFavorited
                      ? ` ${t("Added To Favorites")} `
                      : ` ${t("Add To Favorites")} `}
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: prod.isFavorited ? "brown" : "black" }}
                  />
                </div>
                <h5 className="product-description">{t("Description")}</h5>
                <h5 className="product-description-text">{prod.description}</h5>
              </div>
            </DetailedProducts>
          )
      )}
      <SimilarProductTitle>{t("Similar Products")}</SimilarProductTitle>
      <Slider images={imagesForSlider} imagesPerView={4} />
    </div>
  );
};
export default DetailedProductPage;
