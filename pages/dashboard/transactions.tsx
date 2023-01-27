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
      icon: <img src="/assets/Icon.svg" alt="" />,
    },
  ];
  interface AmountProps {
    amount: any;
    icon: any;
  }
  const Amount = ({ amount, icon }: AmountProps) => (
    <div className="flex flex-row justify-center">
      <p className="flex items-center">
        {amount}{" "}
        <span className="ml-1">
          <img src={icon} alt="down" />
        </span>
      </p>
    </div>
  );
  const data = [
    {
      time: "11-01-23; 12:04",
      type: "Staked Bets",
      transactionID: "2123000390ADN12",
      amount: <Amount amount={"2000"} icon={"/assets/arrow-up.svg"}></Amount>,
      balance: "1,000.00",
    },
    {
      time: "11-01-23; 12:04",
      type: "Deposits",
      transactionID: "22456000390FS12",
      amount: <Amount amount={"3000"} icon={"/assets/arrow-down.svg"}></Amount>,
      balance: "4,000.00",
    },
    {
      time: "11-01-23; 12:04",
      type: "Refunds",
      transactionID: "214412760TJO121",
      amount: <Amount amount={"0.78"} icon={"/assets/arrow-down.svg"}></Amount>,
      balance: "4,000.78",
    },
    {
      time: "11-01-23; 12:04",
      type: "Winnings",
      transactionID: "203000390TJO121",
      amount: (
        <Amount amount={"30000"} icon={"/assets/arrow-down.svg"}></Amount>
      ),
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
          className={
            "flex flex-row border-b bg-[#F7F9F] border-teal-50 gap-6 py-4 px-4"
          }
        >
          <Input
            type={"date"}
            className={"rounded min-w-[200px]"}
            placeholder={"Date Range"}
          />
          {/*TODO: Add search icon to input*/}
          <div className={"flex flex-row items-center bg-white relative"}>
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
