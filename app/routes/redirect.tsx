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

const red = () => {
  const isAppleDevice = isIOS();
  location.href = isAppleDevice ? appStoreUrl : googlePlayUrl;
};

export default function Index() {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      red();
    }, 3000);
  }

  return (
    <>
      redirect
      <div onClick={() => red()}>asd</div>
    </>
  );
}
