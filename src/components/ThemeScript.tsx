export const themeScript = `
(function () {
  try {
    var themes = ["default","legacy","midnight","forest","sunset","contrast"];
    var raw = localStorage.getItem("siteTheme") || "default";
    var theme = themes.indexOf(raw) >= 0 ? raw : "default";
    document.documentElement.dataset["theme"] = theme;
    document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;
