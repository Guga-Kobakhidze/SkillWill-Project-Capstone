import modalPhoto from "../../assets/popupimage.jpg";
import { Overlay } from "../UserInformation/UserInformation";
import useEmailForm from "../../hooks/useEmailForm";
import { ErrorMessage, ModalPopupStyle } from "../components";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";
function ModalForm({ onFormSubmit, loading, sentEmail }) {
  const { emailRef, isValidEmail, onSubmit } = useEmailForm(onFormSubmit);
  const { t } = useTranslation();
  const [isModalClosed, setIsModalClosed] = useLocalStorage(
    "isModalClosed",
    false
  );

  useEffect(() => {}, [isModalClosed]);
  const closeModal = () => {
    setIsModalClosed(true);
  };

  return (
    <div>
      {!isModalClosed && (
        <div>
          <ModalPopupStyle>
            <img className="image" src={modalPhoto} alt="something" />
            <div className="modal">
              <span className="popup_btn" onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} />
              </span>
              <h1 className="percent">15%</h1>
              <p className="text">{t("Sign up")}</p>
              <form onSubmit={onSubmit}>
                <div className="loading">{loading}</div>
                <input
                  style={{
                    border: isValidEmail
                      ? "1px solid black"
                      : "1px solid #96281b",
                  }}
                  className="email"
                  type="text"
                  id="emailInput"
                  placeholder={t("Email address")}
                  ref={emailRef}
                />
                <ErrorMessage
                  className="correct-message"
                  style={{ color: "#1e824c" }}
                >
                  {sentEmail}
                </ErrorMessage>
                {!isValidEmail && (
                  <ErrorMessage className="error-message">
                    {t("Please enter a valid email address")}
                  </ErrorMessage>
                )}
                <button className="submitBtn" type="submit">
                  {t("Submit")}
                </button>
              </form>
              <p className="off">OFF</p>
            </div>
          </ModalPopupStyle>
          <Overlay onClick={closeModal} />
        </div>
      )}
    </div>
  );
}
export default ModalForm;