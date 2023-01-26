import { Input } from "../Forms/Input/Input";
import { Card } from "../Card/card";
import { Button } from "../Buttons/button";

export interface Slip {}
interface SlipProps {
  slips?: Slip[];
}
export const Slip = ({ slips }: SlipProps) => {
  const Header = () => (
    <div className={"flex flex-row justify-between items-center"}>
      <h2>BetSlip</h2>
      <Input
        type={"select"}
        options={[{ code: "Game Type", description: "NAP3" }]}
        labelType={"cd"}
        className={"text-[#2C55A2] font-bold bg-[#F0F5FF]"}
        placeholder={"GameType - None"}
      />
    </div>
  );

  return (
    <Card header={<Header />}>
      <>
        <div className={"flex flex-row justify-between"}>
          <span className="text-[#666B75] font-medium">
            Your selections{" "}
            <span className="text-white px-2 py-1 rounded bg-[#2C55A2]">0</span>
          </span>
          <span className="text-[#666B75] font-medium">Odds</span>
        </div>
        <div className={"bg-[#F3F7FF] px-2.5 py-2.5 mt-4 mb-7 text-center"}>
          {!!(slips && slips.length) &&
            slips.map((_, i) => <div key={i}>Slip</div>)}
          {!(slips && slips.length) && (
            <span className="text-[#606163] [word-spacing:-1px]">
              Your bet slip is currently empty. Start betting now to get
              started.
            </span>
          )}
        </div>
        <div className={"text-center"}>
          <Button text={"Place bet"} />
        </div>
      </>
    </Card>
  );
};

export const SlipDetails = ({ slip }: { slip: Slip }) => {
  const Header = () => (
    <div className={"flex flex-row justify-between items-center"}>
      <h2>Bet Details</h2>
    </div>
  );

  return (
    <Card header={<Header />}>
      <>
        <div className={"bg-[#F3F7FF] px-2.5 py-2.5 my-3 text-center"}>
          {!!slip && <div>Slip</div>}
          {!slip && (
            <span>
              Begin by clicking on preview from the menu to see details of the
              bet you have selected.
            </span>
          )}
        </div>
      </>
    </Card>
  );
};

export const SlipDownload = ({}: SlipProps) => {
  return (
    <Card>
      <>
        <div className={"flex flex-row justify-between items-center text-lg"}>
          <h2>Download Spreadsheet</h2>
        </div>
        <div className={"px-2.5 py-2.5 my-3 flex flex-row justify-between"}>
          <Input type={"date"} />
          <Input type={"select"} placeholder={"Type"} options={[]} />
        </div>
        <div className={"w-full"}>
          <Button text={"Download now"} className={"w-full"} />
        </div>
      </>
    </Card>
  );
};
