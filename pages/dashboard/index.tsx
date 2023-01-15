import { DashboardLayout } from "../../layouts/dashboard";
import { Input } from "../../components/Forms/Input/Input";
const filters = [{ filter: "Fixtures", active: true }];
const Dashboard = () => {
  const p = { name: "Busayo" };
  return (
    <DashboardLayout
      filters={filters}
      header={{
        title: `Welcome back ${p.name},`,
        subtitle: "Continue managing your dashboard",
        wallet: 1000,
      }}
    >
      <div className={"flex flex-row border-b border-teal-50 gap-6 py-4 px-4"}>
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
      <div></div>
    </DashboardLayout>
  );
};

export default Dashboard;
