import useScrollToTop from "../../hooks/useScrollToTop";
import { useEffect, useState } from "react";
import { useSearch } from "../../contexts/SearchFilterContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const FilterForm = ({ nav }) => {
  const { handleFilter, setSearch, search } = useSearch();
  const [inputValue, setInputValue] = useState("");
  const { handleClick } = useScrollToTop("smooth");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter();
    handleClick();
    navigate(nav);
    setInputValue("");
  };

  useEffect(() => {
    setInputValue(search);
  }, [search]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={inputValue}
        type="text"
        placeholder={t("Search")}
      />
      <button className="formBtn" type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default FilterForm;