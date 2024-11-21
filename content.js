// const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
/*
if (isDarkMode) {
  document.documentElement.style.backgroundColor = "#121212";
  document.documentElement.style.color = "#ffffff";
}
*/

browser.storage.local.get(["bgColor", "textColor", "hideImages"]).then((settings) => {
  const bgColor = settings.bgColor || "#121212";
  const textColor = settings.textColor || "#ffffff";
  const hideImages = settings.hideImages ?? true;

  document.documentElement.style.backgroundColor = bgColor;
  document.documentElement.style.color = textColor;

  if (hideImages) {
    document.querySelectorAll("img, video").forEach((el) => (el.style.display = "none"));
  }
});
