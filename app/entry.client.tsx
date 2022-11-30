import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { UserCacheContext } from "./contexts/user-cache";

import { useLocation, useMatches } from "@remix-run/react";
import * as Sentry from "@sentry/remix";
import { useEffect } from "react";

Sentry.init({
  dsn: "https://2206fc3cb2e24e7fa9fdb9885771529d:0d0148b0e94240bb9936a9de8bafce74@o4504246142500864.ingest.sentry.io/4504246144073728",
  tracesSampleRate: 1,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.remixRouterInstrumentation(
        useEffect,
        useLocation,
        useMatches
      ),
    }),
  ],
});

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
