document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get(["bgColor", "textColor", "hideImages"]).then((settings) => {
    document.getElementById("bg-color").value = settings.bgColor || "#121212";
    document.getElementById("text-color").value = settings.textColor || "#ffffff";
    document.getElementById("hide-images").checked = settings.hideImages ?? true;
  });
});

document.getElementById("save-button").addEventListener("click", () => {
  const bgColor = document.getElementById("bg-color").value;
  const textColor = document.getElementById("text-color").value;
  const hideImages = document.getElementById("hide-images").checked;

  browser.storage.local.set({ bgColor, textColor, hideImages }).then(() => {
    const status = document.getElementById("status-message");
    status.textContent = "Settings saved!";
    setTimeout(() => (status.textContent = ""), 2000);
  });
});

