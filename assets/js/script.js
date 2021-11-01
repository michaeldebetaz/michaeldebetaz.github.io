const toggler = document.getElementById("nav__toggler");

toggler.addEventListener("click", () => {
  if (toggler.className.includes("--open")) {
    toggler.classList.remove(`${toggler.className}--open`);
  } else {
    toggler.classList.add(`${toggler.className}--open`);
  }
  console.log(`${toggler.className}`);
});
