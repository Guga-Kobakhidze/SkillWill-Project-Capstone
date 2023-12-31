import { useState } from "react";
import { useAuthorization } from "../contexts/AuthorizationContext";

const useRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
  const { closeRegistration, closeRessetPassword } = useAuthorization(false);

  const sendRequest = async (body, custom) => {
    setLoading(true);

    const res = await fetch(url || custom, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_USERS}`,
      },
      body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();
    setLoading(false);
    setSentEmail(true);

    setTimeout(() => {
      setSentEmail(false);
    }, 1000);

    setTimeout(() => {
      closeRegistration();
      closeRessetPassword();
    }, 1000);

    return data;
  };

  return { loading, sentEmail, sendRequest };
};

export default useRequest;
