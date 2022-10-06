import { formatData } from "../../utils/format-data";

interface CardListProps {
  name: string | undefined | null;
  id: string | any;
  date: Date;
  hour: Date;
}

export function CardList(props: CardListProps) {
  return (
    <li className="flex items-center gap-4 w-full min-h-[73px] mb-3 bg-white border border-[#20292e4d] relative rounded-[5px] detail-card-dashboard">
      <div className="ml-16 w-40">
        <p className="text-gray-900 font-bold ">{props.name}</p>
        <p className="text-gray-900/50">{props.id}</p>
      </div>
      <p className="text-gray-900/60">
        {formatData(props.date, "dd'/'MM'/'yy")}
      </p>

      <p className="text-gray-900/60 ml-40">
        {formatData(props.hour, "kk':'mm'h'")}
      </p>
    </li>
  );
}
