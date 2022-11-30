const appLink =
  "https://apps.apple.com/app/enter-nft-token-gating/id1623372424";

const red = () => {
  location.replace(appLink);
  window.open(appLink);
};

export default function Index() {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      red();
    }, 300);
  }

  return (
    <>
      if you were not redirected use this link
      <a href="https://apps.apple.com/app/enter-nft-token-gating/id1623372424">
        https://apps.apple.com/app/enter-nft-token-gating/id1623372424
      </a>
    </>
  );
}
