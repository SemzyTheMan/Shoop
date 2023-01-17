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
      icon: <span>:</span>,
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
            className={"rounded min-w-[100px]"}
            placeholder={"Date Range"}
          />
          {/*TODO: Add search icon to input*/}
          <Input
            type={"search"}
            placeholder={"Search for ticket id"}
            className={"rounded min-w-[200px]"}
          />
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
                  status: i % 3 ? "Won" : i % 2 ? "Lost" : "Running",
                };
              })}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Bets;
