import { DCol, Table } from "../../components/Table/Table";
import React from "react";
import { Slip, SlipDetails } from "../../components/Slip/slip";
import { Input } from "../../components/Forms/Input/Input";
import { DashboardLayout } from "../../layouts/dashboard";

const filters = [
  { filter: "All", active: true },
  { filter: "Won", active: false },
  { filter: "Running", active: false },
  { filter: "Lost", active: false },
];

const Bets = () => {
  const betColumns: DCol[] = [
    { header: "Date", valueField: "date" },
    { header: "Time", valueField: "time" },
    { header: "Ticket ID", valueField: "ticket" },
    { header: "Potential winnings", valueField: "winnings" },
    { header: "Status", valueField: "status" },
    {
      valueField: "v",
      type: "icon",
      icon: <img src="/assets/icon.svg" alt=":" />,
    },
  ];
  const data = [
    {
      date: "11 Jan",
      time: "20:00",
      ticket: "7435-AST-DRF4",
      winnings: "252,900.45",
      status: "Won",
    },
  ];
  const Article = () => (
    <div>
      <div className={"mb-6"}>
        <SlipDetails slip={null as unknown as Slip} />
      </div>
    </div>
  );
  const Won = () => (
    <div className="bg-[#ECFDF3] flex flex-row py-2 items-center justify-center">
      <div className={"w-2 h-2 bg-[#11B067] mr-3"}></div>
      <p className={"text-[#027A48]"}> Won</p>
    </div>
  );
  const Lost = () => (
    <div className="bg-[#FFF2F2] flex flex-row py-2 items-center justify-center">
      <div className={"w-2 h-2 bg-[#DD1818] mr-3"}></div>
      <p className={"text-[#B10808]"}> Lost</p>
    </div>
  );
  const Running = () => (
    <div className="bg-[#FFFFED] flex flex-row items-center py-2 justify-center">
      <div className={"w-2 h-2 bg-[#E7DF24] mr-3"}></div>
      <p className={"text-[#9F9909]"}> Running</p>
    </div>
  );
  return (
    <DashboardLayout
      filters={filters}
      header={{
        title: `My Bets`,
        subtitle: "Here is a detailed history of the bets you have placed",
      }}
      article={<Article />}
    >
      <div>
        <div
          className={"flex flex-row border-b border-teal-50 gap-6 py-4 px-4"}
        >
          <Input
            type={"date"}
            className={"rounded min-w-[200px]"}
            placeholder={"Date Range"}
          />
          {/*TODO: Add search icon to input*/}

          <div className={"flex flex-row items-center bg-white"}>
            <span className={"absolute mr-5 ml-2  "}>
              <img src="/assets/share.svg" alt="search" />
            </span>
            <input
              type="text"
              className={
                "rounded pl-7 border-gray-100 outline-gray-100 min-w-[250px]  py-2.5 "
              }
              placeholder={`Search for ticket id`}
            />
          </div>
        </div>
        <div>
          <Table
            columns={betColumns}
            data={Array(13)
              .fill(1)
              .map((_, idx) => idx + 1)
              .map((i) => {
                return {
                  ...data[0],
                  status:
                    i % 3 ? (
                      <Won></Won>
                    ) : i % 2 ? (
                      <Lost></Lost>
                    ) : (
                      <Running></Running>
                    ),
                };
              })}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Bets;
