import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./SuccessPage.module.css";

export default function SuccessPage(props: { onClickEvent: () => void }) {
  return (
    <Card className={classes["success-card"]}>
      <div>
        <img
          className={classes["success-card__img"]}
          src="/images/icon-success.svg"
          alt=""
        />

        <h1 className="text-5xl font-bold my-6">Thanks for subscribing!</h1>
        <p className="md:pb-6 sm:pb-0">
          A confirmation email has been sent to{" "}
          <span className="font-bold">ash@loremcompany.com</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Button onClickEvent={props.onClickEvent}>Dismiss message</Button>
    </Card>
  );
}
