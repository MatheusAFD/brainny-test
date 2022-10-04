import { CardList } from "../components/Dashboard/CardList";
import { SpanHead } from "../components/Dashboard/SpanHead";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useRegisteredTimesUserByUserQuery } from "../graphql/generated";

export function Records() {
  const userId = String(localStorage.getItem("userId"));

  const { data } = useRegisteredTimesUserByUserQuery({
    variables: {
      id: userId,
    },
  });

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
          return (
            <CardList
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
