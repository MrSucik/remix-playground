import { createContext } from "react";
import type { UserData } from "~/types";

export const UserCacheContext = createContext<UserData>({
  firstName: "",
  lastName: "",
});
