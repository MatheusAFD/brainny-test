import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../graphql/generated";

interface Props {
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
  authenticaded: boolean;
}

const Context = createContext<Props | undefined | any>(undefined);

function AuthProvider(props: { children: ReactNode }) {
  const [authenticaded, setAuthenticaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [login] = useLoginMutation();
  const roleUser = localStorage.getItem("roleUser");
  const initialValue = {
    handleLogin,
    handleLogout,
    authenticaded,
  };

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
      } else {
        navigate("/meus-registros");
      }
    }
  }

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  useEffect(() => {
    if (location.pathname !== "/") {
      if (roleUser === "admin" && location.pathname !== "/dashboard") {
        navigate("/dashboard");
      }

      if (roleUser === "user" && location.pathname !== "/meus-registros") {
        navigate("/meus-registros");
      }
    }
  }, []);

  return (
    <Context.Provider value={initialValue}>{props.children}</Context.Provider>
  );
}

export { Context, AuthProvider };
