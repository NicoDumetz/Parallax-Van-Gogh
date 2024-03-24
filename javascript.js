const trans = document.querySelectorAll(".trans");
const right = document.querySelectorAll(".place");
const left = document.querySelectorAll(".place2");
const title = document.querySelector(".title");
const head = document.querySelector("header");
const ombre = document.querySelector(".ombre");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const img_content = document.querySelector(".imgcontainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = head.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();
  trans.forEach( element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`
  });
  left.forEach( element => {
    let speed = element.dataset.speed;
    element.style.opacity = - scroll / (header_height / 2) + 1;
    element.style.transform = `translateX(${scroll * speed}px)`
  });
  right.forEach( element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateX(${-(scroll * speed)}px)`
    element.style.opacity = - scroll / (header_height / 2) + 1;
  });
  opacity.forEach(element => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  });
  title.style.opacity = - scroll / (header_height / 2) + 1;
  ombre.style.height = `${scroll * 0.55 + 300}px`;
  content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50  - 50}px)`
  img_content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50  + 50}px)`
  border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`
})