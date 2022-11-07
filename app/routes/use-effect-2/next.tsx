import { Form } from "@remix-run/react";
import { useState, useContext } from "react";
import { UserCacheContext } from "~/contexts/user-cache";

const UseEffectPage = () => {
  const cache = useContext(UserCacheContext);
  const [firstName, setFirstName] = useState(cache.firstName);
  const [lastName, setLastName] = useState(cache.lastName);

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
      <button onClick={save}>Save</button>;
    </Form>
  );
};

export default UseEffectPage;
