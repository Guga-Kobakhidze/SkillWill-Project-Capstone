import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useProductsContext } from "../../contexts/ProductsContextProvider";
import { useEffect } from "react";

const WeddingProducts = () => {
  const { t } = useTranslation();
  const { clothes, setCurrentCategory } = useProductsContext();
  const filteredClothes = clothes.filter((prod) => prod.category === "Wedding");

  useEffect(() => {
    setCurrentCategory("kids");
  }, [filteredClothes, setCurrentCategory]);

  return (
    <ProductList
      products={filteredClothes}
      productsPerPage={20}
      category={t("Wedding")}
    />
  );
};

export default WeddingProducts;
