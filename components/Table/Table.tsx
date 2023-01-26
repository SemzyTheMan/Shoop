export interface DCol {
  header?: string;
  valueField: string;
  type?: "icon";
  icon?: JSX.Element;
  weight?: "font-bold" | "font-semibold";
}
interface TableProps {
  columns: DCol[];
  data: any[];
  pagination?: boolean;
  maxItems?: number;
}

export const Table = ({ columns, data }: TableProps) => {
  return (
    <div className={""}>
      <div className={"overflow-x-auto"}>
        <table className={"min-w-full max-w-full"}>
          <thead
            className={
              "w-full bg-[#F6F9FF] px-4 py-3 text-teal-900 font-semibold px-2"
            }
          >
            <tr>
              {columns.length &&
                columns.map((col, index) => (
                  <th key={index} className={"grow shrink py-3 px-3"}>
                    {col.header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className={"bg-white text-md text-teal-900 px-2"}>
            {data.length &&
              data.map((data, index) => (
                <tr key={index} className={"border-y border-teal-50"}>
                  {columns.length &&
                    columns.map((column, j) => (
                      <td
                        className={[
                          "text-center whitespace-nowrap px-3 py-3",
                          column.weight,
                        ].join(" ")}
                        key={j}
                      >
                        <>
                          {column.type == "icon" && <>{column.icon}</>}
                          {!(column.type == "icon") && (
                            <span>{data[column.valueField]}</span>
                          )}
                        </>
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className={
          "px-3 absolute bottom-2 py-2 flex justify-between left-[240px] w-[calc(100%_-_600px)]"
        }
      >
        <div>Previous</div>
        <div className={"flex flex-row px-2"}>
          <p className={"px-3"}>1</p>
          <p className={"px-3"}>2</p>
          <p className={"px-3"}>3</p>
          <p className={"px-3"}>...</p>
          <p className={"px-3"}>8</p>
          <p className={"px-3"}>9</p>
          <p className={"px-3"}>10</p>
        </div>
        <div>Next</div>
      </div>
    </div>
  );
};
