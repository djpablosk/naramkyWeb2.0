/* Objavovanie prvkov pri posúvaní (nezávisí od app.js) */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });

  var reveal = ".section-head, .filters, .story-image, .story-text > .eyebrow, .story-text > h2, .story-text > p, .benefits li, .how-steps li, .proof, .final-cta h2, .final-cta p";
  document.querySelectorAll(reveal).forEach(function (el) {
    el.classList.add("reveal");
    io.observe(el);
  });
  document.querySelectorAll(".final-cta .btn").forEach(function (el) {
    el.classList.add("pop");
    io.observe(el);
  });
})();