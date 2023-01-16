import { Card } from "../Card/card";
import { Button } from "../Buttons/button";
import { FormGroup } from "../Forms/FormGroup/Formgroup";

export const SlipStatus = () => {
  const Header = () => (
    <div className={"flex flex-row justify-between items-center"}>
      <h2>Check BetSlip Status</h2>
    </div>
  );

  return (
    <Card header={<Header />}>
      <>
        <form className={"mb-7"}>
          <FormGroup
            type={"text"}
            label={"Ticket ID"}
            placeholder={"Enter Ticket ID"}
          />
        </form>
        <div className={"text-center"}>
          <Button text={"Check Status"} />
        </div>
      </>
    </Card>
  );
};
