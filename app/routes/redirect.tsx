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

const red = () => {
  window.open("https://apps.apple.com/app/enter-nft-token-gating/id1623372424");
};

export default function Index() {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      red();
    }, 1000);
  }

  return (
    <>
      redirect to{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://apps.apple.com/app/enter-nft-token-gating/id1623372424"
      >
        redirect
      </a>
      <div onClick={() => red()}>asd</div>
    </>
  );
}
