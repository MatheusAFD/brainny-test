import { createContext, FormEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "../graphql/generated";

interface Props {
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
  authenticaded: boolean;
}

const Context = createContext<Props | undefined | any>(undefined);

function AuthProvider(props: { children: ReactNode }) {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [authenticaded, setAuthenticaded] = useState(false);

  async function handleLogin(email: string, password: string) {
    const response = await login({
      variables: {
        email,
        password,
      },
    });

    if (response) {
      localStorage.setItem("token", `${response.data?.login.jwt}`);
      localStorage.setItem("userId", `${response.data?.login.user.id}`);
      localStorage.setItem(
        "roleUser",
        `${response.data?.login.user.role?.type}`
      );
      setAuthenticaded(true);
    }

    if (response.data?.login.jwt) {
      if (response.data.login.user.role?.type === "admin") {
        navigate("/dashboard");
      } else [navigate("/meus-registros")];
    }
  }

  function handleLogout() {
    localStorage.clear();

    navigate("/login");
  }

  const initialValue = {
    handleLogin,
    handleLogout,
    authenticaded,
  };

  return (
    <Context.Provider value={initialValue}>{props.children}</Context.Provider>
  );
}

export { Context, AuthProvider };
