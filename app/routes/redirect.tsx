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
  windowLocation(
    "https://apps.apple.com/app/enter-nft-token-gating/id1623372424"
  );
};

function windowLocation(url: string) {
  var X = setTimeout(function () {
    window.location.replace(url);
    return true;
  }, 300);
  //   @ts-ignore
  if ((window.location = url)) {
    clearTimeout(X);
    return true;
  } else {
    //   @ts-ignore
    if ((window.location.href = url)) {
      clearTimeout(X);
      return true;
    } else {
      clearTimeout(X);
      //   @ts-ignore
      window.location.replace(url);
      return true;
    }
  }
}

export default function Index() {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      red();
    }, 1000);
  }

  return (
    <>
      redirect
      <div onClick={() => red()}>asd</div>
    </>
  );
}
