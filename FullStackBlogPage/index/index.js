function myFunction() {
  var div = document.getElementById("blog-modal");

  //** div.style.display only checks for values set programatically by inline style  !== instead of === console.log(`entering myFunction. div.style.display is ${div.style.display}`);
  //above code uses template literal syntax
  // learn string interpolation
  if (div.style.display !== "block") {
    div.style.display = "block";
    div.style.backgroundImage = "";
  } else {
    div.style.display = ""; // "" means default value
  }
}


function submit(){
  window.close;
}
const form = document.querySelector("#my-form");
const blogsSection = document.querySelector("#blogs");
const formdiv = document.querySelector("#blog-modal");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission and page reload

  const title = event.target.elements["titleinput"].value;
  const content = event.target.elements["description"].value;

  // Create a new div element with the blog content
  const blogDiv = document.createElement("div");
  blogDiv.style.cssText = `
  height: 9rem;
  width: 9rem;
  position: relative;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 2rem 2rem 2rem;
  border-radius: 5%;
  border: 1px solid gray;
  z-index:-1;
  text-align:center;
  cursor:pointer;
`;

  const blogCaption = document.createElement("p");
  blogCaption.style.cssText=`
  position: absolute;
  top: 100%;
  color:white;
  font-family: "Times New Roman", Times, serif;
  `
  blogCaption.innerHTML = `${title}`;


  blogDiv.appendChild(blogCaption);
  // Append the new div to the blogs section
  blogsSection.appendChild(blogDiv);
  formdiv.style.display = 'none';
  const titleinput = document.getElementById("titleinput");
  titleinput.value = '';
  //var element = document.getElementsByClassName("blog-caption");
  //console.log(element);
  // Log a message to the console
  //console.log("New blog added:", blogDiv);
  
});

//form.addEventListener('submit', function(event) {              !--No Arrow Function --!

//form.addEventListener('submit', (event) => {       !-- Arrow Function --!

//form.addEventListener('submit', handleFormSubmit);  !-- No Arrow Function and Two Seperate Functions --!
//function handleFormSubmit(event) {
//  event.preventDefault();
