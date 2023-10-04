// Menu Button
const menuBtn = document.querySelector(".menu-btn");
const navHeader = document.querySelector(".nav-header");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("openMenu");
    navHeader.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("openMenu");
    navHeader.classList.remove("open");
    menuOpen = false;
  }
});

// To Top Functionality
const toTopBtn = document.querySelector(".top-btn");
const topOfPage = document.querySelector(".top-page");
toTopBtn.addEventListener("click", () => {
  console.log("clicked");
  topOfPage.scrollIntoView({ behavior: "smooth" });
});

// inView
inView(".inView")
  .on("enter", (section) => {
    section.classList.add("in-viewport");
  })
  .on("exit", (section) => {
    section.classList.remove("in-viewport");
  });
inView.threshold(0.2);

const viewports = document.querySelectorAll(".inView");
viewports.forEach((viewport, index) => {
  const wDelay = document.querySelectorAll(".w-delay");
  wDelay.forEach((el, index) => {
    el.style.transitionDelay = index * 200 + "ms";
  });

  const imgDelay = document.querySelectorAll(".img-delay");
  imgDelay.forEach((el, index) => {
    el.style.transitionDelay = index * 200 + "ms";
  });

  const hDelay = document.querySelectorAll(".h-delay");
  hDelay.forEach((el, index) => {
    el.style.transitionDelay = index * 100 + "ms";
  });

  const mDelay = document.querySelectorAll(".m-delay");
  mDelay.forEach((el, index) => {
    el.style.transitionDelay = index * 300 + "ms";
  });
});
