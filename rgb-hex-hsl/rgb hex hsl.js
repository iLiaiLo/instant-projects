import { assignCol } from "./controllers/assignAllvalues.js";
import { copyText } from "./controllers/copyController.js";

const colorValuesContainer=document.querySelector(".values");
const colorInput=document.querySelector("#color");

colorInput.addEventListener("change",assignCol);
colorValuesContainer.addEventListener("click",copyText)