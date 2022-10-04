import { useRegisteredTimesQuery } from "../graphql/generated";

import { CardList } from "../components/Dashboard/CardList";
import { SpanHead } from "../components/Dashboard/SpanHead";
import { Sidebar } from "../components/Sidebar/Sidebar";

export function Dashboard() {
  const { data } = useRegisteredTimesQuery({
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  return (
    <main className="bg-[#F2F2F2] w-full h-screen grid grid-cols-[auto_1fr]">
      <Sidebar type="admin" />

      <ul className="p-4 ">
        <div className="flex gap-36 mb-4 mt-10">
          <SpanHead text="Colaborador" />
          <SpanHead text="Data" />
          <SpanHead text="Hora" className="ml-12" />
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
