import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FORM_WRAPPER_STYLE = {
  header_2: {
    textAlign: "center" as const,
    margin: 0,
    marginBottom: "2rem",
  },
  div: {
    display: "grid",
    gap: "1rem .5rem",
    justifyContent: "flex-start",
    gridTemplateColumns: "auto minmax(auto, 400px)",
  },
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 style={FORM_WRAPPER_STYLE.header_2}>{title}</h2>
      <div style={FORM_WRAPPER_STYLE.div}>{children}</div>
    </>
  );
};

export default FormWrapper;
