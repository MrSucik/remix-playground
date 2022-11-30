const appLink =
  "https://apps.apple.com/app/enter-nft-token-gating/id1623372424";

const red = () => {
  location.replace(appLink);
  setTimeout(() => {
    window.open(appLink);
  }, 300);
};

export default function Index() {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      red();
    }, 300);
  }

  return (
    <>
      redirect to{" "}
      <a href="https://apps.apple.com/app/enter-nft-token-gating/id1623372424">
        https://apps.apple.com/app/enter-nft-token-gating/id1623372424
      </a>
    </>
  );
}
