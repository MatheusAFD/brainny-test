import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoPurple } from "../components/Logo/LogoPurple";
import { useLoginMutation } from "../graphql/generated";

import family from "../assets/img/family.png";

export function Login() {
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [response, setResponse] = useState<any>();

  console.debug("email", email);
  console.debug("password", password);

  const navigate = useNavigate();

  const [login] = useLoginMutation();

  async function handleLogin(event: FormEvent) {
    event?.preventDefault();

    const response = await login({
      variables: {
        email,
        password,
      },
    });

    if (response) {
      localStorage.setItem("token", `${response.data?.login.jwt}`);
    }

    setResponse(response);

    console.log(response);

    if (response.data?.login.jwt) {
      if (response.data.login.user.role?.type === "admin") {
        navigate("/dashboard");
      } else [navigate("/")];
    }
  }

  return (
    <main className="container flex justify-between  items-center pb-96 ">
      <div className="mt-[69px] flex flex-col items-center relative blur-login  ">
        <img src={family} alt="" className="w-[585px] h-[663px]" />
        <h1 className="text-[40px] font-bold text-principal-900">
          Bem vindo ao PontoGo
        </h1>
        <p className="text-[25px] text-principal-900/70 leading-[38px] max-w-[25ch] text-center mt-[10px]">
          Aqui você fará toda gestão do seu sistema de pontos.
        </p>
      </div>

      <form
        onSubmit={handleLogin}
        className="flex flex-col  m-[40px_auto_5px_auto] "
      >
        <LogoPurple width={322} height={75} />
        <p className="text-[40px] font-bold text-principal-900 mt-8">
          Faça login
        </p>

        <label htmlFor="" className="mt-5">
          Email
        </label>
        <input
          type="email"
          className="w-[400px] p-2 rounded-[5px] border border-[#20292e4d] placeholder:text-[#20292E]/4 m-auto"
          placeholder="Email"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="" className="mt-5">
          Senha
        </label>
        <input
          type="password"
          className="w-[400px] p-2 rounded-[5px] border border-[#20292e4d] placeholder:text-[#20292E]/4 m-auto"
          placeholder="Senha"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <a
          href=""
          className="mt-[10px] text-principal-900 text-[15px] underline"
        >
          Esqueci minha senha
        </a>
        <input
          type="submit"
          value="Entrar"
          className="mt-8 w-[400px] h-[50px] bg-principal-900 rounded-[5px] text-white cursor-pointer"
        />
      </form>
    </main>
  );
}
