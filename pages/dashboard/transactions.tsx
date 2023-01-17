import { DCol, Table } from "../../components/Table/Table";
import React from "react";
import { SlipDownload } from "../../components/Slip/slip";
import { Input } from "../../components/Forms/Input/Input";
import { DashboardLayout } from "../../layouts/dashboard";

const filters = [
  { filter: "All Transactions", active: true },
  { filter: "Staked Bets", active: false },
  { filter: "Winnings", active: false },
  { filter: "Deposits", active: false },
  { filter: "Refunds", active: false },
];

const Transactions = () => {
  const betColumns: DCol[] = [
    { header: "Time", valueField: "time" },
    { header: "Type", valueField: "type" },
    { header: "Transaction ID", valueField: "transactionID" },
    { header: "Amount (NGN)", valueField: "amount" },
    { header: "Balance (NGN)", valueField: "balance" },
    {
      valueField: "v",
      type: "icon",
      icon: <span>:</span>,
    },
  ];
  const data = [
    {
      time: "11-01-23; 12:04",
      type: "Staked Bets",
      transactionID: "2123000390ADN12",
      amount: "-2000.00",
      balance: "1,000.00",
    },
    {
      time: "11-01-23; 12:04",
      type: "Deposits",
      transactionID: "22456000390FS12",
      amount: "+3000.00",
      balance: "4,000.00",
    },
    {
      time: "11-01-23; 12:04",
      type: "Refunds",
      transactionID: "214412760TJO121",
      amount: "0.78",
      balance: "4,000.78",
    },
    {
      time: "11-01-23; 12:04",
      type: "Winnings",
      transactionID: "203000390TJO121",
      amount: "+30000.00",
      balance: "34,000.78",
    },
  ];
  const Article = () => (
    <div>
      <div className={"mb-6"}>
        <SlipDownload slips={[]} />
      </div>
    </div>
  );
  return (
    <DashboardLayout
      filters={filters}
      header={{
        title: `Transaction History`,
        subtitle:
          "Here is a detailed history of the transactions you have made ",
        wallet: 1000,
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
                  ...data[i % 4],
                };
              })}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
