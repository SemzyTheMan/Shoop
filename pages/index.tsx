import { Button } from "../components/Buttons/button";

export default function Home() {
  return (
    <>
      <div className={"bg-home flex justify-center items-center h-[750px]"}>
        <div className={"max-w-[750px] text-center"}>
          <h1 className={"text-5xl text-white"}>
            Win up to 5 million naira when you bet with us today
          </h1>
          <h4 className={"text-xl text-teal-100"}>
            Find a centre closest to you and speak to one of our representatives
            to help you get started.
          </h4>
          <Button text={"Find centres"} className={"mt-8"} />
        </div>
      </div>
      <div className={"flex flex-row justify-center py-16 text-center"}>
        <div>
          <h3 className={"text-2xl"}>Are you one of our cashiers?</h3>
          <h5 className={"text-lg text-[#667085]"}>
            Please log in to access your account
          </h5>
          <Button text={"Log in"} />
        </div>
      </div>
    </>
  );
}
