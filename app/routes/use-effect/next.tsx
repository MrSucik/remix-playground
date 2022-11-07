import { Form } from "@remix-run/react";
import { useState, useMemo } from "react";

const UseEffectPage = () => {
  const [firstName, setFirstName] = useState("random");
  const [lastName, setLastName] = useState("user");
  const fullName = useMemo(
    () => firstName + " " + lastName,
    [firstName, lastName]
  );
  return (
    <Form>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <span>Your full name: {fullName}</span>
    </Form>
  );
};

export default UseEffectPage;
