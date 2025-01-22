import { hexToHsl } from "./assignHSL.js";
import { hexToRgb } from "./assignRGB.js";

const RGB=document.querySelector("#Rgb");
const HEX=document.querySelector("#Hex");
const HSL=document.querySelector("#hsl");
const color=document.querySelector("#coll");


export const assignCol=(e)=>{
    color.style.backgroundColor=`${e.target.value}`;
    HEX.innerText=`${e.target.value}`;
    RGB.innerText=`rgb( ${hexToRgb(e.target.value)[0]} , ${hexToRgb(e.target.value)[1]} , ${hexToRgb(e.target.value)[2]} )`
    HSL.innerText=`hsl( ${hexToHsl(e.target.value)[0]} , ${hexToHsl(e.target.value)[1]}% , ${hexToHsl(e.target.value)[2]}% )`
}