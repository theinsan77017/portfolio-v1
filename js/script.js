// select button and links
const menu = document.getElementById("bars");
const header = document.querySelector("header");
// add event listener
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-xmark");
  header.classList.toggle("active");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    header.classList.remove("active");
    menu.classList.remove("fa-xmark");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    // let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      top: element.offsetTop,
      //   top: position,
      behavior: "smooth",
    });
  });
});

// toggle background active
const slideNavigator = (name) => {
  let slides = document.querySelectorAll("section");
  slides.forEach((slide) => {
    slide.classList.remove("active");
    if (slide.classList.contains(name)) {
      slide.classList.add("active");
    }
  });
};

// switch background
window.addEventListener("load", () => {
  const slideBtnList = document.querySelectorAll(".link");
  slideBtnList.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      slideBtnList.forEach((el) => {
        el.classList.remove("active");
      });
      this.classList.add("active");
      slideNavigator(this.getAttribute("data-target"));
    });
  });
});

// javascript for contact form
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const mess = document.getElementById("message");
const subject = document.getElementById("subject");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value} <br> Phone: ${phone.value} <br>Email: ${email.value} <br> Subject: ${subject.value} <br> Message: ${mess.value}`;
  Email.send({
    SecureToken: "f273b260-6e7a-44fa-91e8-53069e5df026",
    To: "bgyi8249@gmail.com",
    From: "bgyi8249@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    items[2].addEventListener("keyup", () => {
      emailCheck();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function emailCheck() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTextEmail = document.querySelector(".error-text.email");
  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
    if (email.value != "") {
      errorTextEmail.innerHTML = "Enter a vaild email address";
    } else {
      errorTextEmail.innerHTML = "Email field can't be blank!";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
    sendEmail();
    form.reset();
    return false;
  }
});

// for animation javascript

document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".hidden-animate");

  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add(getAnimationClass(entry.target));
      }
      //  else {
      //   entry.target.classList.remove(getAnimationClass(entry.target));
      // }
    });
  }

  function getAnimationClass(element) {
    if (element.classList.contains("info-title")) {
      return "info-title-animate";
    } else if (element.classList.contains("home-info-p")) {
      return "home-info-p-animate";
    } else if (element.classList.contains("about-img")) {
      return "about-img-animate";
    } else if (element.classList.contains("about-info")) {
      return "about-info-animate";
    } else if (element.classList.contains("skill-1")) {
      return "skill-1-animate";
    } else if (element.classList.contains("skill-2")) {
      return "skill-2-animate";
    } else if (element.classList.contains("skill-3")) {
      return "skill-3-animate";
    } else if (element.classList.contains("skill-4")) {
      return "skill-4-animate";
    } else if (element.classList.contains("skill-bar-1")) {
      return "bar-1-animate";
    } else if (element.classList.contains("skill-bar-2")) {
      return "bar-2-animate";
    } else if (element.classList.contains("skill-bar-3")) {
      return "bar-3-animate";
    } else if (element.classList.contains("skill-bar-4")) {
      return "bar-4-animate";
    }
  }

  var observer = new IntersectionObserver(handleIntersection, {
    threshold: [0.5],
  });

  sections.forEach(function (section) {
    observer.observe(section);
  });
});

// home typing text animate
var typed = new Typed(".multi-text", {
  strings: ["coder", "youtuber", "designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});
