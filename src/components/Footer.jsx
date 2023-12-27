import footerLogo from "../assets/Footerlogo.png";
import useScrollToTop from "../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { FooterDiv, Navigation } from "./components";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useProductsContext } from "../contexts/ProductsContextProvider";

const Footer = () => {
  const { handleClick } = useScrollToTop();
  const { loading } = useProductsContext();
  const { t } = useTranslation();

  return (
    !loading && (
      <FooterDiv>
        <div className="navHeader">
          <Link onClick={handleClick}>
            <img src={footerLogo} alt="Logo" />
          </Link>
          <div className="navMenu">
            <Navigation>
              <li>
                <Link to={"/aboutUs"}>{t("About Us")}</Link>
              </li>
              <li>
                <Link to={"/contact"}>{t("Contact")}</Link>
              </li>
              <li>
                <Link to={"/returnPolicy"}>{t("Return Policy")}</Link>
              </li>
              <li>
                <Link to={"/privacyPolicy"}>{t("Privacy Policy")}</Link>
              </li>
            </Navigation>
          </div>
        </div>
        <div className="socials">
          <Link target="_blank" to={"https://www.facebook.com/mariamisatelie"}>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </FooterDiv>
    )
  );
};

export default Footer;
