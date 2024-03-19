const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navLinks = document.querySelectorAll(".main-nav-list a");

function toggleMobileNav() {
  headerEl.classList.toggle("nav-open");
  document.documentElement.classList.toggle("no-scroll");
  document.body.classList.toggle("no-scroll");

  if (!headerEl.classList.contains("nav-open")) {
    navLinks.forEach((link) => {
      link.removeEventListener("click", toggleMobileNav);
    });
  }
}

btnNavEl.addEventListener("click", () => {
  toggleMobileNav();
  if (headerEl.classList.contains("nav-open")) {
    navLinks.forEach((link) => {
      link.addEventListener("click", toggleMobileNav);
    });
  }
});

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
