import styles from "./Dashboard.module.css";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

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
  activeCheck: any;
}

const urls: URL[] = [
  {
    label: "My Bets",
    path: "/dashboard/bets",
    activeCheck: (path: string) => {
      const router = useRouter();
      let active = false;
      if (router.route.includes(path)) {
        active = true;
      } else {
        active = false;
      }
      return active;
    },
  },
  {
    label: "Transactions",
    path: "/dashboard/transactions",
    activeCheck: (path: string) => {
      const router = useRouter();
      let active = false;
      if (router.route.includes(path)) {
        active = true;
      } else {
        active = false;
      }
      return active;
    },
  },
  {
    label: "Support",
    path: "/dashboard/support",
    activeCheck: (path: string) => {
      const router = useRouter();
      let active = false;
      if (router.route.includes(path)) {
        active = true;
      } else {
        active = false;
      }
      return active;
    },
  },
];

const NavItem = ({ label, path, activeCheck }: URL) => (
  <div
    className={`text-teal-100 ${
      activeCheck(path) === true ? `font-bold` : null
    }`}
  >
    <Link href={path}>{label}</Link>
  </div>
);
const Header = () => (
  <nav className={"flex flex-row  bg-blue-500 gap-4 justify-between"}>
    <div className={"flex flex-row py-2 px-11 gap-4"}>
      {urls.map(({ label, path,activeCheck }, index) => (
        <NavItem activeCheck={activeCheck} key={index} label={label} path={path} />
      ))}
    </div>
    <div className={"flex flex-row py-2 px-11 gap-4 mr-8"}>
      <img src="/assets/facebook.svg" alt="facebook" />
      <img src="/assets/instagram.svg" alt="icon" />
      <img src="/assets/twitter.svg" alt="twitter" />
      <img src="/assets/youtube.svg" alt="youtube" />
    </div>
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
    className={`min-w-[60px] py-2 mr-5 border-blue-500 cursor-pointer text-center ${
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
          <div className={"flex flex-row px-4  bg-[#F7F9FF] gap-2"}>
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
          <div
            className={"overflow-y-auto min-h-full max-h-[calc(100%_+_50px)]"}
          >
            {children}
          </div>
        </div>
        <article className={styles.article}>{article}</article>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};
