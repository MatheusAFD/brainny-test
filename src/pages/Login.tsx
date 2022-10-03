import { FormEvent, useState } from "react";
import { useLoginMutation } from "../graphql/generated";

export function Login() {
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

  const [login] = useLoginMutation();

  async function handleLogin(event: FormEvent) {
    event?.preventDefault();

    const response = await login({
      variables: {
        email,
        password,
      },
    });

    console.log(response);

    // if (response) {
    //   localStorage.setItem("token", `${response.data?.login.jwt}`);
    // }
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col max-w-sm p-10">
      <input
        type="email"
        name=""
        className="border border-black"
        placeholder="Email"
        onChange={(e: any) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name=""
        className="border border-black"
        placeholder="Password"
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
      />
      <input type="submit" value="Clica" className="border" />
    </form>
  );
}
