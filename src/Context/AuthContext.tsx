import { createContext, FormEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "../graphql/generated";

interface AuthContextProps {
  children: ReactNode;
}

interface Props {
  handleLogin: any;
  handleLogout: any;
  authenticaded: any;
  user: any;
}
interface SignInData {
  email: string;
  password: string;
}
const Context = createContext<Props>();

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

    setUser(response.data?.login.user);

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
  const [user, setUser] = useState<any>();

  const initialValue = {
    handleLogin,
    handleLogout,
    authenticaded,
    user,
  };

  return (
    <Context.Provider value={initialValue}>{props.children}</Context.Provider>
  );
}

export { Context, AuthProvider };
