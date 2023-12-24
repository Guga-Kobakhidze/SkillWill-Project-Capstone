import { useState } from "react";
import "./FilterStyle.css";
import { useTranslation } from "react-i18next";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedPriceOption, setSelectedPriceOption] = useState("");
  const [selectedColorOption, setSelectedColorOption] = useState("");
  const { t } = useTranslation();

  const handleClick = () => {
    setShowFilter((prevState) => !prevState);
  };

  const handlePriceChange = (event) => {
    setSelectedPriceOption(event.target.value);
    setShowFilter(false);
  };

  const handleColorChange = (event) => {
    setSelectedColorOption(event.target.value);
    setShowFilter(false);
  };

  return (
    <div className="filter-container">
      <span
        className="material-symbols-outlined filter-icon"
        onClick={handleClick}
      >
        page_info
      </span>
      {showFilter && (
        <div className="filter-dropdown">
          <select
            className="filter-select-options"
            name="select-size"
            value={selectedPriceOption}
            onChange={handlePriceChange}
          >
            <option value="price">{t("Price")}</option>
            <option value="low-to-high">{t("Low to High")}</option>
            <option value="high-to-low">{t("High to Low")}</option>
          </select>
          <select
            className="filter-select-options"
            name="select-color"
            value={selectedColorOption}
            onChange={handleColorChange}
          >
            <option value="color">{t("Color")}</option>
            <option value="red">{t("Red")}</option>
            <option value="blue">{t("Blue")}</option>
            <option value="white">{t("White")}</option>
            <option value="black">{t("Black")}</option>
          </select>
          <span className="filter-options">{t("With Discount")}</span>
          <span className="filter-options">{t("Newest")}</span>
        </div>
      )}
    </div>
  );
};

export default Filter;