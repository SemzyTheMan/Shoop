import { FormGroup } from "../../components/Forms/FormGroup/Formgroup";
import Link from "next/link";
import { Login as LButton } from "../../components/Buttons/button";

const Login = () => {
  return (
    <div
      className={
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      }
    >
      <div
        className={
          "bg-white px-16 py-10 w-full text-center border rounded shadow"
        }
      >
        <h1 className={"block text-3xl"}>Login to your account</h1>
        <span className={"text-base text-teal-700"}>
          Please enter your details
        </span>
        <div className={"my-8 text-start"}>
          <form>
            <FormGroup label={"Email"} type={"email"} className={"my-4"} />
            <FormGroup
              label={"Password"}
              type={"password"}
              className={"my-4"}
            />
            <div
              className={
                "flex flex-row justify-between items-center my-6 text-sm"
              }
            >
              <FormGroup type={"checkbox"} label={"Remember for 30 days"} />
              <Link href={"/"} className={"text-blue-400"}>
                Forgot Password
              </Link>
            </div>
            <LButton className={"w-full rounded-lg"} />
          </form>
        </div>
        <div className={"flex flex-row gap-1 justify-center text-sm"}>
          <span>Don{"'"}t have an account?</span>
          <Link href={"/"} className={"text-blue-400"}>
            Reach out to an agent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
