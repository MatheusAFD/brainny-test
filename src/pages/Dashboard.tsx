import { useRegisteredTimesQuery } from "../graphql/generated";
import { CardList } from "../components/Dashboard/CardList";
import { SpanHead } from "../components/Dashboard/SpanHead";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Logout } from "../components/Landing/Button/Logout";
import { useContext } from "react";
import { Context } from "../Context/AuthContext";

export function Dashboard() {
  const { handleLogout } = useContext(Context);

  const { data } = useRegisteredTimesQuery({
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  return (
    <main className="bg-[#F2F2F2] min-h-screen">
      <div className="p-4">
        <Logout onClick={handleLogout} className="bottom-0 absolute p-4" />
      </div>
      <Sidebar type="admin" />
      <ul className="p-4 flex flex-col items-start ml-0 md:ml-48 ">
        <div className="flex md:gap-36 flex-wrap justify-around  md:justify-start p-4 gap-4 w-full mb-3">
          <SpanHead text="Colaborador" />
          <div className="flex gap-12 ">
            <SpanHead text="Data" />
            <SpanHead text="Hora" className="-mr-4 md:ml-44" />
          </div>
        </div>

        {data?.registeredTimes?.map((colaborator) => {
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
