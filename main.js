"use strict";

const allSections = document.querySelectorAll(".section");
const allServices = document.querySelectorAll(".services");
const allPics = document.querySelectorAll(".grid_item1");

// Reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  //   console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Reveal services
const revealServices = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("services--hidden");
  observer.unobserve(entry.target);
};

const servicesObserver = new IntersectionObserver(revealServices, {
  root: null,
  threshold: 0.2,
  rootMargin: "50px",
});

allServices.forEach(function (service) {
  servicesObserver.observe(service);
  service.classList.add("services--hidden");
});

// Reveal pictures
const revealPics = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("picture--hidden");
  observer.unobserve(entry.target);
};

const picturesObserver = new IntersectionObserver(revealPics, {
  root: null,
  threshold: 0.2,
});

allPics.forEach(function (picture) {
  picturesObserver.observe(picture);
  picture.classList.add("picture--hidden");
});

/* Modal */
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".btn");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
