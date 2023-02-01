function myFunction() {
  var div = document.getElementById("createBlog");

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

const mydiv = document.getElementById("upload");

mydiv.ondrop = function uploadImage(event) {
  mydiv.style.border = "1px dashed red";
  fileList = event.dataTransfer.files;
  readImage(fileList[0]);
};

function readImage(file) {
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    uploaded_image = event.target.result;

    const img = new Image();

    const height = "500px";
    const width = "500px";
    //const height = mydiv.clientHeight;
    //const width = mydiv.clientWidth;

    //img.setAttribute('style',`width: ${width}px; height: ${height}px`)

    img.src = uploaded_image;
    img.style.width = "5px";
    img.style.height = "5px"; //slow for page loading but can modify easier
    mydiv.appendChild(img);

    document.querySelector("#upload").style.backgroundSize = "cover";
    document.querySelector("#upload").style.backgroundImage = `url(${img.src})`;
  });
  reader.readAsDataURL(file);
}

mydiv.ondragend = function (event) {
  event.preventDefault();
};

mydiv.ondragover = function (event) {
  event.preventDefault();
};

document.ondragover = function (event) {
  event.preventDefault();
};

document.ondrop = function (event) {
  event.preventDefault();
};

document.ondragend = function (event) {
  event.preventDefault();
};
