import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

import { Context } from "../Context/AuthContext";
import { LogoPurple } from "../components/Logo/LogoPurple";
import family from "../assets/img/family.png";

export function Login() {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>();
  const { handleLogin } = useContext(Context);

  const handleClick = () => setShow(!show);

  async function handleSignIn(data: { email?: string; password?: string }) {
    setLoading(true);

    try {
      await handleLogin(data.email, data.password);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container flex flex-col-reverse lg:flex-row justify-between  items-center md:pb-96 pb-20 p-2">
      <div className="mt-[69px] flex flex-col items-center relative blur-login p-4 ">
        <img
          src={family}
          alt=""
          className="w-96 h-96  md:w-[585px] md:h-[663px]"
        />
        <h1 className="text-[40px] font-bold text-principal-900 text-center">
          Bem vindo ao PontoGo
        </h1>
        <p className="text-[25px] text-principal-900/70 leading-[38px] max-w-[25ch] text-center mt-[10px]">
          Aqui você fará toda gestão do seu sistema de pontos.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="flex flex-col m-[40px_auto_5px_auto] w-[90%] md:max-w-[400px] "
      >
        <LogoPurple width={322} height={75} />
        <p className="text-3xl md:text-[40px] font-bold text-principal-900 mt-8">
          Faça login
        </p>

        <label htmlFor="" className="mt-5">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          className="md:w-[400px] w-[100%] p-2 rounded-[5px] border border-[#20292e4d] placeholder:text-[#20292E]/4 m-auto
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
            className="md:!w-[400px] w-[100%] rounded-[5px] bg-blue-900 border !border-[#20292e4d] placeholder:text-[#20292E]/4 m-auto"
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
          disabled={loading}
          type="submit"
          value="Entrar"
          className="mt-8 md:w-[400px] w-[100%] h-[50px] bg-principal-900 rounded-[5px] text-white cursor-pointer disabled:opacity-50"
        />
      </form>
    </main>
  );
}
