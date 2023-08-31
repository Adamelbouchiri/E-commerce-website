/*=============== Show Menu ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navclose = document.getElementById("nav-close");

/*===== Menu Hide Show =====*/
if (navToggle) {
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.add("show-menu");
  });
}

if (navToggle) {
  navclose.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.remove("show-menu");
  });
}

if (navMenu) {
  navMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

document.addEventListener("click", (e) => {
  if (e.target !== navToggle && e.target !== navMenu) {
    if (navMenu.classList.contains("show-menu")) {
      navMenu.classList.remove("show-menu");
    }
  }
});

/*=============== Image Gallery ===============*/
const mainImg = document.querySelector(".details-img");
const smallImg = document.querySelectorAll(".details-small-img");

smallImg.forEach((img) => {
  img.addEventListener("click", function () {
    mainImg.src = this.src;
  });
});

/*=============== Add size-link active class ===============*/
const sizeLinks = document.querySelectorAll(".size-link");

sizeLinks.forEach((size) => {
  size.addEventListener("click", function (e) {
    sizeLinks.forEach((link) => {
      link.classList.remove("size-active");
    });
    e.target.classList.add("size-active");
  });
});

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories-container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new-container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const hTarget = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    hTarget.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");
  });
});

const detailsBtn = document.querySelector(".details-action-btn");

if (detailsBtn) {
  detailsBtn.onclick = function () {
    detailsBtn.classList.toggle("active");
  };
}

// Scroll To Top
const span = document.querySelector(".scroll-to-top");

window.onscroll = function () {
  if (this.scrollY >= 1200) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
