"use strict";
function myFunc() {
  console.log(window);
}
myFunc();

// this and window are same thing but window is more preffered in javascript. That is the reason when we write "use strict" in case of this the output is undefined and in case of window a window object is returned 