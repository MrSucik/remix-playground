import { Form } from "@remix-run/react";
import { useState, useEffect } from "react";

const UseEffectPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const load = () => {
    setFirstName(localStorage.getItem("firstName") ?? "");
    setLastName(localStorage.getItem("lastName") ?? "");
  };

  useEffect(() => void load(), []);

  const save = () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };

  return (
    <Form>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <span>
        Full name: {firstName} {lastName}
      </span>
      <button onClick={save}>Save</button>
    </Form>
  );
};

export default UseEffectPage;
