import i18next from "i18next";
import styled from "styled-components";

const isEnglish = i18next.language === "en";
const FontFamily = isEnglish ? "Helvetica" : "Montserrat";

// Header Style

// For Header -->

export const HeaderBg = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(240, 250, 250, 1),
    rgba(223, 223, 223, 0.9)
  );
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: 0.3s ease;
  z-index: 999;
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
`;

export const Navigation = styled.nav`
  width: 380px;
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;

  a {
    color: black;
    transition: 0.3s ease;
    font-family: ${FontFamily};
    font-weight: 500;

    &:hover {
      color: brown;
    }
  }
`;

export const Parameters = styled.div`
  display: flex;
  align-items: center;

  form {
    position: relative;
    margin-right: 40px;

    input {
      width: 230px;
      height: 32px;
      border-radius: 30px;
      border: 1px solid rgba(0, 0, 0, 1);
      color: rgba(0, 0, 0, 1);
      outline: none;
      padding: 5px 15px;
      background-color: transparent;
      transition: 0.3s ease;
      font-family: ${FontFamily};
      font-weight: 500;
    }

    input::placeholder {
      color: rgba(0, 0, 0, 1);
      font-family: ${FontFamily};
      font-weight: 500;
    }

    svg {
      position: absolute;
      right: 15px;
      top: 8px;
    }
  }

  div {
    display: flex;
    gap: 20px;

    button {
      padding: 2px;
      border-radius: 6px;
      border: 2px solid rgba(0, 0, 0, 1);
      color: var(--text-color, black);
      background-color: transparent;
      font-family: ${FontFamily};
      font-weight: 500;
    }

    svg {
      font-size: 22px;
      width: 22px;
    }
  }

  svg,
  button {
    color: black;
    cursor: pointer;
    transition: 0.3s;
  }

  svg:hover {
    color: brown;
  }

  button:hover {
    color: brown;
    border-color: brown;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  font-size: 24px;
  font-family: ${FontFamily};
  font-weight: 700;
  line-height: 36px;
  color: white;
  background-color: black;
  border: 1px solid black;
  border-radius: 6px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
`;

export const SubscriptionStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  h1 {
    font-family: ${FontFamily};
    font-size: 40px;
    font-weight: 300;
    line-height: 54px;
    text-transform: capitalize;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;

    label {
      font-family: ${FontFamily};
      margin-bottom: 15px;
      font-weight: 300;
      font-size: 21px;
      line-height: 29px;
    }

    input {
      font-family: ${FontFamily};
      font-size: 18px;
      font-weight: 300;
      line-height: 25px;
      width: 324px;
      height: 34px;
      border: 1px solid black;
      border-radius: 24px;
      padding-left: 20px;
      color: rgba(0, 0, 0, 0.3);
      outline: none;
      margin-bottom: 50px;
    }

    button {
      padding: 13px 0;
      width: 136px;
      border-radius: 10px;
    }
  }
`;

export const LoadingDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loading = styled.div`
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #fc2f70;
  }

  div:nth-of-type(1) {
    transform: translateX(-100%);
    animation: left-swing 0.5s ease-in alternate infinite;
  }

  div:nth-of-type(3) {
    transform: translateX(-95%);
    animation: right-swing 0.5s ease-out alternate infinite;
  }

  @keyframes left-swing {
    50%,
    100% {
      transform: translateX(95%);
    }
  }

  @keyframes right-swing {
    50% {
      transform: translateX(-95%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const FooterDiv = styled.div`
  background-color: rgba(34, 34, 34, 1);
  padding: 40px 71px;
  display: flex;
  flex-direction: column;

  .navHeader {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    padding-bottom: 78px;
    border-bottom: 1px solid rgba(255, 255, 255, 1);

    a img {
      margin-left: 160px;
    }

    .navMenu nav {
      width: 250px;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;

      a {
        font-family: ${FontFamily};
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: white;

        &:hover {
          color: brown;
        }
      }
    }
  }

  .socials {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 40px;

    svg {
      font-size: 28px;
      color: white;
      transition: 0.3s;

      &:hover {
        color: brown;
      }
    }
  }
`;

export const ModalPopupStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transition: 0.5s;

  position: fixed;
  height: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(217, 217, 217, 1);
  z-index: 5;

  .image {
    width: 520px;
    height: 100%;
  }

  .modal {
    width: 480px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 20px;

    form {
      text-align: center;

      .email {
        width: 320px;
        font-family: ${FontFamily};
        border-radius: 23px;
        border: 2px solid rgba(0, 0, 0, 0.3);
        color: rgba(0, 0, 0, 0.3);
        background-color: transparent;
        outline: none;
        padding: 6px 0 6px 20px;
        margin-bottom: 20px;
      }

      .submitBtn {
        padding: 13px 26px 13px 26px;
        border: 1px solid black;
        color: white;
        background: black;
        font-family: ${FontFamily};
        font-weight: 700;
        font-size: 23px;
        line-height: 28px;
        border-radius: 10px;
      }

      .error-message {
        font-family: ${FontFamily};
        top: -20px;
        left: 240px;
        width: 300px;
      }

      .correct-message {
        font-family: ${FontFamily};
        top: -20px;
        left: 270px;
        width: 300px;
      }

      .loading {
        position: absolute;
        left: 50%;
        top: -20px;
        transform: translate(-50%, -50%);

        div {
          height: 8px;
        }
      }
    }

    .popup_btn {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
    }

    .percent,
    .off {
      font-family: ${FontFamily};
      align-self: start;
      font-size: 132px;
      font-weight: 600;
      line-height: 140px;
      color: black;
    }

    .off {
      align-self: end;
    }

    .text {
      font-family: ${FontFamily};
      text-align: center;
      color: black;
      font-size: 27px;
      font-weight: 600;
      line-height: 32px;
      margin-bottom: 20px;
    }
  }
`;
