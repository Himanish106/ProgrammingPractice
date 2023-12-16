// innerHTML:- Content inside HTML tags
const headline = document.querySelector(".headline");
// console.log(headline);
console.log(headline.innerHTML);

// Output:
{
  /* <h2 id="Main-heading">
Manage Your Tasks <span style="display: none">Hello</span>
</h2>
<button class="btn btn-headline">Learn More</button> */
}

// We can change the content of the queries inside the javascript.
headline.innerHTML = "<h1> InnerHTML is changed </h1>";
headline.innerHTML += "<button class=\"btn\">Learn More</button>";
console.log(headline.innerHTML);