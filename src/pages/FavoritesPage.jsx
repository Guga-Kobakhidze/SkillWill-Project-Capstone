import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/Pagination";
import { useProductsContext } from "../contexts/ProductsContextProvider";
import { FavoritePage } from "./AllPages";
import { useTranslation } from "react-i18next";

const FavoritesPage = () => {
  const { favorites, setCurrentCategory } = useProductsContext();
  const { t } = useTranslation();

  useEffect(() => {
    setCurrentCategory("favorites")
  }, [favorites, setCurrentCategory])

  return (
    <FavoritePage>
      {favorites.length > 0 ? (
        <ProductList products={favorites} productsPerPage={8} />
      ) : (
        <div className="favorites-no-products">
          <h2 className="favorites-text">{t("not added")}</h2>
          <Link className="favorites-back-button" to="/">
            {t("Back to Products")}
          </Link>
        </div>
      )}
    </FavoritePage>
  );
};

export default FavoritesPage;
