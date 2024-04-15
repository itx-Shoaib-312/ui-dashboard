import ApexCharts from "apexcharts";

window.ApexCharts = ApexCharts;

document.addEventListener("DOMContentLoaded", () => {
  window.Apex = {
    colors: [
      window.theme.primary,
      window.theme.success,
      window.theme.warning,
      window.theme.danger,
      window.theme.info
    ]
  };

  // Force redraw
  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 250);
});
