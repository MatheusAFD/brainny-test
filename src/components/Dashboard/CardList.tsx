import { formatData } from "../../utils/format-data";

interface CardListProps {
  name: any;
  id: string | any;
  date: Date;
  hour: Date;
}

export function CardList(props: CardListProps) {
  return (
    <li className="flex items-center md:flex-nowrap justify-around md:justify-start p-2 gap-4 w-full  mb-3 bg-white border border-[#20292e4d] relative rounded-2xl md:rounded-[5px] detail-card-dashboard text-sm md:text-base">
      <div className="ml-16 w-40 flex flex-col">
        <p className="text-gray-900 font-bold  ">{props.name}</p>
        <p className="text-gray-900/50 ">{props.id}</p>
      </div>
      <div className="flex gap-x-8  ">
        <p className="text-gray-900/60">
          {formatData(props.date, "dd'/'MM'/'yy")}
        </p>

        <p className="text-gray-900/60 md:ml-40">
          {formatData(props.hour, "kk':'mm'h'")}
        </p>
      </div>
    </li>
  );
}
