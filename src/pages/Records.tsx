import { SpanHead } from "../components/Dashboard/SpanHead";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useRegisteredTimesQuery } from "../graphql/generated";

import { formatData } from "../utils/format-data";

export function Dashboard() {
  const { data } = useRegisteredTimesQuery();

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
            <li className="flex items-center gap-4 w-full h-[73px] mb-3 bg-white border border-[#20292e4d] relative rounded-[5px] detail-card-dashboard">
              <div className="ml-16 w-40">
                <p className="text-gray-900 font-bold ">
                  {colaborator?.user?.name}
                </p>
                <p className="text-gray-900/50">
                  {"00" + colaborator?.user?.id?.slice(-3)}
                </p>
              </div>
              <p className="text-gray-900/60">
                {formatData(colaborator?.created_at, "dd'/'MM'/'yy")}
              </p>

              <p className="text-gray-900/60 ml-40">
                {formatData(colaborator?.created_at, "kk':'mm'h'")}
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
