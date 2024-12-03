import { Accordion } from "./accordion";
import "../css/app.css";
import "../scss/reset.scss";
import "../scss/style.scss";

/********** Paste your code here! ************/

window.onload = () => {
  console.log("window.onload");
  Accordion.init();
};

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOMContentLoaded");
//   Accordion.init();
// });
