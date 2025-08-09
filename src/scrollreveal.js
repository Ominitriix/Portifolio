const showElement = {
  duration: 600,
  opacity: 0,
};

const slideLeftElement = {
  duration: 800,
  distance: "1rem",
  origin: "left",
  opacity: 0,
};

// Header
ScrollReveal().reveal(".show-elem", showElement);

// Home page
ScrollReveal().reveal(".block", showElement);
ScrollReveal().reveal(".slide-left", slideLeftElement);
ScrollReveal().reveal("#home .show-elem", { ...showElement, delay: 550 });
ScrollReveal().reveal(".mini-title", showElement);
ScrollReveal().reveal(".slide-right", {
  ...slideLeftElement,
  origin: "right",
});

// About page
ScrollReveal().reveal(".slide-top", {
  ...slideLeftElement,
  origin: "top",
  interval: 200,
});

ScrollReveal().reveal(".slide-gradual h4", {
  ...slideLeftElement,
  interval: 400,
});

ScrollReveal().reveal(".slide-gradual p", {
  ...showElement,
  delay: 400,
  interval: 200,
});

// Galery page

ScrollReveal().reveal("#galery .slide-right", {
  ...slideLeftElement,
  origin: "right",
  interval: 400,
});

ScrollReveal().reveal("#galery .scroll-projects", {
  ...showElement,
  interval: 200,
});