import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useLocalStorage from "../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import { useTranslation } from "react-i18next";

const ProductList = ({products, productsPerPage, category}) => {
  const [currentPage, setCurrentPage] = useLocalStorage(category, 1)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = products.slice(startIndex, endIndex)
  const {handleClick} = useScrollToTop()
  const { t } = useTranslation();

  const handlePageChange = (event, value) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(value)
  }

  return (
    <div>
      <div className="product-list-top-section">
        <h2 className="new-collection-title">{t("New Collection")}</h2>
        <FontAwesomeIcon className="filter-icon" icon={faFilter} />
      </div>
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div
            className="product-container"
            key={product.id}
            onClick={handleClick}>
          <Link
            style={{color: "black"}}
            to={`/${product.category}/products/${product.id}`}
          >
            <img className="product-image" src={product.image} alt="" />
            <div className="product-name-and-icon">
              <h2 className="product-name">{t('productName')}</h2>
              {product.isFavorited && <FontAwesomeIcon style={{color: "brown"}} icon={faHeart}/>}
            </div>
            <h3 className="product-price">{product.price}</h3>
          </Link>
          </div>
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          className="pagination"
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default ProductList
