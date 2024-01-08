import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useSearch } from "./SearchFilterContext";
import { useLocation } from "react-router-dom";
import { useProductsContext } from "./ProductsContextProvider";

const FilterContext = createContext(null);

const FilterContextProvider = ({ children }) => {
  const { setCurrentPage } = useProductsContext();
  const [sortByPrice, setSortByPrice] = useState(null);
  const [sortByNewestDate, setSortByNewestDate] = useState(false);
  const [filterByColor, setFilterByColor] = useState("");
  const [filterBySale, setFilterBySale] = useState(false);
  const { filteredData } = useSearch();
  const [filteredProducts, setFilteredProducts] = useState(filteredData);
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  const currentCategory = useMemo(() => currentPath, [currentPath]);

  useEffect(() => {
    setFilteredProducts(filteredData);
    if (sortByPrice === "low-to-high") {
      setFilteredProducts((prevState) =>
        [...prevState].sort((a, b) => a.price - b.price)
      );
    } else if (sortByPrice === "high-to-low") {
      setFilteredProducts((prevState) =>
        [...prevState].sort((a, b) => b.price - a.price)
      );
    }

    if (filterByColor.length > 0 && filterByColor !== "color") {
      setFilteredProducts((prevState) =>
        prevState.filter((product) => product.color === filterByColor)
      );
    }

    if(filterBySale){
      setFilteredProducts((prevState) => prevState.filter((product) => product.isOnSale))
    }

    if(sortByNewestDate){
      setFilteredProducts((prevState) => [...prevState].sort((a,b) => new Date(b.date) - new Date(a.date)))
    }

    if (filterByColor !== "" || sortByPrice || filterBySale || sortByNewestDate) {
      setCurrentPage(1);
    }
  }, [
    filterByColor,
    sortByPrice,
    setCurrentPage,
    currentCategory,
    filteredData,
    filterBySale,
    sortByNewestDate
  ]);

  useEffect(() => {
    setSortByPrice(null);
    setFilterByColor("");
    setCurrentPage(1);
  }, [currentCategory, setCurrentPage]);

  const contextValue = {
    setSortByPrice,
    setFilterByColor,
    filteredProducts,
    setFilterBySale,
    setSortByNewestDate,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  const contextValue = useContext(FilterContext);
  return contextValue;
};

export default FilterContextProvider;
