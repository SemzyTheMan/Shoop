import { DashboardLayout } from "../../layouts/dashboard";
import { Input } from "../../components/Forms/Input/Input";
import { Slip } from "../../components/Slip/slip";
import { SlipStatus } from "../../components/Slip/status";
import { DCol, Table } from "../../components/Table/Table";
import { IButton } from "../../components/Buttons/button";
import React from "react";
const filters = [{ filter: "Fixtures", active: true }];
const Dashboard = () => {
  const testColumns: DCol[] = [
    { header: "N/A", valueField: "id" },
    { header: "Date", valueField: "date" },
    { header: "Time", valueField: "time" },
    { header: "League", valueField: "league" },
    { header: "Home vs. Away", valueField: "match" },
    { header: "X", valueField: "odd", weight: "font-bold" },
    {
      header: "Action",
      valueField: "v",
      type: "icon",
      icon: <IButton icon={<i>+</i>} text={"Add to Slip"} />,
    },
  ];
  const data = [
    {
      date: "11 Jan",
      time: "20:00",
      league: "English Premier League",
      match: "Manchester United vs. Liverpool",
      odd: 4.35,
    },
  ];
  const Article = () => (
    <div>
      <div className={"mb-6"}>
        <Slip slips={[]} />
      </div>
      <div className={"mt-6"}>
        <SlipStatus />
      </div>
    </div>
  );
  const p = { name: "Busayo" };
  return (
    <DashboardLayout
      filters={filters}
      header={{
        title: `Welcome back ${p.name},`,
        subtitle: "Continue managing your dashboard",
        wallet: 1000,
      }}
      article={<Article />}
    >
      <div className={"pb-24"}>
        <div
          className={"flex flex-row border-b border-teal-50 gap-6 py-4 px-4"}
        >
          <Input
            type={"select"}
            options={["NAP3"]}
            className={"rounded min-w-[100px]"}
            placeholder={"Game type"}
          />
          <Input
            type={"select"}
            options={["English Premier League"]}
            className={"rounded min-w-[100px]"}
            placeholder={"League"}
          />
          {/*TODO: Add search icon to input*/}
          <Input
            type={"search"}
            placeholder={"Search for games"}
            className={"rounded min-w-[200px]"}
          />
        </div>
        <div>
          <Table
            columns={testColumns}
            data={Array(13)
              .fill(1)
              .map((_, idx) => idx + 1)
              .map((i) => {
                return { id: i, ...data[0] };
              })}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
