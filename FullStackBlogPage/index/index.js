function myFunction(){
    
    var div = document.getElementById("createBlog");
    
    //** div.style.display only checks for values set programatically by inline style  !== instead of === console.log(`entering myFunction. div.style.display is ${div.style.display}`);
    //above code uses template literal syntax 
    // learn string interpolation 
    if(div.style.display !== "block")
    {
        div.style.display = "block";
    }
    else{
        div.style.display = ""; // "" means default value
    }



}


const mydiv = document.getElementById("upload");

mydiv.ondragover = function(event){
    event.preventDefault();
    mydiv.style.border = "1px dashed red";

}

mydiv.ondrop = function(event){
    event.preventDefault();
    

}



mydiv.ondragend = function(event){
    event.preventDefault();
    mydiv.style.border = "";
}
function dragImage(){

}


