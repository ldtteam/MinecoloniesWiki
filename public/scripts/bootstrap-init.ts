import * as bootstrap from 'bootstrap';
// window.bootstrap = bootstrap;

function loadTooltips() {
  const tooltipList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipList.forEach((element) => new bootstrap.Tooltip(element));
}
document.addEventListener('astro:page-load', loadTooltips);
