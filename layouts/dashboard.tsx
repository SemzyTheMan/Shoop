import styles from "./Dashboard.module.css";
import Link from "next/link";
import React from "react";
interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
  filters?: { filter: string; active: boolean }[];
  action?: (filter: string) => void;
  article?: JSX.Element | JSX.Element[];
  header: {
    title: string;
    subtitle?: string;
    wallet?: number;
  };
}
interface URL {
  label: string;
  path: string;
}
const urls: URL[] = [
  { label: "My Bets", path: "/dashboard" },
  { label: "Transactions", path: "/dashboard" },
  { label: "Support", path: "/dashboard" },
];

const NavItem = ({ label, path }: URL) => (
  <div className={"text-teal-100"}>
    <Link href={path}>{label}</Link>
  </div>
);
const Header = () => (
  <nav className={"flex flex-row py-2 px-11 bg-blue-500 gap-4"}>
    {urls.map(({ label, path }, index) => (
      <NavItem key={index} label={label} path={path} />
    ))}
  </nav>
);

const FilterComp = ({
  filter,
  action,
  active,
}: {
  filter: string;
  action: (filter: string) => void;
  active: boolean;
}) => (
  <div
    className={`min-w-[60px] py-2 border-blue-500 cursor-pointer text-center ${
      active ? "text-blue-500 border-b" : "text-grey-300"
    }`}
    onClick={() => action(filter)}
  >
    {filter}
  </div>
);
const voidFunc = (f: string) => {
  void f;
  return;
};
export const DashboardLayout = ({
  children,
  filters,
  action,
  header,
  article,
}: LayoutProps) => {
  return (
    <>
      <Header />
      <div className={["grid", styles.gridContainer].join(" ")}>
        <header className={styles.header}>
          <div>
            <h3 className={"text-xl"}>{header.title}</h3>
            <span className={"text-teal-700"}>{header.subtitle}</span>
          </div>
          {header.wallet && (
            <div className={"mr-10"}>
              <p className={"text-teal-700 text-md"}>Wallet balance:</p>
              <span className={"text-2xl"}>
                {header.wallet}
                <span className={"text-grey-100 text-xl"}>(NGN)</span>
              </span>
            </div>
          )}
        </header>
        <aside className={styles.aside}></aside>
        <div className={styles.main}>
          <div className={"flex flex-row px-4 bg-[#E5EAF4] gap-2"}>
            {filters?.length &&
              filters?.map(({ filter, active }, index) => (
                <FilterComp
                  filter={filter}
                  key={index}
                  action={action || voidFunc}
                  active={active}
                />
              ))}
          </div>
          {children}
        </div>
        <article className={styles.article}>{article}</article>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};
