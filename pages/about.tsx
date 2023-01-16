import { Logo } from "../components/Logo/logo";
import React from "react";
import { FormGroup } from "../components/Forms/FormGroup/Formgroup";
export default function About() {
  return (
    <>
      <main>
        <h1>About Page</h1>
        <Logo />
        <FormGroup
          type={"checkbox"}
          placeholder={"Enter your text"}
          label={"Sample"}
        />
      </main>
    </>
  );
}
