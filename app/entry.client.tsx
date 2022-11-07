import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { UserCacheContext } from "./contexts/user-cache";

const firstName = localStorage.getItem("firstName") ??"";
const lastName = localStorage.getItem("lastName") ??"";

const userCacheData = { firstName, lastName };

const hydrate = () => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <UserCacheContext.Provider value={userCacheData}>
          <RemixBrowser />
        </UserCacheContext.Provider>
      </StrictMode>
    );
  });
};

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
