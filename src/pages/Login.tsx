import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

import { Context } from "../Context/AuthContext";
import { LogoPurple } from "../components/Logo/LogoPurple";
import family from "../assets/img/family.png";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export function Login() {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { handleLogin } = useContext(Context);

  async function handleSignIn(data: { email?: string; password?: string }) {
    await handleLogin(data.email, data.password);
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
        onSubmit={handleSubmit(handleSignIn)}
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
          {...register("email")}
          type="email"
          className="w-[400px] p-2 rounded-[5px] border border-[#20292e4d] placeholder:text-[#20292E]/4 m-auto
          pl-5 "
          placeholder="Email"
        />

        <label htmlFor="" className="mt-5">
          Senha
        </label>

        <InputGroup>
          <Input
            {...register("password")}
            type={show ? "text" : "password"}
            placeholder="Senha"
            p={5}
            className="w-[400px] rounded-[5px] bg-blue-900 border !border-[#20292e4d] placeholder:text-[#20292E]/4 m-auto"
          />
          <InputRightElement width="4.5rem">
            {show ? (
              <>
                <EyeInvisibleFilled
                  onClick={handleClick}
                  className="cursor-pointer text-2xl text-principal-900"
                />
              </>
            ) : (
              <>
                <EyeFilled
                  onClick={handleClick}
                  className="cursor-pointer text-2xl text-principal-900"
                />
              </>
            )}
          </InputRightElement>
        </InputGroup>
        <a
          href=""
          className="mt-[10px] text-principal-900 text-[15px] underline place-self-start"
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
