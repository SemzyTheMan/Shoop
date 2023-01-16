import { AltLogin, Button } from "../components/Buttons/button";

export default function Home() {
  return (
    <>
      <div className={"bg-home flex justify-center items-center h-[750px]"}>
        <div className={"max-w-[750px] text-center"}>
          <h1 className={"text-6xl text-white font-semibold leading-[68px]"}>
            Win up to 5 million naira when you bet with us today
          </h1>
          <h4 className={"text-[24px] text-teal-100 leading-[32px] mx-[108px]"}>
            Find a centre closest to you and speak to one of our representatives
            to help you get started.
          </h4>
          <Button text={"Find centres"} className={"mt-8"} />
        </div>
      </div>
      <div className={"flex flex-row justify-center py-16 text-center"}>
        <div>
          <h3 className={"text-2xl mb-2"}>Are you one of our cashiers?</h3>
          <h5 className={"text-lg text-[#667085] mb-4"}>
            Please log in to access your account
          </h5>
          <AltLogin />
        </div>
      </div>
      <div
        className={
          "flex flex-row justify-between iems-center mx-[112px] py-8 border-t border-gray-200 mb-4"
        }
      >
        <span>&copy; 2023 Shopaholic Lotteries Ltd. All rights reserved.</span>
        <div className="flex flex-row gap-6">
          <i>f</i>
          <i>I</i>
          <i>T</i>
          <i>Y</i>
        </div>
      </div>
    </>
  );
}
