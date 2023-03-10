import { Logo } from "../components/Logo/logo";
import { Login } from "../components/Buttons/button";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-row ${
        router.route.includes("login") ? "justify-center" : "justify-between"
      } items-center px-10 py-3 bg-[#EDF2FC] `}
    >
      <Logo />
      <Login />
    </div>
  );
};

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={"bg-[#F5F8FF] min-h-screen relative"}>
      <Header />
      <main className={"block"}>{children}</main>
    </div>
  );
};
