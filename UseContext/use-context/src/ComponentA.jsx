import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("Maddireddy");

  return (
    <>
      <div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello  ${user}`}</h2>
        <UserContext.Provider value={user}>
          <ComponentB></ComponentB>
        </UserContext.Provider>
      </div>
    </>
  );
}
export default ComponentA;
