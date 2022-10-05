import { createContext, FormEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "../graphql/generated";

interface AuthContextProps {
  children: ReactNode;
}
interface Props {
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
  authenticaded: boolean;
}

const Context = createContext<Props | undefined | any>(undefined);

function AuthProvider(props: AuthContextProps) {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

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

  const [authenticaded, setAuthenticaded] = useState(false);

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
