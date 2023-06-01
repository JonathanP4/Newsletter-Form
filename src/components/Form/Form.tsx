import { BaseSyntheticEvent, useRef, useState } from "react";
import Button from "../Button/Button";
import classes from "./Form.module.css";

export default function Form(props: { onSubmitEvent: () => void }) {
  const [isValid, setValidity] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const hasError = !isValid && inputTouched;
  const emailRef = useRef<HTMLInputElement>(null);

  function validateEmail(text: string) {
    if (text.trim() === "") {
      setErrorMsg("Email required");
      return;
    }
    const validEmail = /\w+@\w+\.\w+/gi.test(text);
    setValidity(validEmail);
    setErrorMsg("Valid email required");
  }

  function emailChangeHandler(e: BaseSyntheticEvent) {
    setInputTouched(true);
    validateEmail(e.target.value);
  }

  function submitHandler(e: BaseSyntheticEvent) {
    e.preventDefault();
    setInputTouched(true);

    if (!isValid && emailRef.current) {
      validateEmail(emailRef.current?.value);
      return;
    }

    props.onSubmitEvent();
  }

  return (
    <form
      onSubmit={submitHandler}
      className={`${classes.form} ${hasError ? classes["form--invalid"] : ""}`}
    >
      <div className="flex justify-between">
        <label className="font-bold text-sm mb-2" htmlFor="email">
          Email address
        </label>
        {hasError && <span className="text-sm text-red-500">{errorMsg}</span>}
      </div>
      <input
        onChange={emailChangeHandler}
        ref={emailRef}
        type="text"
        id="email"
        placeholder="email@company.com"
        autoComplete="email"
      />
      <Button className="mt-2" type="submit">
        Subscribe to monthly newsletter
      </Button>
    </form>
  );
}
