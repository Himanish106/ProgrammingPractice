//Now your job is to transform the hello world text into heading 1 heading2 heading3 like this....

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
// setTimeout(() => {
//   heading1.textContent = "Heading 1";
//   heading1.style.color = "violet";
// }, 1000);

// Now if you want to also change the heading2 just after 1s after heading1 has changed then you can do like this

setTimeout(() => {
  heading1.textContent = "Heading 1";
  heading1.style.color = "violet";
  setTimeout(() => {
    heading2.textContent = "Heading 2";
    heading2.style.color = "green";
  }, 1000);
}, 1000);
