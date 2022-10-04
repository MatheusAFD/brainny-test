import { useContext } from "react";
import { CardList } from "../components/Dashboard/CardList";
import { SpanHead } from "../components/Dashboard/SpanHead";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Context } from "../Context/AuthContext";
import { useRegisteredTimesUserByUserQuery } from "../graphql/generated";

export function Records() {
  const userId = String(localStorage.getItem("userId"));

  // const { user } = useContext(Context);
  // console.log(user.id);

  const { data, loading } = useRegisteredTimesUserByUserQuery({
    variables: {
      id: userId,
    },
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  console.log("render");

  if (loading) return <h1>loading...</h1>;
  return (
    <main className="bg-[#F2F2F2] w-full h-screen grid grid-cols-[auto_1fr]">
      <Sidebar type="colaborator" />

      <ul className="p-4 ">
        <div className="flex gap-36 mb-4 mt-10">
          <SpanHead text="Colaborador" />
          <SpanHead text="Data" />
          <SpanHead text="Hora" className="ml-12" />
        </div>

        {data?.registeredTimes?.map((colaborator) => {
          if (!loading)
            return (
              <CardList
                key={colaborator?.id}
                name={colaborator?.user?.name}
                id={colaborator?.id}
                date={colaborator?.created_at}
                hour={colaborator?.created_at}
              />
            );
        })}
      </ul>
    </main>
  );
}
