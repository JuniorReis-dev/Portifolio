document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-menu a.dot");
  const sections = document.querySelectorAll(".section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((dot) => dot.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const currentId = entry.target.getAttribute("id");
      const navLink = document.querySelector(
        `.nav-menu a[href="#${currentId}"]`
      );

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        if (navLink) {
          navLinks.forEach((dot) => dot.classList.remove("active"));
          navLink.classList.add("active");
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
