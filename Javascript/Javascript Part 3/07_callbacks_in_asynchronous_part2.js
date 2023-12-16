// callbacks , callback hell, pyramid of doom
// asynchronous programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "six";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);
// This code is so difficult to read. So many nested functions one inside another. This is known as Callback Hell.

function changeText(
  element,
  text,
  color,
  time,
  onSuccessCallback,
  onFailureCallback
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback();
      } else {
        if (onFailureCallback) {
          onFailureCallback();
        }
      }
    }
  }, time);
}

changeText(heading1,"one","violet",1000,(()=>{
  changeText(heading2,"two","purple",2000,(()=>{
    changeText(heading3,"three","red",1000,(()=>{
       changeText(heading4,"four","pink",1000,(()=>{
          changeText(heading5,"five","green",2000,(()=>{
             changeText(heading6,"six","blue",1000,(()=>{
                changeText(heading7,"seven","brown",3000,(()=>{
                     changeText(heading8,"eight","cyan",1000,(()=>{
                        changeText(heading9,"nine","#cda562",2000,(()=>{
                            changeText(heading10,"ten","dca562",1000,(()=>{}),(()=>{
                             console.log("Heading 10 does not exists")}))}),(()=>{
                        console.log("Heading 9 does not exists")}))}),(()=>{
                    console.log("Heading 8 does not exists")}))}),(()=>{
                console.log("Heading 7 does not exists")}))}),(()=>{
            console.log("Heading 6 does not exists")}))}),(()=>{
        console.log("Heading 5 does not exists")}))}),(()=>{
    console.log("Heading 4 does not exists")}))}),(()=>{
   console.log("Heading 3 does not exists")}))}),(()=>{
  console.log("Heading 2 does not exists")}))}),(()=>{
console.log("Heading 1 does not exists")}))

// This is known as pyramid of doom. Do not press format document