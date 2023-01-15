import { Logo } from "../components/Logo/logo";
import { Login } from "../components/Buttons/button";

const Header = () => (
  <div className={"flex flex-row justify-between items-center px-10 py-4"}>
    <Logo />
    <Login />
  </div>
);

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={"bg-[#EDF2FC] min-h-screen relative"}>
      <Header />
      <main className={"block"}>{children}</main>
    </div>
  );
};
