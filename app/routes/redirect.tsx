const isIOS = () =>
  [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod",
  ].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac");
export const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=xyz.enter.app";
export const appStoreUrl =
  "https://apps.apple.com/app/enter-nft-token-gating/id1623372424";

export default function Index() {
  if (typeof window !== "undefined") {
    const isAppleDevice = isIOS();
    console.log(isAppleDevice);

    window.location.assign(isAppleDevice ? appStoreUrl : googlePlayUrl);
  }

  return <></>;
}
