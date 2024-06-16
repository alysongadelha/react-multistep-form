import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import { useMultistepForm } from "./useMultistepForm";

const APP_STYLE = {
  div: {
    position: "relative" as const,
    background: "white",
    border: "1px solid black",
    padding: "2rem",
    margin: "1rem",
    borderRadius: ".5rem",
    fontFamily: "Arial",
    maxWidth: "max-content",
  },
  divStepsForm: {
    position: "absolute" as const,
    top: ".5rem",
    right: ".5rem",
  },
  divButtonForm: {
    marginTop: "1rem",
    display: "flex",
    gap: ".5rem",
    justifyContent: "flex-end",
  },
};

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>): void =>
    setData((prevData) => ({ ...prevData, ...fields }));

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }
    alert(`Successful Account Creation!, ${JSON.stringify(data)}`);
  };
  return (
    <div style={APP_STYLE.div}>
      <form onSubmit={onSubmit}>
        <div style={APP_STYLE.divStepsForm}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={APP_STYLE.divButtonForm}>
          {
            <button disabled={isFirstStep} type="button" onClick={back}>
              Back
            </button>
          }
          {<button type="submit">{isLastStep ? "Finished" : "Next"}</button>}
        </div>
      </form>
    </div>
  );
}

export default App;
